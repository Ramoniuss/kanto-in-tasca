import { createFileRoute } from "@tanstack/react-router";
import { LOCATIONS, isVisible } from "@/data/guide";
import type { Version } from "@/data/types";

// Flash-Lite is intentionally used here: the app only needs short answers and
// the smaller prompt below makes the request much faster than sending the whole guide.
const DEFAULT_MODEL = "gemini-3.5-flash-lite";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9àèéìòù' -]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function allPokemon(version: Version) {
  const names: string[] = [];
  for (const loc of LOCATIONS) {
    for (const encounter of loc.encounters) {
      if (isVisible(encounter.version, version)) names.push(encounter.name);
    }
    for (const trainer of loc.trainers) {
      if (isVisible(trainer.version, version)) {
        for (const mon of trainer.team) names.push(mon.name);
      }
    }
  }
  return unique(names);
}

function compactLocation(loc: (typeof LOCATIONS)[number], version: Version) {
  return {
    id: loc.id,
    nome: loc.name,
    tipo: loc.kind,
    descrizione: loc.blurb,
    palestra: loc.gym ?? null,
    passi: loc.steps.filter((s) => isVisible(s.version, version)).map((s) => s.text),
    oggetti: loc.items.filter((i) => isVisible(i.version, version)).map((i) => `${i.name} — ${i.where}`),
    incontri: loc.encounters
      .filter((e) => isVisible(e.version, version))
      .map((e) => `${e.name} — ${e.place} — Lv. ${e.levels}`),
    allenatori: loc.trainers
      .filter((t) => isVisible(t.version, version))
      .map((t) => `${t.klass} ${t.name}${t.boss ? ` [${t.boss}]` : ""} — ${t.team.map((m) => `${m.name} Lv.${m.level}`).join(", ")} — premio: ${t.reward}`),
  };
}

function selectRelevantLocations(query: string, version: Version) {
  const q = normalize(query);
  const terms = q.split(" ").filter((term) => term.length >= 3);

  const scored = LOCATIONS.map((loc) => {
    const haystack = normalize([
      loc.name,
      loc.blurb,
      loc.gym?.leader ?? "",
      loc.gym?.type ?? "",
      ...loc.steps.map((s) => s.text),
      ...loc.items.map((i) => i.name),
      ...loc.encounters.map((e) => e.name),
      ...loc.trainers.map((t) => `${t.klass} ${t.name} ${t.team.map((m) => m.name).join(" ")}`),
    ].join(" "));

    let score = 0;
    for (const term of terms) {
      if (haystack.includes(term)) score += 1;
      if (normalize(loc.name).includes(term)) score += 5;
      if (normalize(loc.gym?.leader ?? "").includes(term)) score += 8;
      if (loc.trainers.some((t) => normalize(t.name).includes(term))) score += 8;
    }

    return { loc, score };
  })
    .filter(({ loc }) => loc.steps.some((s) => isVisible(s.version, version)) || loc.gym || loc.trainers.some((t) => isVisible(t.version, version)))
    .sort((a, b) => b.score - a.score);

  const matched = scored.filter((entry) => entry.score > 0).slice(0, 8).map((entry) => entry.loc);
  if (matched.length > 0) return matched;

  // For a genuinely open question, give the model a small representative slice,
  // not the complete database.
  return scored.slice(0, 5).map((entry) => entry.loc);
}

function extractText(data: any) {
  return data?.candidates?.[0]?.content?.parts
    ?.map((part: any) => part?.text)
    .filter(Boolean)
    .join("\n") ?? "";
}

function parseAnswer(text: string) {
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    return {
      answer: typeof parsed.answer === "string" ? parsed.answer : cleaned,
      pokemon: Array.isArray(parsed.pokemon) ? parsed.pokemon.filter((x: unknown) => typeof x === "string") : [],
      locations: Array.isArray(parsed.locations) ? parsed.locations.filter((x: unknown) => typeof x === "string") : [],
    };
  } catch {
    // If the model wrapped the JSON in a little extra text, recover the object.
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start >= 0 && end > start) {
      try {
        const parsed = JSON.parse(cleaned.slice(start, end + 1));
        return {
          answer: typeof parsed.answer === "string" ? parsed.answer : cleaned,
          pokemon: Array.isArray(parsed.pokemon) ? parsed.pokemon.filter((x: unknown) => typeof x === "string") : [],
          locations: Array.isArray(parsed.locations) ? parsed.locations.filter((x: unknown) => typeof x === "string") : [],
        };
      } catch {
        // Fall through to plain text.
      }
    }
    return { answer: cleaned, pokemon: [], locations: [] };
  }
}

export const Route = createFileRoute("/api/ai")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "API IA non configurata. Aggiungi GEMINI_API_KEY nelle variabili d'ambiente di Vercel." }, { status: 503 });
        }

        let body: { query?: string; version?: Version };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Richiesta non valida." }, { status: 400 });
        }

        const query = typeof body.query === "string" ? body.query.trim() : "";
        const version: Version = body.version === "lge" ? "lge" : "lgp";
        if (query.length < 2) {
          return Response.json({ error: "Scrivi una domanda più completa." }, { status: 400 });
        }

        const relevantLocations = selectRelevantLocations(query, version);
        const pokemonCatalog = allPokemon(version);
        const knowledge = relevantLocations.map((loc) => compactLocation(loc, version));
        const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
        const useGoogleSearch = process.env.GEMINI_ENABLE_SEARCH === "true";

        const systemInstruction = `Sei l'assistente intelligente di "Kanto in tasca", una guida italiana per Pokémon Let's Go Pikachu e Let's Go Eevee.

Rispondi in italiano, in modo pratico e abbastanza breve.
Usa i dati della guida come fonte principale. Non inventare dati specifici dell'app.
Puoi usare la tua conoscenza generale di Pokémon per spiegare strategie, tipi e debolezze, ma quando citi luoghi, allenatori, livelli, oggetti o incontri della guida usa solo i dati forniti.
Se la domanda è una lotta, dai una strategia concreta.
Nel campo pokemon inserisci solo Pokémon presenti nel catalogo fornito.
Nel campo locations inserisci solo ID presenti nei dati forniti e utili alla risposta.

Rispondi SEMPRE con SOLO JSON valido, senza Markdown e senza testo prima o dopo:
{"answer":"testo breve","pokemon":["Pikachu"],"locations":["palestra-plumbeopoli"]}

Versione: ${version === "lgp" ? "Let's Go Pikachu" : "Let's Go Eevee"}.

CATALOGO POKÉMON PRESENTI NELLA GUIDA:
${pokemonCatalog.join(", ")}

DATI RILEVANTI DELLA GUIDA:
${JSON.stringify(knowledge)}`;

        const payload: Record<string, unknown> = {
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: "user", parts: [{ text: query }] }],
          generationConfig: {
            response_mime_type: "application/json",
            temperature: 0.2,
            maxOutputTokens: 650,
          },
        };

        if (useGoogleSearch) payload.tools = [{ google_search: {} }];

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 25_000);

        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
              body: JSON.stringify(payload),
              signal: controller.signal,
            },
          );

          const data = await response.json();
          if (!response.ok) {
            const message = data?.error?.message || "Il servizio IA non ha risposto correttamente.";
            return Response.json({ error: message }, { status: response.status === 429 ? 429 : 502 });
          }

          const rawText = extractText(data);
          if (!rawText) return Response.json({ error: "L'IA non ha prodotto una risposta." }, { status: 502 });

          const result = parseAnswer(rawText);
          const allowedPokemon = new Set(pokemonCatalog.map(normalize));
          const allowedLocations = new Set(relevantLocations.map((loc) => loc.id));
          result.pokemon = result.pokemon.filter((name: string) => allowedPokemon.has(normalize(name)));
          result.locations = result.locations.filter((id: string) => allowedLocations.has(id));

          const webSources = (data?.groundingMetadata?.groundingChunks ?? [])
            .map((chunk: any) => chunk?.web)
            .filter((web: any) => web?.uri)
            .map((web: any) => ({ title: web.title || web.uri, uri: web.uri }))
            .slice(0, 5);

          return Response.json({ ...result, webSources });
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return Response.json({ error: "La ricerca intelligente sta impiegando troppo tempo. Riprova tra qualche secondo." }, { status: 504 });
          }
          return Response.json({ error: "Impossibile contattare il servizio IA." }, { status: 502 });
        } finally {
          clearTimeout(timeout);
        }
      },
    },
  },
});

import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import { LoaderCircle, Search, Sparkles, ArrowUpRight } from "lucide-react";
import { PokeSprite } from "@/components/poke-sprite";
import { KIND_LABEL, LOCATIONS, isVisible } from "@/data/guide";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/cerca")({ component: CercaPage });

type AiResult = {
  answer: string;
  pokemon: string[];
  locations: string[];
  webSources?: Array<{ title: string; uri: string }>;
};

function CercaPage() {
  const [q, setQ] = useState("");
  const [ai, setAi] = useState<AiResult | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const version = useProgress((s) => s.version) ?? "lgp";
  const query = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const hits: Array<{ locId: string; locName: string; kind: string; title: string; detail: string; poke?: string }> = [];
    for (const loc of LOCATIONS) {
      if (loc.name.toLowerCase().includes(query) || loc.blurb.toLowerCase().includes(query)) {
        hits.push({ locId: loc.id, locName: loc.name, kind: KIND_LABEL[loc.kind], title: loc.name, detail: loc.blurb });
      }
      loc.items.forEach((it) => {
        if (!isVisible(it.version, version)) return;
        if (it.name.toLowerCase().includes(query) || it.where.toLowerCase().includes(query)) {
          hits.push({ locId: loc.id, locName: loc.name, kind: "Oggetto", title: it.name, detail: `${loc.name} · ${it.where}` });
        }
      });
      loc.encounters.forEach((en) => {
        if (!isVisible(en.version, version)) return;
        if (en.name.toLowerCase().includes(query)) {
          hits.push({ locId: loc.id, locName: loc.name, kind: "Pokémon", title: en.name, detail: `${loc.name} · ${en.place} · Lv. ${en.levels}`, poke: en.name });
        }
      });
      loc.trainers.forEach((tr) => {
        if (!isVisible(tr.version, version)) return;
        const label = [tr.klass, tr.name].filter(Boolean).join(" ");
        const team = tr.team.map((m) => m.name.toLowerCase()).join(" ");
        if (label.toLowerCase().includes(query) || team.includes(query)) {
          hits.push({ locId: loc.id, locName: loc.name, kind: "Lotta", title: label, detail: loc.name });
        }
      });
    }
    return hits.slice(0, 40);
  }, [query, version]);

  async function askAi() {
    if (q.trim().length < 2 || aiLoading) return;
    setAiLoading(true);
    setAiError("");
    setAi(null);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q.trim(), version }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Errore durante la ricerca intelligente.");
      setAi(data);
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "Errore durante la ricerca intelligente.");
    } finally {
      setAiLoading(false);
    }
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && q.trim().length >= 2) {
      event.preventDefault();
      askAi();
    }
  }

  return (
    <div className="pb-24">
      <h1 className="font-display text-[2rem] font-medium tracking-tight">Cerca</h1>
      <p className="mt-1 text-sm text-muted">Oggetti, Pokémon, palestre, allenatori.</p>

      <label className="mt-5 flex h-12 items-center gap-2 rounded-lg bg-raised px-3 shadow-card">
        <Search className="size-4 text-subtle" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            if (ai) setAi(null);
            if (aiError) setAiError("");
          }}
          onKeyDown={onInputKeyDown}
          placeholder="Pikachu, Medaglia, Baccalampon…"
          className="h-full w-full bg-transparent text-[16px] outline-none placeholder:text-subtle"
          autoCapitalize="off"
          autoCorrect="off"
          enterKeyHint="search"
        />
      </label>

      <button
        type="button"
        onClick={askAi}
        disabled={q.trim().length < 2 || aiLoading}
        className="mt-2 inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-xs font-medium text-forest transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      >
        {aiLoading ? <LoaderCircle className="size-3.5 animate-spin" /> : <Sparkles className="size-3.5" />}
        {aiLoading ? "Sto cercando nella guida…" : "Ricerca intelligente · chiedi anche in linguaggio naturale"}
      </button>

      {aiError ? <div className="mt-3 rounded-lg bg-raised px-3 py-3 text-sm text-muted shadow-card">{aiError}</div> : null}

      {ai ? (
        <section className="mt-4 min-h-[52vh] rounded-xl bg-raised p-4 shadow-card sm:min-h-0">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest">
            <Sparkles className="size-4" /> Ricerca intelligente
          </div>
          <div className="mt-4 max-h-[58vh] overflow-y-auto pr-1 overscroll-contain">
            <div className="whitespace-pre-line text-[15px] leading-6 text-ink">{ai.answer}</div>

            {ai.pokemon.length > 0 ? (
              <div className="mt-5">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-subtle">Pokémon citati</div>
                <div className="flex flex-wrap gap-2">
                  {ai.pokemon.map((name) => (
                    <span key={name} className="inline-flex items-center gap-1.5 rounded-lg bg-bg px-2 py-1 text-xs font-medium">
                      <PokeSprite name={name} size={30} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {ai.locations.length > 0 ? (
              <div className="mt-5">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-subtle">Nella guida</div>
                <div className="grid gap-2">
                  {ai.locations.map((id) => {
                    const location = LOCATIONS.find((loc) => loc.id === id);
                    if (!location) return null;
                    return (
                      <Link key={id} to="/luogo/$id" params={{ id }} className="flex items-center justify-between rounded-lg bg-bg px-3 py-2.5 text-sm font-medium text-forest">
                        <span>📍 {location.name}</span>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {ai.webSources?.length ? (
              <div className="mt-5 border-t border-black/5 pt-3 text-[11px] text-muted">
                <div className="mb-1 font-semibold uppercase tracking-wider">Fonti web</div>
                <div className="space-y-1">
                  {ai.webSources.map((source) => (
                    <a key={source.uri} href={source.uri} target="_blank" rel="noreferrer" className="block truncate underline underline-offset-2">
                      {source.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <ul className="mt-4 grid gap-2">
        {results.map((hit, i) => (
          <li key={`${hit.locId}-${hit.title}-${i}`}>
            <Link to="/luogo/$id" params={{ id: hit.locId }} className="flex min-h-14 items-center gap-3 rounded-lg bg-raised px-3 py-2.5 shadow-card">
              {hit.poke ? <PokeSprite name={hit.poke} /> : null}
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-subtle">{hit.kind}</span>
                <span className="block truncate text-[15px] font-medium">{hit.title}</span>
                <span className="block truncate text-sm text-muted">{hit.detail}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {query.length >= 2 && results.length === 0 && !ai ? <p className="mt-10 text-center text-sm text-muted">Nessun risultato. Prova la ricerca intelligente.</p> : null}
    </div>
  );
}

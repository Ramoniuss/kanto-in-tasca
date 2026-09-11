import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { Onboarding } from "@/components/onboarding";
import { PARTS, KIND_LABEL, LOCATIONS } from "@/data/guide";
import { gymsBeaten, locDoneCount, overallProgress, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const version = useProgress((s) => s.version);
  const checks = useProgress((s) => s.checks);
  const setVersion = useProgress((s) => s.setVersion);

  if (!version) return <Onboarding />;

  const { done, total, pct } = overallProgress(version, checks);
  const gyms = gymsBeaten(checks, version);
  const continueLoc =
    LOCATIONS.find((l) => {
      const p = locDoneCount(l.id, version, checks);
      return p.done < p.total;
    }) ?? LOCATIONS[0];

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            {version === "lgp" ? "Let’s Go, Pikachu!" : "Let’s Go, Eevee!"}
          </p>
          <h1 className="mt-1 font-display text-3xl font-medium leading-tight tracking-tight">
            Il tuo percorso
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setVersion(version === "lgp" ? "lge" : "lgp")}
          className="mt-1 h-9 rounded-full bg-raised px-3 text-xs font-medium shadow-card"
        >
          Cambia
        </button>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <Stat label="Completato" value={`${pct}%`} />
        <Stat label="Passi" value={`${done}/${total}`} />
        <Stat label="Medaglie" value={`${gyms}/8`} />
      </div>

      {continueLoc ? (
        <Link
          to="/luogo/$id"
          params={{ id: continueLoc.id }}
          className="mt-5 flex items-center justify-between rounded-xl bg-forest px-4 py-4 text-forest-fg"
        >
          <span>
            <span className="block text-xs uppercase tracking-[0.14em] opacity-75">Continua</span>
            <span className="mt-0.5 block font-display text-xl font-medium">{continueLoc.name}</span>
          </span>
          <ChevronRight className="size-5 opacity-80" />
        </Link>
      ) : null}

      <ol className="mt-8 space-y-8">
        {PARTS.map((part) => {
          const locs = LOCATIONS.filter((l) => l.part === part.n);
          return (
            <li key={part.n}>
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="font-display text-lg font-medium tracking-tight">
                  {part.n}. {part.title}
                </h2>
                <p className="text-xs text-subtle">{part.span}</p>
              </div>
              <ul className="overflow-hidden rounded-xl bg-raised shadow-card">
                {locs.map((loc, i) => {
                  const p = locDoneCount(loc.id, version, checks);
                  const complete = p.total > 0 && p.done === p.total;
                  return (
                    <li key={loc.id} className={cn(i > 0 && "border-t border-line")}>
                      <Link
                        to="/luogo/$id"
                        params={{ id: loc.id }}
                        className="flex min-h-14 items-center gap-3 px-3.5 py-2.5"
                      >
                        <span
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full text-xs font-medium tabular-nums",
                            complete ? "bg-forest text-forest-fg" : "bg-forest-soft text-forest",
                          )}
                        >
                          {complete ? <Check className="size-3.5" strokeWidth={2.5} /> : i + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium">{loc.name}</span>
                          <span className="block text-xs text-muted">
                            {KIND_LABEL[loc.kind]}
                            {p.total > 0 ? ` · ${p.done}/${p.total}` : ""}
                          </span>
                        </span>
                        <ChevronRight className="size-4 text-subtle" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-raised px-3 py-3 shadow-card">
      <p className="text-xs uppercase tracking-wider text-subtle">{label}</p>
      <p className="mt-1 font-display text-xl font-medium tabular-nums">{value}</p>
    </div>
  );
}

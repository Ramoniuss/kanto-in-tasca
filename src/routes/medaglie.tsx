import { createFileRoute, Link } from "@tanstack/react-router";
import { PokeSprite } from "@/components/poke-sprite";
import { LOCATIONS, isVisible } from "@/data/guide";
import { checkKey, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/medaglie")({ component: MedagliePage });

function MedagliePage() {
  const version = useProgress((s) => s.version) ?? "lgp";
  const checks = useProgress((s) => s.checks);
  const gyms = LOCATIONS.filter((l) => l.gym);

  return (
    <div>
      <h1 className="font-display text-[2rem] font-medium tracking-tight">Otto medaglie</h1>
      <p className="mt-1 text-sm text-muted">
        I Capipalestra di Kanto, con team, medaglia e MT.
      </p>

      <ol className="mt-6 grid gap-3">
        {gyms.map((loc, i) => {
          const gym = loc.gym!;
          const idx = loc.trainers.findIndex(
            (t) => t.boss === "gym" && isVisible(t.version, version),
          );
          const beaten = idx >= 0 && Boolean(checks[checkKey(loc.id, "tr", idx)]);
          const leader = loc.trainers[idx];
          return (
            <li key={loc.id}>
              <Link
                to="/luogo/$id"
                params={{ id: loc.id }}
                className={cn(
                  "block rounded-xl px-4 py-4 shadow-card",
                  beaten ? "bg-forest text-forest-fg" : "bg-raised",
                )}
              >
                <div className="flex items-baseline justify-between">
                  <p
                    className={cn(
                      "text-[11px] font-medium uppercase tracking-[0.16em]",
                      beaten ? "text-forest-fg/70" : "text-subtle",
                    )}
                  >
                    Palestra {i + 1} · {gym.type}
                  </p>
                  {beaten ? (
                    <span className="text-[11px] uppercase tracking-wider">Ottenuta</span>
                  ) : null}
                </div>
                <h2 className="mt-1 font-display text-xl font-medium">{gym.leader}</h2>
                <p className={cn("mt-1 text-sm", beaten ? "opacity-80" : "text-muted")}>
                  {gym.badge} · {gym.tm}
                </p>
                {leader ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {leader.team.map((mon, mi) => (
                      <li
                        key={`${mon.name}-${mi}`}
                        className={cn(
                          "flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2",
                          beaten ? "bg-bg/10" : "bg-line/80",
                        )}
                      >
                        <PokeSprite name={mon.name} size={28} />
                        <span className="text-xs">
                          {mon.name}{" "}
                          <span className="tabular-nums opacity-70">Lv.{mon.level}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Sparkles } from "lucide-react";
import { CheckRow } from "@/components/check-row";
import { PokeSprite } from "@/components/poke-sprite";
import { KIND_LABEL, LOCATIONS, isVisible } from "@/data/guide";
import type { Location, Version } from "@/data/types";
import { checkKey, locDoneCount, useProgress } from "@/lib/progress";

function SectionTitle({
  children,
  count,
}: {
  children: string;
  count?: number;
}) {
  return (
    <div className="mb-2 mt-7 flex items-end justify-between">
      <h2 className="font-display text-xl font-medium tracking-tight">{children}</h2>
      {count != null ? (
        <span className="text-xs tabular-nums text-subtle">{count}</span>
      ) : null}
    </div>
  );
}

export function LocationView({ loc }: { loc: Location }) {
  const version = useProgress((s) => s.version) ?? "lgp";
  const checks = useProgress((s) => s.checks);
  const toggle = useProgress((s) => s.toggle);
  const { done, total } = locDoneCount(loc.id, version, checks);
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  const steps = loc.steps.filter((s) => isVisible(s.version, version));
  const items = loc.items.filter((s) => isVisible(s.version, version));
  const encounters = loc.encounters.filter((s) => isVisible(s.version, version));
  const trainers = loc.trainers.filter((s) => isVisible(s.version, version));

  const idx = LOCATIONS.findIndex((l) => l.id === loc.id);
  const prev = LOCATIONS[idx - 1];
  const next = LOCATIONS[idx + 1];

  return (
    <article>
      <Link
        to="/"
        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-forest"
      >
        <ArrowLeft className="size-4" />
        Percorso
      </Link>

      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">
        Parte {loc.part} · {KIND_LABEL[loc.kind]}
      </p>
      <h1 className="mt-1 font-display text-[2rem] font-medium leading-tight tracking-tight">
        {loc.name}
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{loc.blurb}</p>

      <div className="mt-5 overflow-hidden rounded-xl bg-raised shadow-card">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-muted">Avanzamento</span>
          <span className="text-sm font-medium tabular-nums text-forest">
            {done}/{total} · {pct}%
          </span>
        </div>
        <div className="h-1 bg-line">
          <div className="h-full bg-forest transition-[width] duration-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {loc.gym ? <GymCard loc={loc} version={version} /> : null}

      {steps.length > 0 ? (
        <>
          <SectionTitle count={steps.length}>Guida</SectionTitle>
          <ol className="grid gap-2">
            {loc.steps.map((step, i) => {
              if (!isVisible(step.version, version)) return null;
              const key = checkKey(loc.id, "step", i);
              return (
                <li key={key}>
                  <CheckRow on={Boolean(checks[key])} onToggle={() => toggle(key)}>
                    <p className="text-[15px] leading-relaxed text-ink">{step.text}</p>
                  </CheckRow>
                </li>
              );
            })}
          </ol>
        </>
      ) : null}

      {items.length > 0 ? (
        <>
          <SectionTitle count={items.length}>Oggetti</SectionTitle>
          <ul className="grid gap-2">
            {loc.items.map((item, i) => {
              if (!isVisible(item.version, version)) return null;
              const key = checkKey(loc.id, "item", i);
              return (
                <li key={key}>
                  <CheckRow on={Boolean(checks[key])} onToggle={() => toggle(key)}>
                    <p className="text-[15px] font-medium text-ink">{item.name}</p>
                    <p className="text-sm text-muted">{item.where}</p>
                  </CheckRow>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      {encounters.length > 0 ? (
        <>
          <SectionTitle count={encounters.length}>Pokémon</SectionTitle>
          <ul className="grid gap-2">
            {loc.encounters.map((enc, i) => {
              if (!isVisible(enc.version, version)) return null;
              const key = checkKey(loc.id, "enc", i);
              return (
                <li key={key}>
                  <CheckRow on={Boolean(checks[key])} onToggle={() => toggle(key)}>
                    <span className="flex items-center gap-3">
                      <PokeSprite name={enc.name} />
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="text-[15px] font-medium">{enc.name}</span>
                          {enc.special ? (
                            <span className="inline-flex items-center gap-0.5 rounded-full bg-forest-soft px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-forest">
                              <Sparkles className="size-2.5" />
                              Raro
                            </span>
                          ) : null}
                          {enc.gift ? (
                            <span className="rounded-full bg-line px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
                              Regalo
                            </span>
                          ) : null}
                        </span>
                        <span className="block text-sm text-muted">
                          {enc.place} · Lv. {enc.levels}
                        </span>
                      </span>
                    </span>
                  </CheckRow>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      {trainers.length > 0 ? (
        <>
          <SectionTitle count={trainers.length}>Lotte</SectionTitle>
          <ul className="grid gap-2">
            {loc.trainers.map((tr, i) => {
              if (!isVisible(tr.version, version)) return null;
              const key = checkKey(loc.id, "tr", i);
              const title = [tr.klass, tr.name].filter(Boolean).join(" · ");
              return (
                <li key={key}>
                  <CheckRow
                    on={Boolean(checks[key])}
                    onToggle={() => toggle(key)}
                    accent={Boolean(tr.boss)}
                  >
                    <p className="text-[15px] font-medium text-ink">{title}</p>
                    {tr.reward !== "—" ? (
                      <p className="text-sm text-muted">{tr.reward}</p>
                    ) : null}
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {tr.team.map((mon, mi) => (
                        <li
                          key={`${mon.name}-${mi}`}
                          className="flex items-center gap-1 rounded-full bg-line/80 py-0.5 pl-0.5 pr-2"
                        >
                          <PokeSprite name={mon.name} size={28} />
                          <span className="text-xs font-medium">
                            {mon.name}{" "}
                            <span className="tabular-nums text-muted">Lv.{mon.level}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CheckRow>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <nav className="mt-10 grid grid-cols-2 gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        {prev ? (
          <Link
            to="/luogo/$id"
            params={{ id: prev.id }}
            className="rounded-lg bg-raised p-3 shadow-card"
          >
            <p className="text-[11px] uppercase tracking-wider text-subtle">Indietro</p>
            <p className="mt-0.5 font-display text-base font-medium leading-snug">{prev.name}</p>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/luogo/$id"
            params={{ id: next.id }}
            className="rounded-lg bg-forest p-3 text-forest-fg"
          >
            <p className="flex items-center justify-end gap-1 text-[11px] uppercase tracking-wider opacity-80">
              Avanti <ChevronRight className="size-3" />
            </p>
            <p className="mt-0.5 text-right font-display text-base font-medium leading-snug">
              {next.name}
            </p>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

function GymCard({ loc, version }: { loc: Location; version: Version }) {
  const gym = loc.gym;
  if (!gym) return null;
  const leader = loc.trainers.find((t) => t.boss === "gym" && isVisible(t.version, version));
  return (
    <section className="mt-6 rounded-xl bg-ink px-4 py-4 text-bg shadow-card">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-bg/55">
        Capopalestra · {gym.type}
      </p>
      <h2 className="mt-1 font-display text-2xl font-medium">{gym.leader}</h2>
      <p className="mt-3 text-sm leading-relaxed text-bg/80">{gym.tip}</p>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-[11px] uppercase tracking-wider text-bg/50">Medaglia</dt>
          <dd className="mt-0.5 font-medium">{gym.badge}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wider text-bg/50">Premio</dt>
          <dd className="mt-0.5 font-medium">{gym.tm}</dd>
        </div>
      </dl>
      {leader ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {leader.team.map((mon, i) => (
            <li
              key={`${mon.name}-${i}`}
              className="flex items-center gap-1 rounded-full bg-bg/10 py-0.5 pl-0.5 pr-2"
            >
              <PokeSprite name={mon.name} size={28} />
              <span className="text-xs">
                {mon.name} <span className="tabular-nums opacity-70">Lv.{mon.level}</span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

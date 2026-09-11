import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import type { Version } from "@/data/types";

export function Onboarding() {
  const setVersion = useProgress((s) => s.setVersion);

  function pick(v: Version) {
    setVersion(v);
  }

  return (
    <div className="flex min-h-[70dvh] flex-col justify-end px-1 pb-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
        Diario da campo
      </p>
      <h1 className="mt-2 font-display text-[2.35rem] font-medium leading-[1.05] tracking-tight text-ink">
        La guida di Kanto, in tasca.
      </h1>
      <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted">
        Walkthrough di Pokémon Let’s Go, Pikachu! e Let’s Go, Eevee! — oggetti,
        incontri, palestre e lotte, senza pubblicità. Segna i passi mentre giochi.
      </p>

      <div className="mt-10 grid gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
          Quale versione stai giocando?
        </p>
        <Button size="lg" className="h-14 justify-between px-5" onClick={() => pick("lgp")}>
          <span>Let’s Go, Pikachu!</span>
          <span className="font-display text-lg">Pikachu</span>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-14 justify-between px-5"
          onClick={() => pick("lge")}
        >
          <span>Let’s Go, Eevee!</span>
          <span className="font-display text-lg text-forest">Eevee</span>
        </Button>
      </div>
    </div>
  );
}

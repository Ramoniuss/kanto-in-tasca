import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckRow({
  on,
  onToggle,
  children,
  accent,
}: {
  on: boolean;
  onToggle: () => void;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full min-h-12 items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150",
        on ? "bg-forest-soft/70" : accent ? "bg-raised shadow-card" : "bg-raised/80",
      )}
    >
      <span
        className={cn(
          "mt-0.5 grid size-6 shrink-0 place-items-center rounded-xs border transition-colors",
          on ? "border-forest bg-forest text-forest-fg" : "border-line-strong bg-raised",
        )}
      >
        {on ? <Check className="size-3.5" strokeWidth={2.5} /> : null}
      </span>
      <span className={cn("min-w-0 flex-1", on && "opacity-55")}>{children}</span>
    </button>
  );
}

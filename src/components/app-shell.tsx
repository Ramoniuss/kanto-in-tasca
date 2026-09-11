import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Compass, Medal, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Percorso", icon: Compass, match: (p: string) => p === "/" },
  {
    to: "/cerca",
    label: "Cerca",
    icon: Search,
    match: (p: string) => p.startsWith("/cerca"),
  },
  {
    to: "/medaglie",
    label: "Medaglie",
    icon: Medal,
    match: (p: string) => p.startsWith("/medaglie"),
  },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onLocation = pathname.startsWith("/luogo/");

  return (
    <div className="min-h-dvh bg-field">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-lg flex-col bg-bg shadow-sheet">
        <header className="sticky top-0 z-20 border-b border-line bg-bg/90 px-5 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-md">
          <Link to="/" className="flex items-baseline gap-2">
            <BookOpen className="size-4 text-forest" strokeWidth={1.75} />
            <span className="font-display text-xl font-medium tracking-tight text-ink">
              Kanto in tasca
            </span>
          </Link>
          <p className="mt-0.5 pl-6 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Let’s Go · diario da campo
          </p>
        </header>

        <main className={cn("flex-1 px-4 pt-4", onLocation ? "pb-10" : "pb-28")}>{children}</main>

        {!onLocation ? (
          <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-lg -translate-x-1/2 border-t border-line bg-bg/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md">
            <ul className="grid grid-cols-3">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const active = tab.match(pathname);
                return (
                  <li key={tab.to}>
                    <Link
                      to={tab.to}
                      className={cn(
                        "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium",
                        active ? "text-forest" : "text-muted",
                      )}
                    >
                      <Icon className="size-5" strokeWidth={active ? 2.2 : 1.7} />
                      {tab.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

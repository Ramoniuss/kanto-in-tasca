import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Version } from "@/data/types";
import { LOCATIONS, isVisible, locationProgressTotal } from "@/data/guide";

type ProgressState = {
  version: Version | null;
  checks: Record<string, boolean>;
  setVersion: (v: Version) => void;
  toggle: (key: string) => void;
  isOn: (key: string) => boolean;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      version: null,
      checks: {},
      setVersion: (version) => set({ version }),
      toggle: (key) =>
        set((s) => ({
          checks: { ...s.checks, [key]: !s.checks[key] },
        })),
      isOn: (key) => Boolean(get().checks[key]),
      reset: () => set({ checks: {} }),
    }),
    { name: "kanto-in-tasca" },
  ),
);

export function checkKey(locId: string, kind: string, index: number) {
  return `${locId}:${kind}:${index}`;
}

export function locDoneCount(locId: string, version: Version, checks: Record<string, boolean>) {
  const loc = LOCATIONS.find((l) => l.id === locId);
  if (!loc) return { done: 0, total: 0 };
  const groups: Array<[string, { version?: Version }[]]> = [
    ["step", loc.steps],
    ["item", loc.items],
    ["enc", loc.encounters],
    ["tr", loc.trainers],
  ];
  let done = 0;
  let total = 0;
  for (const [kind, list] of groups) {
    list.forEach((row, i) => {
      if (!isVisible(row.version, version)) return;
      total += 1;
      if (checks[checkKey(locId, kind, i)]) done += 1;
    });
  }
  return { done, total: total || locationProgressTotal(loc, version) };
}

export function overallProgress(version: Version, checks: Record<string, boolean>) {
  let done = 0;
  let total = 0;
  for (const loc of LOCATIONS) {
    const p = locDoneCount(loc.id, version, checks);
    done += p.done;
    total += p.total;
  }
  return { done, total, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
}

export function gymsBeaten(checks: Record<string, boolean>, version: Version) {
  return LOCATIONS.filter((l) => l.gym).filter((l) => {
    const idx = l.trainers.findIndex((t) => t.boss === "gym" && isVisible(t.version, version));
    if (idx < 0) return false;
    return Boolean(checks[checkKey(l.id, "tr", idx)]);
  }).length;
}

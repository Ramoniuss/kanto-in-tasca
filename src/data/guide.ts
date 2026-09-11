import { LOCATIONS_1 } from "./locations-1";
import { LOCATIONS_2 } from "./locations-2";
import { LOCATIONS_3 } from "./locations-3";
import type { Location, Version } from "./types";

export const LOCATIONS: Location[] = [...LOCATIONS_1, ...LOCATIONS_2, ...LOCATIONS_3];

export const LOCATION_BY_ID: Record<string, Location> = Object.fromEntries(
  LOCATIONS.map((l) => [l.id, l]),
);

export function isVisible(version: Version | undefined, selected: Version) {
  return !version || version === "both" || version === selected;
}

export function locationProgressTotal(loc: Location, version: Version) {
  const steps = loc.steps.filter((s) => isVisible(s.version, version)).length;
  const items = loc.items.filter((s) => isVisible(s.version, version)).length;
  const encounters = loc.encounters.filter((s) => isVisible(s.version, version)).length;
  const trainers = loc.trainers.filter((s) => isVisible(s.version, version)).length;
  return steps + items + encounters + trainers;
}

export const KIND_LABEL: Record<Location["kind"], string> = {
  town: "Città",
  route: "Percorso",
  cave: "Grotta",
  gym: "Palestra",
  building: "Edificio",
  sea: "Mare",
};

export { PARTS } from "./parts";

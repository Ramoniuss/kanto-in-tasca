export type Version = "lgp" | "lge" | "both";

export type PlaceKind = "town" | "route" | "cave" | "gym" | "building" | "sea";

export type Item = {
  name: string;
  where: string;
  version?: Version;
};

export type Encounter = {
  name: string;
  place: string;
  levels: string;
  version?: Version;
  special?: boolean;
  gift?: boolean;
};

export type TrainerMon = {
  name: string;
  level: number;
};

export type Trainer = {
  klass: string;
  name: string;
  reward: string;
  team: TrainerMon[];
  version?: Version;
  boss?: "gym" | "rival" | "rocket" | "elite" | "champion" | "legend";
};

export type Step = {
  text: string;
  version?: Version;
};

export type GymInfo = {
  leader: string;
  type: string;
  badge: string;
  tm: string;
  tip: string;
};

export type Location = {
  id: string;
  name: string;
  kind: PlaceKind;
  part: number;
  blurb: string;
  steps: Step[];
  items: Item[];
  encounters: Encounter[];
  trainers: Trainer[];
  gym?: GymInfo;
};

export type Part = {
  n: number;
  title: string;
  span: string;
};

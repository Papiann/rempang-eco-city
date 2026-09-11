export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  source: string;
}

export const stats: Stat[] = [
  {
    value: 8142,
    suffix: " Ha",
    label: "Development Area",
    source: "BP Batam Strategic Plan 2025–2029",
  },
  {
    value: 381,
    prefix: "Rp",
    suffix: " T",
    label: "Long-term Investment Potential",
    source: "BP Batam Strategic Plan 2025–2029",
  },
  {
    value: 306,
    suffix: "K",
    label: "Potential Employment",
    source: "BP Batam Strategic Plan 2025–2029",
  },
  {
    value: 5,
    suffix: "",
    label: "Integrated Development Sectors",
    source: "BP Batam Strategic Plan 2025–2029",
  },
];

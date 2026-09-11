export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  source?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2004",
    title: "Initial Cooperation",
    description:
      "Early cooperation agreements laid the groundwork for coordinated development on Rempang Island.",
  },
  {
    year: "2023",
    title: "Rempang Eco City Launched",
    description:
      "Rempang Eco City was officially introduced as a national strategic project connecting industry, commerce, and sustainable living.",
    source: "BP Batam Strategic Plan 2025–2029",
  },
  {
    year: "2024",
    title: "Initial Development & Transition Programs",
    description:
      "Early-stage development activity began alongside community transition and relocation support programs.",
  },
  {
    year: "2025–2029",
    title: "Strategic Development Period",
    description:
      "A phased period of infrastructure buildout, investment onboarding, and sector-by-sector development.",
    source: "BP Batam Strategic Plan 2025–2029",
  },
  {
    year: "Future",
    title: "Integrated Eco City",
    description:
      "A fully connected ecosystem of industry, commerce, residential life, tourism, and green energy operating in balance.",
  },
];

export interface NewsArticle {
  id: string;
  category: "Development" | "Community" | "Investment" | "Sustainability" | "Events";
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "phase-one-groundworks",
    category: "Development",
    date: "August 2026",
    title: "Phase One groundworks begin along the northern coastline",
    excerpt:
      "Early infrastructure work has started on access roads and site preparation, marking the first visible construction milestone for the eco-city.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "community-transition-program",
    category: "Community",
    date: "July 2026",
    title: "Community transition program reaches new milestone",
    excerpt:
      "Housing and livelihood support continues for relocated families as part of the ongoing community transition process.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "green-energy-partners",
    category: "Sustainability",
    date: "June 2026",
    title: "First renewable energy partners announced",
    excerpt:
      "New partnerships aim to bring solar and low-carbon power infrastructure online alongside the eco-city's early development phases.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
  },
];

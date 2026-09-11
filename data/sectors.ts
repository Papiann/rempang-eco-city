export type SectorId = "industry" | "commerce" | "residential" | "tourism" | "green-energy";

export interface Sector {
  id: SectorId;
  number: string;
  title: string;
  label: string;
  description: string;
  longDescription: string;
  image: string;
}

export const sectors: Sector[] = [
  {
    id: "industry",
    number: "01",
    title: "Industry",
    label: "INDUSTRY",
    description: "Building an industrial ecosystem for future-oriented industries.",
    longDescription:
      "A dedicated industrial zone designed around clean manufacturing, downstream processing, and export-oriented production — built to attract long-term strategic investment.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "commerce",
    number: "02",
    title: "Commerce",
    label: "COMMERCE",
    description: "A new center for business and economic activity.",
    longDescription:
      "Mixed-use commercial districts connecting logistics, trade, and services — positioned to serve both the local economy and regional supply chains.",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "residential",
    number: "03",
    title: "Residential",
    label: "RESIDENTIAL",
    description: "Integrated communities designed for long-term livability.",
    longDescription:
      "Neighborhoods planned around walkability, shared green space, and access to schools and healthcare — built with and for the people who call Rempang home.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tourism",
    number: "04",
    title: "Tourism",
    label: "TOURISM",
    description: "Unlocking the natural and cultural potential of Rempang.",
    longDescription:
      "Coastal and cultural tourism developed around Rempang's landscape and heritage, designed to bring visitors while protecting the island's ecology.",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "green-energy",
    number: "05",
    title: "Green Energy",
    label: "GREEN ENERGY",
    description: "Supporting a cleaner and more resilient future.",
    longDescription:
      "Renewable energy infrastructure built to power the eco-city's growth while reducing its long-term environmental footprint.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop",
  },
];

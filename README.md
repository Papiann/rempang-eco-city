# Rempang Eco City

A premium, editorial marketing site for Rempang Eco City, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Reusable UI components (Navbar, HeroSection, MasterplanMap, DevelopmentPillars, Timeline, SustainabilitySection, CommunitySection, InvestmentSection, NewsSection, ExploreSection, CTASection, Footer, etc.)
- `data/` — Content arrays (`sectors.ts`, `timeline.ts`, `stats.ts`, `news.ts`)

## Notes

- All statistics carry a "Source: BP Batam Strategic Plan 2025–2029" label per the project's content rules — no figures were fabricated beyond what was supplied in the brief.
- The masterplan map is placeholder SVG geometry explicitly labeled "Conceptual visualization" — it is **not** an official GIS masterplan.
- Photography is sourced from Unsplash as placeholders; swap in official photography before production launch.
- Animations respect `prefers-reduced-motion`.

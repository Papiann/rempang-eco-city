"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectors, type SectorId } from "@/data/sectors";
import SectionHeader from "./SectionHeader";

type FilterId = SectorId | "all";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "industry", label: "Industry" },
  { id: "commerce", label: "Commerce" },
  { id: "residential", label: "Residential" },
  { id: "tourism", label: "Tourism" },
  { id: "green-energy", label: "Green Energy" },
];

const zoneColors: Record<SectorId, string> = {
  industry: "#2F7F7B",
  commerce: "#12372A",
  residential: "#B08968",
  tourism: "#E7D8C0",
  "green-energy": "#7FA37A",
};

// Conceptual placeholder geometry only — not an official GIS masterplan.
const zonePaths: Record<SectorId, string> = {
  industry: "M 90 240 L 210 200 L 260 260 L 220 340 L 120 330 Z",
  commerce: "M 260 260 L 340 210 L 400 250 L 380 320 L 300 340 Z",
  residential: "M 220 340 L 300 340 L 320 420 L 250 470 L 180 420 Z",
  tourism: "M 400 250 L 470 220 L 520 280 L 480 350 L 400 340 Z",
  "green-energy": "M 90 240 L 60 160 L 130 120 L 200 150 L 210 200 Z",
};

export default function MasterplanMap() {
  const [active, setActive] = useState<FilterId>("all");

  const activeSector = sectors.find((s) => s.id === active);

  return (
    <section id="development" className="bg-offwhite py-24 md:py-36">
      <div className="container-content">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeader headline="One ecosystem. Five interconnected possibilities." />
          <p className="text-charcoal/50 text-xs max-w-[220px] shrink-0">
            Conceptual visualization — for illustrative purposes only, not an
            official GIS masterplan.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter development sectors"
          className="mt-12 flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 text-sm font-medium border transition-colors duration-300 focus-ring ${
                active === f.id
                  ? "bg-forest text-offwhite border-forest"
                  : "bg-transparent text-charcoal/70 border-charcoal/20 hover:border-forest/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/11] bg-forest/5">
              <svg
                viewBox="0 0 560 520"
                className="h-full w-full"
                role="img"
                aria-label="Conceptual visualization of Rempang Eco City development zones"
              >
                <rect x="0" y="0" width="560" height="520" fill="#EFEAE0" />
                {sectors.map((sector) => {
                  const isDimmed = active !== "all" && active !== sector.id;
                  return (
                    <motion.path
                      key={sector.id}
                      d={zonePaths[sector.id]}
                      fill={zoneColors[sector.id]}
                      initial={false}
                      animate={{
                        opacity: isDimmed ? 0.18 : 0.92,
                        scale: active === sector.id ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "center", cursor: "pointer" }}
                      onClick={() => setActive(sector.id)}
                      stroke="#F7F6F1"
                      strokeWidth={2}
                    />
                  );
                })}
              </svg>
              <span className="absolute bottom-3 left-3 text-[11px] text-charcoal/45 bg-offwhite/70 px-2 py-1">
                Conceptual visualization
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {active === "all" ? (
                <motion.div
                  key="all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {sectors.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActive(s.id)}
                      className="w-full text-left flex items-start gap-4 py-4 border-b border-charcoal/10 focus-ring"
                    >
                      <span
                        className="mt-1.5 h-2.5 w-2.5 shrink-0"
                        style={{ backgroundColor: zoneColors[s.id] }}
                      />
                      <span>
                        <span className="block font-heading font-semibold text-forest">
                          {s.label}
                        </span>
                        <span className="block text-charcoal/70 text-sm mt-1">
                          {s.description}
                        </span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              ) : (
                activeSector && (
                  <motion.div
                    key={activeSector.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span
                      className="inline-block h-2.5 w-2.5 mb-4"
                      style={{ backgroundColor: zoneColors[activeSector.id] }}
                    />
                    <h3 className="font-heading font-semibold text-2xl md:text-3xl text-forest">
                      {activeSector.label}
                    </h3>
                    <p className="mt-4 text-charcoal/75 leading-relaxed">
                      {activeSector.longDescription}
                    </p>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timeline";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-offwhite py-24 md:py-36 overflow-hidden">
      <div className="container-content">
        <SectionHeader headline="From vision to reality." />
      </div>

      <div className="container-content mt-16">
        <div className="hidden md:flex items-start">
          {timelineEvents.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActive(i)}
              className="relative flex-1 text-left pt-6 focus-ring group"
            >
              <div
                className={`h-0.5 w-full transition-colors duration-400 ${
                  active === i ? "bg-teal" : "bg-charcoal/15 group-hover:bg-charcoal/30"
                }`}
              />
              <span
                className={`absolute -top-[3px] h-2 w-2 rounded-full transition-colors duration-400 ${
                  active === i ? "bg-teal" : "bg-charcoal/25"
                }`}
                style={{ left: 0 }}
              />
              <span
                className={`block mt-6 font-heading font-semibold text-lg transition-colors duration-300 ${
                  active === i ? "text-forest" : "text-charcoal/40"
                }`}
              >
                {event.year}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block mt-10 max-w-xl"
        >
          <h3 className="font-heading font-semibold text-2xl text-forest">
            {timelineEvents[active].title}
          </h3>
          <p className="mt-3 text-charcoal/70 leading-relaxed">
            {timelineEvents[active].description}
          </p>
          {timelineEvents[active].source && (
            <p className="mt-3 text-charcoal/40 text-xs">
              Source: {timelineEvents[active].source}
            </p>
          )}
        </motion.div>

        <div className="md:hidden space-y-0">
          {timelineEvents.map((event) => (
            <div key={event.year} className="border-l-2 border-teal pl-6 py-6">
              <span className="font-heading font-semibold text-lg text-forest">
                {event.year}
              </span>
              <h3 className="font-heading font-semibold text-xl text-forest mt-2">
                {event.title}
              </h3>
              <p className="mt-2 text-charcoal/70 text-sm leading-relaxed">
                {event.description}
              </p>
              {event.source && (
                <p className="mt-2 text-charcoal/40 text-xs">
                  Source: {event.source}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

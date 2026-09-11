"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sectors } from "@/data/sectors";

export default function DevelopmentPillars() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="bg-charcoal">
      <div className="hidden lg:flex h-[640px]">
        {sectors.map((sector) => {
          const isHovered = hovered === sector.id;
          return (
            <motion.a
              href="#masterplan"
              key={sector.id}
              onMouseEnter={() => setHovered(sector.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{ flex: isHovered ? 2.2 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden border-r border-offwhite/10 last:border-r-0 focus-ring group"
            >
              <img
                src={sector.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/45 transition-colors duration-500" />

              <div className="relative h-full flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="text-offwhite/60 text-sm font-medium">
                    {sector.number}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-offwhite/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-offwhite text-xl xl:text-2xl">
                    {sector.title}
                  </h3>
                  {isHovered && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="mt-3 text-offwhite/80 text-sm max-w-xs leading-relaxed"
                    >
                      {sector.description}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div className="lg:hidden flex flex-col">
        {sectors.map((sector) => (
          <a
            href="#masterplan"
            key={sector.id}
            className="relative h-[420px] overflow-hidden border-b border-offwhite/10 focus-ring"
          >
            <img
              src={sector.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/55" />
            <div className="relative h-full flex flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <span className="text-offwhite/60 text-sm font-medium">
                  {sector.number}
                </span>
                <ArrowUpRight size={20} className="text-offwhite/70" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-offwhite text-2xl">
                  {sector.title}
                </h3>
                <p className="mt-3 text-offwhite/80 text-sm max-w-xs leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

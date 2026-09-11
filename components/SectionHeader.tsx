"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  headline: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  headline,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2
        className={`font-heading font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.1] ${
          light ? "text-offwhite" : "text-forest"
        }`}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-offwhite/80" : "text-charcoal/75"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

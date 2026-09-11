"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import type { Stat } from "@/data/stats";

export default function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-offwhite/20 pt-6"
    >
      <span
        ref={ref}
        className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl text-offwhite tabular-nums"
      >
        {stat.prefix}
        {display.toLocaleString("en-US")}
        {stat.suffix}
      </span>
      <p className="mt-3 text-offwhite/80 text-sm md:text-base">{stat.label}</p>
      <p className="mt-1.5 text-offwhite/45 text-xs">Source: {stat.source}</p>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface DevelopmentCardProps {
  title: string;
  description: string;
  index?: number;
  icon?: LucideIcon;
}

export default function DevelopmentCard({
  title,
  description,
  index = 0,
  icon: Icon,
}: DevelopmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-charcoal/15 pt-6 pb-2"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {Icon && <Icon size={22} className="text-teal mb-4" strokeWidth={1.5} />}
          <h3 className="font-heading font-semibold text-lg text-forest">
            {title}
          </h3>
          <p className="mt-2 text-charcoal/70 text-sm leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
        <ArrowUpRight
          size={18}
          className="text-charcoal/40 shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </motion.div>
  );
}

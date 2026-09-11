"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const blocks = [
  {
    title: "Environment",
    items: ["Green Energy", "Ecological Responsibility"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Community",
    items: ["Community Development", "Local Economic Participation"],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Economy",
    items: ["Employment", "Investment", "Long-term Growth"],
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-sand/40 py-24 md:py-36">
      <div className="container-content">
        <SectionHeader headline="Growth should move forward. Without leaving nature behind." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/10">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-sand/40 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={block.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading font-semibold text-xl text-forest">
                  {block.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="text-charcoal/70 text-sm border-t border-charcoal/10 pt-2 first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

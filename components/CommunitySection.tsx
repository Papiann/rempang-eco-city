"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Local Community",
    description:
      "Families who have lived on Rempang for generations remain at the center of the transition process.",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-7",
  },
  {
    title: "Culture & Heritage",
    description: "Local traditions and coastal Malay culture shape the island's identity.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    title: "Education & Livelihood",
    description: "New schools and training programs support the next generation.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    title: "Housing & Transition",
    description:
      "Relocation and housing support programs accompany affected communities through the transition.",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1400&auto=format&fit=crop",
    span: "md:col-span-7",
  },
];

export default function CommunitySection() {
  return (
    <section className="bg-offwhite py-24 md:py-36">
      <div className="container-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-forest max-w-xl"
        >
          A city is built by people.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden aspect-[4/3] group ${card.span} rounded-xl`}
            >
              <img
                src={card.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-heading font-semibold text-xl text-offwhite">
                  {card.title}
                </h3>
                <p className="mt-2 text-offwhite/85 text-sm max-w-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

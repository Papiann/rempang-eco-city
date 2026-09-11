"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Location",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nature",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Culture",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Community",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Investment",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExploreSection() {
  return (
    <section id="explore" className="bg-offwhite py-24 md:py-36">
      <div className="container-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-forest max-w-xl"
        >
          Discover the island.
        </motion.h2>

        <div className="mt-14 flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 snap-x snap-mandatory">
          {items.map((item, i) => (
            <motion.a
              href="#"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative shrink-0 w-[70vw] sm:w-[42vw] md:w-auto aspect-[3/4] overflow-hidden snap-start focus-ring rounded-2xl"
            >
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-heading font-semibold text-offwhite text-lg">
                {item.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

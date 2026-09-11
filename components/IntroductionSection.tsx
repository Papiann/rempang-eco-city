"use client";

import { motion } from "framer-motion";

export default function IntroductionSection() {
  return (
    <section id="about" className="bg-offwhite py-24 md:py-36">
      <div className="container-content grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop"
              alt="Dense tropical forest canopy on Rempang Island"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
          <SectionText />
        </div>
      </div>
    </section>
  );
}

function SectionText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-heading font-semibold text-forest text-3xl md:text-4xl lg:text-5xl leading-[1.12] max-w-lg">
        More than a development. It&apos;s a place for the future.
      </h2>
      <p className="mt-6 text-charcoal/75 text-base md:text-lg leading-relaxed max-w-md">
        Rempang Eco City is an integrated development connecting industry,
        commerce, residential areas, tourism, and green energy on Rempang
        Island. It is designed as a single ecosystem — where economic
        opportunity, community life, and the natural landscape are planned
        together rather than in isolation.
      </p>
      <p className="mt-4 text-charcoal/75 text-base md:text-lg leading-relaxed max-w-md">
        Over the coming decade, the eco-city is intended to become one of
        Indonesia&apos;s strategic centers for sustainable industry and
        livable urban growth.
      </p>
    </motion.div>
  );
}

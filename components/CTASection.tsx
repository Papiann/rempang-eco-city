"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2400&auto=format&fit=crop"
        alt="Coastal sunset over tropical water near Rempang Island"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />

      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28">
        <div className="container-content">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-semibold text-offwhite text-3xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
          >
            The next chapter starts here.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-lg text-offwhite/85 text-base md:text-lg"
          >
            Discover the opportunities, people, and places shaping the future
            of Rempang.
          </motion.p>
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 inline-flex items-center justify-center px-7 py-3.5 bg-offwhite text-forest text-sm font-medium hover:bg-sand transition-colors duration-300 focus-ring w-fit rounded-lg"
          >
            Explore Rempang
          </motion.a>
        </div>
      </div>
    </section>
  );
}

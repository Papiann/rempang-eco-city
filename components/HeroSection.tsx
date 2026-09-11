"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.55]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-forest"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%]">
        <img
          src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2400&auto=format&fit=crop"
          alt="Aerial view of tropical coastline and forested island, representing Rempang Island"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-forest"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/10 to-forest/40" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-28"
      >
        <div className="container-content">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-offwhite/70 text-sm md:text-base font-medium mb-4 tracking-wide"
          >
            Rempang Island, Riau Islands — Indonesia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-semibold text-offwhite text-hero-mobile md:text-hero-tablet lg:text-hero-desktop max-w-5xl"
          >
            A new gateway for sustainable growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-offwhite/85 text-base md:text-lg leading-relaxed"
          >
            Building an integrated ecosystem where industry, community, nature,
            and innovation grow together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#masterplan"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-offwhite text-forest text-sm font-medium hover:bg-sand transition-colors duration-300 focus-ring rounded-lg"
            >
              Explore the Masterplan
            </a>
            <a
              href="#explore"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-offwhite/50 text-offwhite text-sm font-medium hover:bg-offwhite/10 transition-colors duration-300 focus-ring"
            >
              Discover Rempang
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="container-content mt-16 flex items-end justify-between"
        >
          <div className="border-l border-offwhite/40 pl-5">
            <span className="block font-heading text-3xl md:text-4xl font-semibold text-offwhite">
              8,142 Ha
            </span>
            <span className="block text-offwhite/70 text-sm mt-1">
              Development Area
            </span>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-2 text-offwhite/70">
            <span className="text-xs tracking-wide">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

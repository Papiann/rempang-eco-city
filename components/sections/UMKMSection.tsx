"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { umkms } from "@/data/umkms";

export default function UMKMSection() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // autoplay
  useEffect(() => {
    // autoplay removed — autoplay moved to Pariwisata section per request
    return;
  }, []);

  // scroll into view when active changes
  useEffect(() => {
    const el = containerRef.current?.querySelectorAll(".umkm-card")[active] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center" });

    // bump effect (immersive): briefly translate the section down and back
    if (sectionRef.current) {
      const sec = sectionRef.current;
      sec.classList.add("transition-transform", "duration-200", "translate-y-1");
      const t = setTimeout(() => {
        sec.classList.remove("translate-y-1");
      }, 220);
      return () => clearTimeout(t);
    }
  }, [active]);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pr-4"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-blue mb-3">
              Usaha Mikro, Kecil, dan Menengah
            </h2>

            <p className="text-lg text-text-secondary max-w-xl">
              UMKM di Rempang Eco City merupakan tulang punggung ekonomi lokal — dari kerajinan,
              pengolahan pangan, hingga jasa pariwisata. Program pemberdayaan difokuskan pada peningkatan
              kualitas produk, akses pasar, dan pelatihan manajerial untuk mendorong daya saing usaha.
            </p>
          </motion.div>

          {/* Right: Cards carousel + header (CTA one-line) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div />
              <Link href="/umkm" className="text-primary-blue font-semibold text-sm md:text-base whitespace-nowrap">
                Lihat Semua UMKM →
              </Link>
            </div>

            <div className="relative">
              <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-4 scroll-smooth">
                {umkms.map((card, i) => (
                  <article
                    key={card.id}
                    onMouseEnter={() => setActive(i)}
                    className={`umkm-card min-w-[220px] md:min-w-[260px] bg-bg-light rounded-xl border border-border-color overflow-hidden shadow-sm transition-transform ${
                      i === active ? "scale-105" : ""
                    }`}
                  >
                    <div className="h-44 md:h-56 w-full overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-semibold text-text-primary">{card.title}</h4>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination dots */}
              <div className="flex gap-2 mt-3 justify-center md:justify-start">
                {umkms.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-2 w-8 rounded-full transition-colors ${i === active ? "bg-primary-blue" : "bg-gray-300"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

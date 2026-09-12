"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { umkms } from "@/data/umkms";

export default function UMKMSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // autoplay removed — user controls the carousel

  // No programmatic active changes — users scroll/hover to browse cards.
  useEffect(() => {
    // keep refs stable; nothing to do here
  }, []);

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
              <div ref={containerRef} className="umkm-carousel flex gap-4 overflow-x-auto pb-4">
                {umkms.map((card) => (
                  <article
                    key={card.id}
                    className={`umkm-card w-[220px] md:w-[260px] bg-bg-light rounded-xl border border-border-color overflow-hidden shadow-sm`}
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

              {/* Pagination removed — users control carousel by scroll and hover */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

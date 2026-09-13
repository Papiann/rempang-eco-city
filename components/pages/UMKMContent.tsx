"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, Search } from "lucide-react";
import { umkmCatalog, umkmCategories } from "@/data/umkmCatalog";

export default function UMKMContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredUMKM = umkmCatalog.filter((umkm) => {
    const searchMatch =
      umkm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      umkm.cardDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch =
      activeCategory === "Semua" || umkm.category === activeCategory;
    return searchMatch && categoryMatch;
  });

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input
              type="text"
              placeholder="Cari UMKM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
            />
          </div>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          {umkmCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "border-primary-blue bg-primary-blue text-white shadow-sm"
                  : "border-slate-300 bg-white text-text-primary hover:border-primary-blue hover:text-primary-blue"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredUMKM.map((umkm, i) => (
            <motion.article
              key={umkm.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[30px] border border-slate-300 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-[250px] overflow-hidden bg-slate-200">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-4 pb-4 pt-4">
                <span className="inline-flex rounded-full bg-[#f2da8d] px-3 py-1 text-xs font-semibold text-[#3d4b1a]">
                  {umkm.category}
                </span>

                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-text-primary">
                  {umkm.name}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-text-secondary md:min-h-[84px]">
                  {umkm.cardDescription}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/umkm/${umkm.slug}`}
                    className="flex w-full items-center justify-center gap-1 whitespace-nowrap rounded-xl border border-slate-300 bg-white px-3 py-3 text-[12px] font-medium text-slate-700 transition hover:border-primary-blue hover:text-primary-blue"
                  >
                    <Eye size={15} className="stroke-[2.2]" />
                    Lihat Detail UMKM
                    <ArrowRight size={13} className="stroke-[2.2]" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredUMKM.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-text-secondary">Tidak ada UMKM yang sesuai dengan pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";

const umkmList = [
  {
    id: 1,
    name: "Kerajinan Tangan Rempang",
    category: "Kerajinan",
    location: "Jalan Utama, Rempang",
    description: "Produksi kerajinan tangan tradisional dari kayu dan rotan lokal.",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ikan Asap Khas Rempang",
    category: "Kuliner",
    location: "Pasar Rempang",
    description: "Ikan asap berkualitas tinggi menggunakan metode tradisional.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Batik Lokal Rempang",
    category: "Fashion",
    location: "Sentra Batik, Rempang",
    description: "Batik eksklusif dengan motif khas pulau Rempang.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Jasa Wisata Lokal",
    category: "Jasa",
    location: "Pelabuhan Rempang",
    description: "Layanan tur dan pemandu wisata yang berpengalaman.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = ["Semua", "Kuliner", "Kerajinan", "Fashion", "Jasa", "Produk Lokal"];

export default function UMKMContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredUMKM = umkmList.filter((umkm) => {
    const searchMatch =
      umkm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      umkm.description.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch =
      activeCategory === "Semua" || umkm.category === activeCategory;
    return searchMatch && categoryMatch;
  });

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-text-secondary max-w-2xl mb-12"
        >
          Temukan dan dukung produk usaha masyarakat Rempang
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Cari UMKM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 border border-border-color rounded-lg focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary-blue text-white"
                  : "bg-bg-light border border-border-color text-text-primary hover:border-primary-blue"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUMKM.map((umkm, i) => (
            <motion.div
              key={umkm.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border border-border-color hover:shadow-lg hover:border-primary-blue transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-border-color">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary-yellow/20 text-primary-yellow text-xs font-semibold rounded mb-3">
                  {umkm.category}
                </div>

                <h3 className="font-heading font-bold text-xl text-text-primary group-hover:text-primary-blue transition-colors mb-2">
                  {umkm.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                  <MapPin size={16} className="text-primary-blue flex-shrink-0" />
                  {umkm.location}
                </div>

                <p className="text-text-secondary mb-6 line-clamp-2">
                  {umkm.description}
                </p>

                <Link
                  href="#"
                  className="inline-block text-primary-blue font-medium text-sm hover:text-primary-dark transition-colors"
                >
                  Pelajari Lebih Lanjut →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredUMKM.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">Tidak ada UMKM yang sesuai dengan pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}

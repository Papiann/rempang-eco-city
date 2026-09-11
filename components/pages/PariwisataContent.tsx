"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Pantai Pasir Putih",
    location: "Pulau Rempang Utara",
    category: "Pantai",
    description: "Pantai indah dengan pasir putih dan air jernih, sempurna untuk rekreasi keluarga.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Hutan Mangrove Rempang",
    location: "Pesisir Rempang",
    category: "Alam",
    description: "Ekosistem mangrove yang kaya biodiversitas dan menjadi habitat berbagai satwa liar.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Desa Tradisional",
    location: "Pusat Rempang",
    category: "Budaya",
    description: "Kunjungi kehidupan tradisional masyarakat lokal dan pelajari budaya Rompang.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Warung Kuliner Lokal",
    location: "Pasar Rempang",
    category: "Kuliner",
    description: "Nikmati cita rasa autentik kuliner lokal dan makanan laut segar.",
    image: "https://images.unsplash.com/photo-1504674900950-80fee614bc69?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = ["Semua", "Pantai", "Alam", "Budaya", "Kuliner"];

export default function PariwisataContent() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredDestinations =
    activeCategory === "Semua"
      ? destinations
      : destinations.filter((d) => d.category === activeCategory);

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
          Jelajahi potensi alam, budaya, dan destinasi wisata di Rempang Eco City
        </motion.p>

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
          {filteredDestinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden border border-border-color hover:shadow-lg hover:border-primary-blue transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-border-color">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary-yellow/20 text-primary-yellow text-xs font-semibold rounded mb-3">
                  {dest.category}
                </div>

                <h3 className="font-heading font-bold text-xl text-text-primary group-hover:text-primary-blue transition-colors mb-2">
                  {dest.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                  <MapPin size={16} className="text-primary-blue" />
                  {dest.location}
                </div>

                <p className="text-text-secondary mb-6 line-clamp-2">
                  {dest.description}
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

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">Tidak ada destinasi untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}

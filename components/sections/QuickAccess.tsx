"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Store, MapPin, Briefcase, Newspaper } from "lucide-react";

const quickAccessItems = [
  {
    id: 1,
    title: "Koperasi",
    description: "Informasi koperasi dan pemberdayaan ekonomi masyarakat.",
    href: "/koperasi",
    icon: Store,
    color: "bg-blue-50 text-primary-blue",
  },
  {
    id: 2,
    title: "Pariwisata",
    description: "Temukan potensi wisata dan destinasi di Rempang.",
    href: "/pariwisata",
    icon: MapPin,
    color: "bg-yellow-50 text-primary-yellow",
  },
  {
    id: 3,
    title: "UMKM",
    description: "Kenali produk dan usaha masyarakat Rempang.",
    href: "/umkm",
    icon: Briefcase,
    color: "bg-blue-50 text-primary-blue",
  },
  {
    id: 4,
    title: "Berita",
    description: "Informasi dan kabar terbaru seputar Rempang.",
    href: "/berita",
    icon: Newspaper,
    color: "bg-yellow-50 text-primary-yellow",
  },
];

export default function QuickAccess() {
  return (
    <section className="bg-bg-light py-16 md:py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-blue mb-3">
            Jelajahi Rempang
          </h2>
          <p className="text-lg text-text-secondary">
            Akses cepat ke informasi yang Anda butuhkan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccessItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block h-full p-6 bg-white rounded-xl border border-border-color hover:shadow-md hover:border-primary-blue transition-all group"
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${item.color} mb-4`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 group-hover:text-primary-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="text-primary-blue font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lihat Lebih →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

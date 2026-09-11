"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Dimulainya Pembangunan Infrastruktur Fase Pertama",
    excerpt: "Proyek konstruksi jalan dan persiapan lahan telah dimulai di sepanjang garis pantai utara Rempang.",
    date: "Agustus 2026",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Program Transisi Komunitas Mencapai Milestone Baru",
    excerpt: "Dukungan perumahan dan mata pencaharian berkelanjutan untuk keluarga yang pindah.",
    date: "Juli 2026",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mitra Energi Terbarukan Pertama Diumumkan",
    excerpt: "Kemitraan baru bertujuan menghadirkan infrastruktur tenaga surya dan pembangkit rendah karbon.",
    date: "Juni 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&auto=format&fit=crop",
  },
];

export default function BeritaTerbaru() {
  const featured = newsItems.find((n) => n.featured);
  const others = newsItems.filter((n) => !n.featured);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-blue">
              Berita Terbaru
            </h2>
          </motion.div>

          <motion.a
            href="/berita"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-blue font-medium hover:text-primary-dark transition-colors flex items-center gap-2"
          >
            Lihat Semua Berita →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Link href={`/berita/${featured.id}`} className="group block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-border-color">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-3">
                  <span className="text-sm text-text-secondary">{featured.date}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary group-hover:text-primary-blue transition-colors mb-2">
                  {featured.title}
                </h3>
                <p className="text-text-secondary line-clamp-2">{featured.excerpt}</p>
              </Link>
            </motion.div>
          )}

          {/* Other News */}
          <div className="space-y-6">
            {others.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              >
                <Link href={`/berita/${article.id}`} className="group block">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-border-color">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-xs text-text-secondary">{article.date}</span>
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-text-primary group-hover:text-primary-blue transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

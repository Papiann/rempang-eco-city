"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Dimulainya Pembangunan Infrastruktur Fase Pertama",
    excerpt: "Proyek konstruksi jalan dan persiapan lahan telah dimulai di sepanjang garis pantai utara Rempang.",
    date: "Agustus 2026",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
    content: "Proyek pembangunan infrastruktur fase pertama Rempang Eco City telah resmi dimulai. Proyek konstruksi jalan dan persiapan lahan sedang berlangsung di sepanjang garis pantai utara Rempang dengan target penyelesaian dalam 18 bulan. Tim konstruksi yang terdiri dari lebih dari 500 pekerja telah ditempatkan di lokasi untuk memastikan kelancaran proyek ini. Infrastruktur yang dibangun mencakup jalan raya utama, jaringan air bersih, dan sistem drainase yang canggih.",
  },
  {
    id: 2,
    title: "Program Transisi Komunitas Mencapai Milestone Baru",
    excerpt: "Dukungan perumahan dan mata pencaharian berkelanjutan untuk keluarga yang pindah.",
    date: "Juli 2026",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    content: "Program transisi komunitas Rempang Eco City telah mencapai milestone penting dengan penyelesaian fase pertama relokasi. Lebih dari 1000 keluarga telah dipindahkan ke perumahan baru yang tersedia dengan dukungan penuh dari pemerintah. Program ini juga mencakup pelatihan keterampilan dan bantuan modal usaha untuk memastikan kehidupan ekonomi komunitas tetap stabil. Kepuasan penerima manfaat mencapai 95% berdasarkan survei terbaru.",
  },
  {
    id: 3,
    title: "Mitra Energi Terbarukan Pertama Diumumkan",
    excerpt: "Kemitraan baru bertujuan menghadirkan infrastruktur tenaga surya dan pembangkit rendah karbon.",
    date: "Juni 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    content: "Rempang Eco City telah menandatangani perjanjian kemitraan dengan perusahaan energi terbarukan terkemuka untuk mengembangkan infrastruktur energi terbarukan. Proyek ini akan menghasilkan 500 MW tenaga surya dan 200 MW tenaga angin, menjadikan Rempang Eco City sebagai pusat energi terbarukan terbesar di kawasan. Investasi total mencapai 2 triliun rupiah, dengan target operasional dimulai pada tahun 2028.",
  },
];

export default function BeritaContent() {
  const filteredArticles = articles;

  return (
    <div className="bg-white pt-8 pb-16 md:pt-10 md:pb-24">
      <div className="container-content">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/berita/${article.id}`} className="group block h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-border-color">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mb-3">
                  <span className="text-sm text-text-secondary">{article.date}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-text-primary group-hover:text-primary-blue transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <div className="text-primary-blue font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Baca Selengkapnya →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

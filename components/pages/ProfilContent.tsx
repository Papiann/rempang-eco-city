"use client";

import { motion } from "framer-motion";
import ProfilGallery from "@/components/ProfilGallery";

export default function ProfilContent() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container-content max-w-3xl">
        {/* Tentang REC */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-border-color"
        >
          <div className="md:flex md:items-start md:gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              {/* Gallery on the left */}
              {/* lazy-load gallery component */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* Using a small client component for scroll-snap gallery */}
              <ProfilGallery />
            </div>

            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-blue mb-6">
                Tentang Rempang Eco City
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Rempang Eco City merupakan kawasan pengembangan strategis yang berlokasi di Pulau Rempang, Batam, Kepulauan Riau, Indonesia. Kawasan ini dikembangkan dengan visi untuk menciptakan ekosistem terintegrasi yang menghubungkan lima pilar pembangunan utama.
                </p>
                <p>
                  Pengembangan Rempang Eco City dilakukan dengan mempertimbangkan tiga prinsip utama: keberlanjutan lingkungan, pemberdayaan masyarakat lokal, dan pertumbuhan ekonomi jangka panjang yang berkelanjutan.
                </p>
                <p>
                  Proyek ini melibatkan kolaborasi antara pemerintah, masyarakat lokal, dan sektor swasta untuk memastikan pembangunan yang inklusif dan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Lembaga Kemasyarakatan */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 pb-16 border-b border-border-color"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-blue mb-6">
            Lembaga Kemasyarakatan
          </h2>
          <p className="text-text-secondary mb-4">
            Struktur organisasi kemasyarakatan di Rempang Eco City.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "RW 01", description: "Pengurus RW dan komunitas lokal", image: "/images/ex-pic-staff.png" },
              { title: "RW 02", description: "Pengurus RW dan komunitas lokal", image: "/images/hero-kop-trans.png" },
              { title: "RW 03", description: "Pengurus RW dan komunitas lokal", image: "/images/hero-pariwisata-rec.jpg" },
              { title: "Lurah", description: "Kepala wilayah setempat", image: "/images/hero-rumah-rempang.png" },
            ].map((inst) => (
              <div key={inst.title} className="bg-white rounded-2xl border border-border-color overflow-hidden shadow-sm">
                <div className="w-full h-40 relative overflow-hidden rounded-t-2xl">
                  <img src={inst.image} alt={inst.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-text-primary mb-1">{inst.title}</h4>
                  <p className="text-sm text-text-secondary">{inst.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Demografi Penduduk */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-blue mb-6">
            Demografi Penduduk
          </h2>
          <p className="text-text-secondary mb-8">
            Data demografi Rempang Eco City (Mock Data)
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Penduduk", value: "12,450" },
              { label: "Jumlah KK", value: "3,200" },
              { label: "Laki-laki", value: "6,100" },
              { label: "Perempuan", value: "6,350" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-bg-light rounded-lg border border-border-color text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg border border-primary-yellow/30">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-primary-yellow">Catatan:</span> Data di atas adalah data placeholder untuk tujuan demonstrasi. Data aktual akan diperbarui secara berkala.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

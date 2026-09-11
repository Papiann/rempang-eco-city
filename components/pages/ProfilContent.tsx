"use client";

import { motion } from "framer-motion";

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
          <p className="text-text-secondary mb-8">
            Struktur organisasi kemasyarakatan di Rempang Eco City:
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-bg-light rounded-lg border border-border-color">
              <h3 className="font-heading font-semibold text-lg text-primary-blue mb-4">
                Lurah (Kepala Wilayah)
              </h3>
              <p className="text-text-secondary mb-4">Pimpinan tertinggi tingkat kelurahan</p>
              
              <div className="ml-6 space-y-4">
                <div className="p-4 bg-white rounded border border-border-color">
                  <h4 className="font-semibold text-text-primary mb-2">RW 01 (Rukun Warga)</h4>
                  <div className="ml-4 text-sm text-text-secondary">
                    <p>RT 01 • RT 02 • RT 03</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded border border-border-color">
                  <h4 className="font-semibold text-text-primary mb-2">RW 02 (Rukun Warga)</h4>
                  <div className="ml-4 text-sm text-text-secondary">
                    <p>RT 01 • RT 02 • RT 03</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded border border-border-color">
                  <h4 className="font-semibold text-text-primary mb-2">RW 03 (Rukun Warga)</h4>
                  <div className="ml-4 text-sm text-text-secondary">
                    <p>RT 01 • RT 02</p>
                  </div>
                </div>
              </div>
            </div>
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

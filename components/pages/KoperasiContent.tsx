"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cooperatives = [
  {
    id: 1,
    name: "Koperasi Transmigrasi",
    description: "Koperasi yang melayani kebutuhan ekonomi masyarakat transmigrasi di Rempang.",
    established: "2018",
    members: "245",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    activities: [
      "Perdagangan dan distribusi produk lokal",
      "Layanan kredit mikro",
      "Program pelatihan keterampilan",
      "Kemitraan dengan UMKM lokal",
    ],
  },
  {
    id: 2,
    name: "Koperasi Merah Putih",
    description: "Koperasi konsumen yang fokus pada pemberdayaan ekonomi masyarakat Rempang.",
    established: "2020",
    members: "180",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    activities: [
      "Penyediaan barang kebutuhan pokok",
      "Program tabungan komunitas",
      "Pelatihan manajemen bisnis",
      "Kemitraan strategis dengan pemerintah",
    ],
  },
];

export default function KoperasiContent() {
  return (
    <div className="bg-white pt-8 pb-16 md:pt-10 md:pb-24">
      <div className="container-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-text-secondary max-w-3xl mb-12"
        >
          Informasi koperasi dan pemberdayaan ekonomi masyarakat di Rempang Eco City
        </motion.p>

        <div className="space-y-12">
          {cooperatives.map((coop, i) => (
            <motion.div
              key={coop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-bg-light rounded-xl border border-border-color"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-border-color">
                <img
                  src={coop.image}
                  alt={coop.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading font-bold text-2xl text-primary-blue mb-3">
                  {coop.name}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {coop.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border-color">
                  <div>
                    <p className="text-sm text-text-secondary">Tahun Berdiri</p>
                    <p className="font-semibold text-text-primary">{coop.established}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Jumlah Anggota</p>
                    <p className="font-semibold text-text-primary">{coop.members}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Kegiatan Utama</h4>
                  <ul className="space-y-2">
                    {coop.activities.map((activity) => (
                      <li key={activity} className="flex gap-2 text-sm text-text-secondary">
                        <span className="text-primary-yellow">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary-blue text-primary-blue font-medium rounded-lg hover:bg-primary-blue hover:text-white transition-colors"
                >
                  Selengkapnya →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

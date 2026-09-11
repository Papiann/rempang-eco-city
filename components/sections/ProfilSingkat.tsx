"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProfilSingkat() {
  return (
    <section className="bg-bg-light py-16 md:py-24">
      <div className="container-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-3xl md:text-4xl text-primary-blue mb-4"
        >
          Tentang Rempang Eco City
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-border-color to-bg-light">
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=800&auto=format&fit=crop"
                alt="Pulau Rempang"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Rempang Eco City merupakan kawasan pengembangan yang berada di Pulau Rempang, Batam, Kepulauan Riau. Kawasan ini dirancang sebagai ekosistem terintegrasi yang menghubungkan industri, perdagangan, pemukiman, pariwisata, dan energi terbarukan.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Pengembangan Rempang Eco City dilakukan dengan mempertimbangkan keberlanjutan lingkungan, pemberdayaan masyarakat lokal, dan pertumbuhan ekonomi jangka panjang.
            </p>

            <Link
              href="/profil"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-blue text-primary-blue font-medium rounded-lg hover:bg-primary-blue hover:text-white transition-colors"
            >
              Selengkapnya →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-blue leading-tight">
              Selamat Datang di
              <br />
              Rempang Eco City
            </h1>

            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
              Portal informasi masyarakat Rempang Eco City yang menghadirkan informasi seputar profil wilayah, koperasi, pariwisata, UMKM, dan berita terkini.
            </p>

            <motion.a
              href="/profil"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white font-medium rounded-lg hover:bg-primary-dark transition-colors group"
            >
              Kenali Rempang Eco City
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-bg-light to-border-color">
              <img
                src="https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?q=80&w=800&auto=format&fit=crop"
                alt="Rempang Eco City"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

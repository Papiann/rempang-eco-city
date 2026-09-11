"use client";

import { motion } from "framer-motion";

export default function PetaWilayah() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-blue mb-3">
            Jelajahi Wilayah Rempang
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Lihat lokasi dan wilayah Rempang Eco City
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden border border-border-color shadow-sm"
        >
          <div className="bg-bg-light aspect-video flex items-center justify-center">
            {/* Placeholder Map */}
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-primary-blue/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724C3.206 16.925 2 15.972 2 14.8V5.2c0-1.172 1.206-2.125 1.553-2.476M9 20l6 3.722M9 20V9.5m6 10.722l5.447 2.724C20.794 16.925 22 15.972 22 14.8V5.2c0-1.172-1.206-2.125-1.553-2.476M15 9.5m-6 0l6-3v6m0 0l6-3" />
                </svg>
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-2">Peta Interaktif</h3>
                <p className="text-text-secondary mb-6">Placeholder untuk peta Rempang Eco City</p>
                <div className="flex gap-4 justify-center">
                  <div className="px-4 py-2 bg-primary-blue/10 rounded-lg text-sm text-primary-blue font-medium">
                    Rempang, Batam
                  </div>
                  <div className="px-4 py-2 bg-primary-blue/10 rounded-lg text-sm text-primary-blue font-medium">
                    Kepulauan Riau, Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

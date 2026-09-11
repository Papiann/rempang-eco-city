"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { sectors } from "@/data/sectors";
import SectionHeader from "./SectionHeader";

export default function InvestmentSection() {
  return (
    <section id="investment" className="bg-forest py-24 md:py-36">
      <div className="container-content">
        <SectionHeader light headline="Build the future with us." />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sectors.map((sector, i) => (
            <motion.a
              href="#"
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-forest p-7 flex flex-col justify-between min-h-[220px] focus-ring rounded-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-offwhite/50 text-sm">{sector.number}</span>
                <ArrowUpRight
                  size={18}
                  className="text-offwhite/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="font-heading font-semibold text-lg text-offwhite">
                {sector.title}
              </h3>
            </motion.a>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-offwhite text-forest text-sm font-medium hover:bg-sand transition-colors duration-300 focus-ring rounded-lg"
          >
            Explore Investment Opportunities
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-offwhite/40 text-offwhite text-sm font-medium hover:bg-offwhite/10 transition-colors duration-300 focus-ring rounded-lg"
          >
            <Download size={16} />
            Download Investment Information
          </a>
        </div>
      </div>
    </section>
  );
}

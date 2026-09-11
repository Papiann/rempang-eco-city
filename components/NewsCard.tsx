"use client";

import { motion } from "framer-motion";
import type { NewsArticle } from "@/data/news";

export default function NewsCard({
  article,
  index = 0,
}: {
  article: NewsArticle;
  index?: number;
}) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group block focus-ring ${article.featured ? "" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${
          article.featured ? "aspect-[16/10]" : "aspect-[16/11]"
        }`}
      >
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-xs text-charcoal/50">
        <span className="uppercase tracking-wide text-teal font-medium">
          {article.category}
        </span>
        <span aria-hidden>—</span>
        <span>{article.date}</span>
      </div>
      <h3
        className={`mt-3 font-heading font-semibold text-forest group-hover:text-teal transition-colors duration-300 ${
          article.featured ? "text-2xl md:text-3xl" : "text-lg"
        }`}
      >
        {article.title}
      </h3>
      <p className="mt-2 text-charcoal/70 text-sm leading-relaxed max-w-md">
        {article.excerpt}
      </p>
    </motion.a>
  );
}

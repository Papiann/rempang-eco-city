"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Development", href: "#development" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Updates", href: "#updates" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-editorial ${
          scrolled
            ? "bg-offwhite/80 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-content flex items-center justify-between h-20 md:h-24">
          <a
            href="#top"
            className={`font-heading font-semibold tracking-tight text-sm md:text-base transition-colors duration-500 focus-ring ${
              scrolled ? "text-forest" : "text-offwhite"
            }`}
          >
            REMPANG ECO CITY
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 focus-ring ${
                    scrolled
                      ? "text-charcoal/80 hover:text-forest"
                      : "text-offwhite/90 hover:text-offwhite"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#masterplan"
            className={`hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-ring rounded-lg ${
              scrolled
                ? "bg-forest text-offwhite hover:bg-teal"
                : "bg-offwhite text-forest hover:bg-sand"
            }`}
          >
            Explore Rempang
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 focus-ring ${
              scrolled ? "text-forest" : "text-offwhite"
            }`}
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-forest lg:hidden"
          >
            <div className="container-content h-20 flex items-center justify-between">
              <span className="font-heading font-semibold text-offwhite text-sm">
                REMPANG ECO CITY
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 text-offwhite focus-ring"
              >
                <X size={26} />
              </button>
            </div>
            <ul className="container-content mt-10 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 border-b border-offwhite/15 text-offwhite text-3xl font-heading font-medium focus-ring"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <a
                  href="#masterplan"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-6 py-3 bg-offwhite text-forest text-sm font-medium focus-ring"
                >
                  Explore Rempang
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

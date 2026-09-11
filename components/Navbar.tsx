"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil REC", href: "/profil" },
  { label: "Koperasi", href: "/koperasi" },
  { label: "Pariwisata", href: "/pariwisata" },
  { label: "UMKM", href: "/umkm" },
  { label: "Berita", href: "/berita" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-border-color"
          : "bg-white border-b border-border-color"
      }`}
    >
      <nav className="container-content flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-lg md:text-xl text-primary-blue">
          Rempang Eco City
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-text-primary hover:text-primary-blue transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2.5 bg-primary-blue text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          Hubungi Kami
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-primary hover:bg-bg-light rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border-color bg-white"
          >
            <div className="container-content py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-light rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                className="block px-4 py-2.5 bg-primary-blue text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors text-center"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Yellow accent line */}
      <div className="h-1 bg-gradient-to-r from-primary-yellow to-primary-yellow/0"></div>
    </header>
  );
}

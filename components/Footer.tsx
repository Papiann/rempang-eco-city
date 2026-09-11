import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil REC", href: "/profil" },
  { label: "Koperasi", href: "/koperasi" },
  { label: "Pariwisata", href: "/pariwisata" },
  { label: "UMKM", href: "/umkm" },
  { label: "Berita", href: "/berita" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16 md:py-20">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Logo Kementrans */}
          <div className="flex items-start">
            <div className="flex flex-col">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xs font-bold text-center px-2">KEMENTRANS</span>
              </div>
              <p className="text-sm text-white/80">
                Kementerian Transportasi
              </p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Menu
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-primary-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Alamat
            </h4>
            <div className="mt-4 text-sm text-white/80 space-y-2">
              <p>Rempang, Batam</p>
              <p>Kepulauan Riau, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-white/60">
          <p>Copyright © 2026 Rempang Eco City.</p>
        </div>
      </div>
    </footer>
  );
}

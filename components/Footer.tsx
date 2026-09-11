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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-lg">Rempang Eco City</h3>
            <p className="mt-3 text-sm text-white/80">
              Portal informasi masyarakat Rempang Eco City
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigasi
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Kontak
            </h4>
            <div className="mt-4 text-sm text-white/80 space-y-2">
              <p>Rempang, Batam</p>
              <p>Kepulauan Riau, Indonesia</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Informasi
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary-yellow transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-primary-yellow transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-white/60">
          <p>© 2026 Rempang Eco City. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

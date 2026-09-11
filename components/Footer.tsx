const navGroups = [
  {
    title: "Overview",
    links: ["About", "Development", "Masterplan", "Sustainability", "Investment", "Updates"],
  },
  {
    title: "Resources",
    links: ["Official Information", "Documents", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite/80 pt-20 pb-10">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-offwhite/10">
          <div className="md:col-span-5">
            <span className="font-heading font-semibold text-offwhite text-lg">
              REMPANG ECO CITY
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A New Gateway for Sustainable Growth.
            </p>
          </div>

          {navGroups.map((group) => (
            <div key={group.title} className="md:col-span-3">
              <span className="text-offwhite/50 text-xs uppercase tracking-wide">
                {group.title}
              </span>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-offwhite transition-colors duration-200 focus-ring"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4">
            <span className="text-offwhite/50 text-xs uppercase tracking-wide">
              Contact
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              BP Batam — Rempang Eco City Development Office
              <br />
              Batam, Riau Islands, Indonesia
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-offwhite/45">
          <span>Copyright 2026 Rempang Eco City</span>
          <span>Data referenced from BP Batam Strategic Plan 2025–2029</span>
        </div>
      </div>
    </footer>
  );
}

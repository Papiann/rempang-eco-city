import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Breadcrumb removed per request
import PageHeader from "@/components/PageHeader";

const pengurus = [
  {
    name: "Yudo Pramono",
    role: "Staff Khusus Kementrans",
    image: "/images/ex-pic-staff.png",
  },
  {
    name: "Yudo Pramono",
    role: "Staff Khusus Kementrans",
    image: "/images/ex-pic-staff.png",
  },
  {
    name: "Yudo Pramono",
    role: "Staff Khusus Kementrans",
    image: "/images/ex-pic-staff.png",
  },
  {
    name: "Yudo Pramono",
    role: "Staff Khusus Kementrans",
    image: "/images/ex-pic-staff.png",
  },
];

export default function KoperasiTransmigrasiPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader
          title="Koperasi Transmigrasi"
          description="Koperasi yang mendukung kebutuhan ekonomi dan kesejahteraan masyarakat di Rempang Eco City."
        />
        {/* breadcrumb removed */}

        <section className="bg-white py-16 md:py-20">
          <div className="container-content">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/images/hero-kop-trans.png"
                  alt="Koperasi Transmigrasi"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              <div className="space-y-5">
                <h2 className="font-heading text-3xl font-bold text-primary-blue">
                  Tentang Koperasi Transmigrasi
                </h2>
                <p className="text-base leading-relaxed text-text-secondary">
                  Koperasi Transmigrasi menjadi salah satu pilar ekonomi masyarakat di Rempang Eco City.
                  Koperasi ini berperan dalam menyediakan layanan kebutuhan pokok, membantu pengelolaan usaha
                  masyarakat, serta menjadi wadah pelatihan dan pemberdayaan ekonomi warga.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  Berbagai program seperti akses kebutuhan konsumsi, pendampingan usaha, dan bantuan permodalan
                  menjadi strategi utama untuk mendorong kesejahteraan masyarakat secara berkelanjutan.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-text-secondary">Tahun Berdiri</p>
                    <p className="mt-2 text-xl font-bold text-text-primary">2018</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-text-secondary">Anggota</p>
                    <p className="mt-2 text-xl font-bold text-text-primary">245</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-12">
          <div className="container-content">
            <h2 className="font-heading text-4xl font-bold text-primary-blue text-center mb-8">
              Struktur Kepengurusan Koperasi Transmigrasi
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-[0_8px_20px_rgba(15,23,42,0.03)]">
              <img
                src="/images/struktur-kop-trans.png"
                alt="Struktur kepengurusan Koperasi Transmigrasi"
                className="mx-auto w-full max-w-6xl object-contain"
              />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pengurus.map((person, index) => (
                <article
                  key={`${person.name}-${index}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.03)] transition-all hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="overflow-hidden bg-[#39b7c9]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-72 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-primary-blue">{person.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{person.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function KoperasiTransmigrasiPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader
          title="Koperasi Transmigrasi"
          description="Koperasi yang mendukung kebutuhan ekonomi dan kesejahteraan masyarakat di Rempang Eco City."
        />
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Koperasi", href: "/koperasi" },
            { label: "Koperasi Transmigrasi" },
          ]}
        />

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
      </div>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

export default function KoperasiMerahPutihPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader
          title="Koperasi Merah Putih"
          description="Koperasi yang mendorong potensi usaha dan kesejahteraan masyarakat Rempang Eco City."
        />
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/" },
            { label: "Koperasi", href: "/koperasi" },
            { label: "Koperasi Merah Putih" },
          ]}
        />

        <section className="bg-white py-16 md:py-20">
          <div className="container-content">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src="/images/hero-kops-mp.png"
                  alt="Koperasi Merah Putih"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              <div className="space-y-5">
                <h2 className="font-heading text-3xl font-bold text-primary-blue">
                  Tentang Koperasi Merah Putih
                </h2>
                <p className="text-base leading-relaxed text-text-secondary">
                  Koperasi Merah Putih menjadi wadah ekonomi masyarakat Rempang yang fokus pada penguatan usaha,
                  pelayanan kebutuhan pokok, hingga pengembangan potensi lokal. Koperasi ini hadir untuk mendorong
                  kemandirian ekonomi masyarakat secara berkelanjutan.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  Dengan orientasi pada semangat gotong royong, koperasi ini aktif dalam program pengelolaan usaha,
                  dukungan modal usaha, serta pemberdayaan UMKM lokal agar lebih kompetitif dan berdampak luas.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-text-secondary">Tahun Berdiri</p>
                    <p className="mt-2 text-xl font-bold text-text-primary">2020</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-text-secondary">Anggota</p>
                    <p className="mt-2 text-xl font-bold text-text-primary">180</p>
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

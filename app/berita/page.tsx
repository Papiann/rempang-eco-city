import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Breadcrumb removed per request
import PageHeader from "@/components/PageHeader";
import BeritaContent from "@/components/pages/BeritaContent";

export default function BeritaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader 
          title="Berita & Informasi"
          description="Kabar terbaru seputar Rempang Eco City"
        />
        <BeritaContent />
      </div>
      <Footer />
    </main>
  );
}

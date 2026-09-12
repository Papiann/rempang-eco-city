import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Breadcrumb removed per request
import PageHeader from "@/components/PageHeader";
import KoperasiContent from "@/components/pages/KoperasiContent";

export default function KoperasiPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader 
          title="Koperasi"
          description="Informasi koperasi dan pemberdayaan ekonomi masyarakat"
        />
        <KoperasiContent />
      </div>
      <Footer />
    </main>
  );
}

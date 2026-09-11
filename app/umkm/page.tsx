import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import UMKMContent from "@/components/pages/UMKMContent";

export default function UMKMPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader 
          title="UMKM Rempang"
          description="Temukan dan dukung produk usaha masyarakat"
        />
        <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "UMKM" }]} />
        <UMKMContent />
      </div>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import PariwisataContent from "@/components/pages/PariwisataContent";

export default function PariwisataPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader 
          title="Pariwisata Rempang"
          description="Jelajahi potensi alam, budaya, dan destinasi wisata"
        />
        <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Pariwisata" }]} />
        <PariwisataContent />
      </div>
      <Footer />
    </main>
  );
}

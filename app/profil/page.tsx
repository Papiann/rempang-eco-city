import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Breadcrumb removed per request
import PageHeader from "@/components/PageHeader";
import ProfilContent from "@/components/pages/ProfilContent";

export default function ProfilPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PageHeader 
          title="Profil Rempang Eco City"
          description="Informasi lengkap tentang Rempang Eco City"
        />
        <ProfilContent />
      </div>
      <Footer />
    </main>
  );
}

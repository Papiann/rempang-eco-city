import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import PetaWilayah from "@/components/sections/PetaWilayah";
import KoperasiSection from "@/components/sections/KoperasiSection";
import PariwisataSection from "@/components/sections/PariwisataSection";
import BeritaTerbaru from "@/components/sections/BeritaTerbaru";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <HeroBanner />
        <PetaWilayah />
        <KoperasiSection />
        <PariwisataSection />
        <BeritaTerbaru />
      </div>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import StatsSection from "@/components/StatsSection";
import MasterplanMap from "@/components/MasterplanMap";
import DevelopmentPillars from "@/components/DevelopmentPillars";
import Timeline from "@/components/Timeline";
import SustainabilitySection from "@/components/SustainabilitySection";
import CommunitySection from "@/components/CommunitySection";
import InvestmentSection from "@/components/InvestmentSection";
import NewsSection from "@/components/NewsSection";
import ExploreSection from "@/components/ExploreSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <StatsSection />
      <MasterplanMap />
      <DevelopmentPillars />
      <Timeline />
      <SustainabilitySection />
      <CommunitySection />
      <InvestmentSection />
      <NewsSection />
      <ExploreSection />
      <CTASection />
      <Footer />
    </main>
  );
}

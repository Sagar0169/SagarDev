import HeroSection from "@/src/components/hero/hero-section";
import Background from "@/src/components/layout/background";
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import AboutSection from "@/src/components/sections/about-section";
import BuildingPublicSection from "@/src/components/sections/building-public";
import FeaturedProject from "@/src/components/sections/featured-project";
import ProcessSection from "@/src/components/sections/process-section";
import SystemsSection from "@/src/components/sections/systems-section";
import SectionDivider from "@/src/components/ui/section-divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <SystemsSection />
      <FeaturedProject />
      <BuildingPublicSection />
      <ProcessSection />

      <Footer />
    </main>
  );
}

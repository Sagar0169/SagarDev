import HeroSection from "@/src/components/hero/hero-section";
import Background from "@/src/components/layout/background";
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/layout/navbar";
import AboutSection from "@/src/components/sections/about-section";
import BuildingPublicSection from "@/src/components/sections/building-public";
import FeaturedProject from "@/src/components/sections/featured-project";
import FocusSection from "@/src/components/sections/focus-section";
import ProcessSection from "@/src/components/sections/process-section";
import ProjectsWall from "@/src/components/sections/projects-wall";
import SystemsSection from "@/src/components/sections/systems-section";
import WorkflowSection from "@/src/components/sections/workflow-section";
import WritingSection from "@/src/components/sections/writing-section";
import SectionDivider from "@/src/components/ui/section-divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background />
      <Navbar />

      <HeroSection />
      <FeaturedProject />
      <SystemsSection />
      {/* <WritingSection /> */}
      <FocusSection />

      <Footer />
    </main>
  );
}

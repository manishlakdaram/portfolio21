import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ParticleNetwork from "@/components/ParticleNetwork";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <div className="fixed inset-0 z-0">
      <ParticleNetwork />
    </div>
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </div>
  </div>
);

export default Index;

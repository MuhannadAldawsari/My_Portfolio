import { useState, useEffect } from "react";
import { GameNav } from "@/components/MainNavbar";

import { HomeScreen } from "@/components/HomeScreen";
import { SectionOverlay } from "@/components/SectionOverlay";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

type NavSection = "home" | "about" | "projects" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<NavSection>("home");

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
  };

  const closeOverlay = () => {
    setActiveSection("home");
  };

  return (
    <div className="fixed inset-0 bg-background subtle-pattern overflow-hidden">
      {/* Page Navigation - Bottom */}
      <GameNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Home Section */}
      <SectionOverlay
        isOpen={activeSection === "home"}
        onClose={closeOverlay}
        title="Welcome"
      >
        <HomeScreen />
      </SectionOverlay>

      {/* Other Section Overlays */}
      <SectionOverlay
        isOpen={activeSection === "about"}
        onClose={closeOverlay}
        title="About & Certifications"
      >
        <AboutSection />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeSection === "projects"}
        onClose={closeOverlay}
        title="Projects"
      >
        <ProjectsSection />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeSection === "contact"}
        onClose={closeOverlay}
        title="Get in Touch"
      >
        <ContactSection />
      </SectionOverlay>
    </div>
  );
};

export default Index;

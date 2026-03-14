import { useState } from "react";
import { GameNav } from "@/components/MainNavbar";

import { HomeScreen } from "@/components/HomeScreen";
import { SectionOverlay } from "@/components/SectionOverlay";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Lights } from "@/components/animata/background/Lights";

type NavSection = "home" | "education" | "projects" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<NavSection>("home");
  const [showBackground, setShowBackground] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
  };

  const closeOverlay = () => {
    setActiveSection("home");
  };

  const handleAnimationComplete = () => {
    setShowBackground(true);
    setHasPlayedAnimation(true);
  };

  const showSidebar = activeSection !== "home";

  return (
    <div className="fixed inset-0 bg-background subtle-pattern overflow-hidden">
      {/* Global Background Lights */}
      <div
        className={`absolute inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-1000 ${showBackground ? 'opacity-100' : 'opacity-0'} bg-grid-black/[0.02] dark:bg-grid-white/[0.03]`}
      >
        <Lights />
      </div>

      {/* Page Navigation - Bottom */}
      <GameNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Profile Sidebar — visible on all non-home sections */}
      {showSidebar && <ProfileSidebar />}

      {/* Home Section */}
      <SectionOverlay
        isOpen={activeSection === "home"}
        onClose={closeOverlay}
        title="Home"
      >
        <HomeScreen
          onTypingComplete={handleAnimationComplete}
          hasPlayedAnimation={hasPlayedAnimation}
        />
      </SectionOverlay>

      {/* Other Section Overlays */}
      <SectionOverlay
        isOpen={activeSection === "education"}
        onClose={closeOverlay}
        title="Education & Certifications"
        withSidebar={showSidebar}
      >
        <AboutSection />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeSection === "projects"}
        onClose={closeOverlay}
        title="Projects"
        withSidebar={showSidebar}
      >
        <ProjectsSection />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeSection === "contact"}
        onClose={closeOverlay}
        title="Contact"
        withSidebar={showSidebar}
      >
        <ContactSection />
      </SectionOverlay>
    </div>
  );
};

export default Index;

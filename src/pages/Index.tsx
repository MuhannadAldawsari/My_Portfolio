import { useState, useEffect } from "react";
import { GameNav } from "@/components/GameNav";
import { TopNavbar } from "@/components/TopNavbar";
import { HomeScreen } from "@/components/HomeScreen";
import { SectionOverlay } from "@/components/SectionOverlay";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

type NavSection = "home" | "about" | "projects" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<NavSection>("home");
  const [isArabic, setIsArabic] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved === "ar";
  });

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
    localStorage.setItem("language", isArabic ? "ar" : "en");
  }, [isArabic]);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
  };

  const closeOverlay = () => {
    setActiveSection("home");
  };

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <div className="fixed inset-0 bg-background subtle-pattern overflow-hidden">
      {/* Top Navigation */}
      <TopNavbar isArabic={isArabic} onToggleLanguage={toggleLanguage} />

      {/* Page Navigation - Bottom */}
      <GameNav activeSection={activeSection} onNavigate={handleNavigate} isArabic={isArabic} />

      {/* Home Screen */}
      <HomeScreen isArabic={isArabic} />

      {/* Section Overlays */}
      <SectionOverlay
        isOpen={activeSection === "about"}
        onClose={closeOverlay}
        title={isArabic ? "نبذة عني والشهادات" : "About & Certifications"}
      >
        <AboutSection isArabic={isArabic} />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeSection === "projects"}
        onClose={closeOverlay}
        title={isArabic ? "المشاريع" : "Projects"}
      >
        <ProjectsSection isArabic={isArabic} />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeSection === "contact"}
        onClose={closeOverlay}
        title={isArabic ? "تواصل معي" : "Get in Touch"}
      >
        <ContactSection isArabic={isArabic} />
      </SectionOverlay>
    </div>
  );
};

export default Index;

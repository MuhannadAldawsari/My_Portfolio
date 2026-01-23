import { Moon, Sun } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

interface SectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const SectionOverlay = ({ isOpen, onClose, title, children }: SectionOverlayProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check theme on mount
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, [isOpen]); // Re-check when opened

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="overlay-panel" onClick={onClose}>
      <div className="panel-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-border">
          <h2 className="font-display text-xl md:text-2xl text-foreground">
            {title}
          </h2>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="panel-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

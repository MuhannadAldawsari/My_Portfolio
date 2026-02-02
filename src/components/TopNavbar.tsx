import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface TopNavbarProps { }

export const TopNavbar = ({ }: TopNavbarProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-6 left-6 z-50">
      <div className="bg-card/90 backdrop-blur-md border border-border rounded-full p-2 shadow-lg">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="nav-button flex items-center justify-center"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
};

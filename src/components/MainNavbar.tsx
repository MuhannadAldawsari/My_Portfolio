import { Home, BookOpen, FolderKanban, Mail } from "lucide-react";

type NavSection = "home" | "education" | "projects" | "contact";

interface GameNavProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

const navItems = [
  { id: "home" as const, label: "Home", icon: Home },
  { id: "education" as const, label: "Education", icon: BookOpen },
  { id: "projects" as const, label: "Projects", icon: FolderKanban },
  { id: "contact" as const, label: "Contact", icon: Mail },
];

export const GameNav = ({ activeSection, onNavigate }: GameNavProps) => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-card/90 backdrop-blur-md border border-border rounded-full px-2 py-2 flex gap-1 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-button flex items-center gap-2 ${isActive ? "active" : ""}`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

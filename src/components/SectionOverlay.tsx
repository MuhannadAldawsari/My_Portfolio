import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

interface SectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const SectionOverlay = ({ isOpen, onClose, title, children }: SectionOverlayProps) => {
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
            onClick={onClose}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
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

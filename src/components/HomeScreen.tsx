import { useState } from "react";
import TypingText from "@/components/animata/text/typing-text";
import { TypingAnimation } from "@/components/animata/text/typing-animation";
import { FileText, Download, X } from "lucide-react";

export const skills = [
  "React", "TypeScript", "Node.js", "Laravel", "Python",
  "Docker", "Tailwind CSS", "Flutter", "Firebase", "Databases", "SQL", "Git", "GitHub"
];

interface HomeScreenProps {
  onTypingComplete?: () => void;
  hasPlayedAnimation?: boolean;
}

export const HomeScreen = ({ onTypingComplete, hasPlayedAnimation = false }: HomeScreenProps) => {
  const [showSubtitle, setShowSubtitle] = useState(hasPlayedAnimation);
  const [showContent, setShowContent] = useState(hasPlayedAnimation);
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <div className="space-y-6 py-4">
      {/* Top Row: Avatar + Name/Subtitle */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
        {/* Avatar */}
        <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-2 border-border shadow-md">
          <img
            src="/me2.png"
            alt="Muhannad Aldawsari"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Subtitle */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-center sm:text-left">
            {hasPlayedAnimation ? (
              <>
                Hi, I'm{" "}
                <span className="text-blue-900 dark:text-accent">Muhannad Aldawsari</span>
              </>
            ) : (
              <>
                <TypingAnimation
                  className="font-display text-3xl md:text-4xl font-semibold tracking-tight inline"
                  duration={30}
                  delay={400}
                  loop={false}
                  showCursor={false}
                >
                  Hi, I'm
                </TypingAnimation>{" "}
                <TypingAnimation
                  className="font-display text-3xl md:text-4xl font-semibold tracking-tight inline text-blue-900 dark:text-accent"
                  duration={40}
                  delay={650}
                  loop={false}
                  onComplete={() => setShowSubtitle(true)}
                >
                  Muhannad Aldawsari
                </TypingAnimation>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <div className="font-mono text-base md:text-lg text-muted-foreground text-center sm:text-left">
            {hasPlayedAnimation ? (
              <span>Software Engineer &amp; Full-Stack Developer</span>
            ) : showSubtitle ? (
              <TypingAnimation
                className="font-mono text-base md:text-lg text-muted-foreground"
                duration={30}
                loop={false}
                onComplete={() => {
                  setShowContent(true);
                  onTypingComplete?.();
                }}
              >
                Software Engineer & Full-Stack Developer
              </TypingAnimation>
            ) : null}
          </div>
        </div>
      </div>

      {/* Tagline */}
      {showContent && (
        <div className="text-base text-muted-foreground leading-relaxed max-w-lg">
          <TypingText
            text="I craft thoughtful digital experiences with clean code and elegant design. Focused on building products that make a difference."
            delay={25}
            repeat={false}
            smooth={true}
            cursor={null}
          />
        </div>
      )}

      {/* Review My Resume Button */}
      {showContent && (
        <div>
          <button
            onClick={() => setShowResumeModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <FileText className="w-4 h-4" />
            Review My Resume
          </button>
        </div>
      )}

      {/* Skills & Technologies */}
      {showContent && (
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-foreground">Skills &amp; Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
              <span className="font-medium text-sm text-foreground">Resume — Muhannad Aldawsari</span>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  Download
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            {/* PDF Viewer */}
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="flex-1 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

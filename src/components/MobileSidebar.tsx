import { useState, useEffect } from "react";
import { Download, X, FileText } from "lucide-react";
import { skills } from "@/components/HomeScreen";
import { TypingAnimation } from "@/components/animata/text/typing-animation";

interface MobileSidebarProps {
    onTypingComplete?: () => void;
    hasPlayedAnimation?: boolean;
}

/**
 * Compact profile card shown at the top of the About page on mobile only.
 * Hidden on md+ screens (the full sidebar handles those).
 */
export const MobileSidebar = ({ onTypingComplete, hasPlayedAnimation = false }: MobileSidebarProps) => {
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [nameTypingDone, setNameTypingDone] = useState(hasPlayedAnimation);

    useEffect(() => {
        if (hasPlayedAnimation) {
            setNameTypingDone(true);
        }
    }, [hasPlayedAnimation]);

    const handleNameComplete = () => {
        setNameTypingDone(true);
        onTypingComplete?.();
    };

    return (
        <>
            {/* Only visible on small screens */}
            <div className="md:hidden rounded-2xl border border-border bg-card/80 p-4 space-y-4">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-border shadow-md">
                        <img src="/me2.png" alt="Muhannad Aldawsari" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="font-display text-base font-semibold text-foreground leading-tight min-h-[1.5em]">
                            {hasPlayedAnimation ? (
                                "Muhannad Aldawsari"
                            ) : (
                                <TypingAnimation
                                    className="font-display text-base font-semibold text-foreground"
                                    duration={60}
                                    delay={300}
                                    loop={false}
                                    startOnView={false}
                                    showCursor={false}
                                    onComplete={handleNameComplete}
                                >
                                    Muhannad Aldawsari
                                </TypingAnimation>
                            )}
                        </h2>
                        {nameTypingDone ? (
                            <TypingAnimation
                                words={["Software Engineer", "Full-Stack Developer", "Backend Engineer"]}
                                className="text-xs text-muted-foreground mt-0.5 font-mono leading-snug"
                                duration={60}
                                deleteSpeed={30}
                                pauseDelay={1500}
                                loop={true}
                                startOnView={false}
                                showCursor={true}
                                blinkCursor={true}
                            />
                        ) : null}
                    </div>
                </div>

                {/* Resume Button */}
                <button
                    onClick={() => setShowResumeModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm"
                >
                    <FileText className="w-3 h-3" />
                    Review My Resume
                </button>
            </div>


            {/* Resume Modal */}
            {showResumeModal && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    onClick={() => setShowResumeModal(false)}
                >
                    <div
                        className="relative w-full max-w-4xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
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
                        <iframe src="/resume.pdf" title="Resume" className="flex-1 w-full" />
                    </div>
                </div>
            )}
        </>
    );
};

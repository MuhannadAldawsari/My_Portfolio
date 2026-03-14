import { useState } from "react";
import { FileText, Download, X } from "lucide-react";
import { skills } from "@/components/HomeScreen";

export const ProfileSidebar = () => {
    const [showResumeModal, setShowResumeModal] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <aside className="sidebar-panel">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border shadow-md mx-auto mb-3">
                    <img
                        src="/me2.png"
                        alt="Muhannad Aldawsari"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name & Subtitle */}
                <div className="text-center mb-4">
                    <h2 className="font-display text-base font-semibold text-foreground leading-tight">
                        Muhannad Aldawsari
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1 font-mono leading-snug">
                        Software Engineer &amp; Full-Stack Developer
                    </p>
                </div>

                {/* Review My Resume button */}
                <button
                    onClick={() => setShowResumeModal(true)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md mb-5"
                >
                    <FileText className="w-3 h-3" />
                    Review My Resume
                </button>

                {/* Divider */}
                <div className="border-t border-border mb-4" />

                {/* Skills */}
                <div className="space-y-2">
                    <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Skills &amp; Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </aside>

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
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
                            <span className="font-medium text-sm text-foreground">
                                Resume — Muhannad Aldawsari
                            </span>
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
        </>
    );
};

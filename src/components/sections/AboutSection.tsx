import { Award, Calendar, ExternalLink, X, GraduationCap, Download } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "IBM",
    date: "2026",
    badge: "Specialization",
    certificatePdf: "/FSD.pdf",
  },
  {
    title: "Backend Development Camp",
    issuer: "Hash Plus",
    date: "2026",
    badge: "Certified",
    certificatePdf: "/BDC.pdf",
  },
  {
    title: "Application Development Camp",
    issuer: "Hash Plus",
    date: "2025",
    badge: "Certified",
    certificatePdf: "/ADC.pdf",
  },
  {
    title: "IBM Data Science",
    issuer: "IBM",
    date: "2025",
    badge: "Completed",
    certificatePdf: "/Data Science.pdf",
  },
  {
    title: "Google IT Automation With Python",
    issuer: "Google",
    date: "2024",
    badge: "Completed",
    certificatePdf: "/Google IT.pdf",
  },
];



export const AboutSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <div className="space-y-8">
      {/* Education */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-accent" />
          Education
        </h3>
        <div className="elegant-card p-6">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden bg-white/10 border border-border flex items-center justify-center">
              <img
                src="/KSU.png"
                alt="KSU Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='transparent' width='100' height='100'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-size='10'%3ELogo%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
                <div>
                  <h4 className="text-xl font-medium text-foreground">
                    Bachelor's in Software Engineering
                  </h4>
                  <p className="text-primary/80 font-medium mt-1">
                    King Saud University (KSU)
                  </p>
                </div>
                <div className="text-left md:text-right flex flex-col items-start md:items-end gap-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    2022 - Present
                  </span>
                  <div className="mt-2 text-sm font-medium">
                    <span className="text-muted-foreground">GPA: </span>
                    <span className="text-accent">4.77 / 5.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Award className="w-5 h-5 text-accent" />
          Certificates & Courses
        </h3>

        <div className="grid gap-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="elegant-card p-4 flex items-center justify-between group cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="flex-1">
                <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {cert.title}
                </h4>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="cert-badge">{cert.badge}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
              <div>
                <span className="font-medium text-sm text-foreground">{selectedCertificate.title}</span>
                <span className="text-muted-foreground text-xs ml-2">{selectedCertificate.issuer} • {selectedCertificate.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCertificate.certificatePdf}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  Download
                </a>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            {/* PDF Viewer */}
            <iframe
              src={selectedCertificate.certificatePdf}
              title={selectedCertificate.title}
              className="flex-1 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

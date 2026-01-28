import { Award, Calendar, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "IBM",
    date: "2026",
    badge: "Specialization",
    certificateImage: "/certificates/fullstack-ibm.jpg",
  },
  {
    title: "Application development camp",
    issuer: "Hash Plus",
    date: "2025",
    badge: "Certified",
    certificateImage: "/certificates/cloud-aws.jpg",
  },
  {
    title: "IBM Data Science",
    issuer: "IBM",
    date: "2025",
    badge: "Completed",
    certificateImage: "/certificates/ibm-data-science.jpg",
  },
  {
    title: "Google IT Automation With Python",
    issuer: "Google",
    date: "2024",
    badge: "Completed",
    certificateImage: "/certificates/python-google.jpg",
  },
];

const skills = ["React", "TypeScript", "Node.js", "Express.js", "Python", "Docker", "Tailwind CSS", "Flutter", "Firebase", "Databases", "SQL", "Git", "GitHub"];

export const AboutSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <div className="space-y-8">
      {/* Bio */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          About Me
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          A passionate developer with over 5 years of experience in building scalable web applications. I specialize in modern JavaScript frameworks and have a keen eye for creating intuitive user experiences. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
        </p>
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

      {/* Skills */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="elegant-card p-6 max-w-2xl w-full max-h-[90vh] overflow-auto relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </button>

            {/* Certificate Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {selectedCertificate.title}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
              </div>

              {/* Certificate Image */}
              <div className="rounded-lg overflow-hidden bg-secondary/50 flex items-center justify-center min-h-[300px]">
                <img
                  src={selectedCertificate.certificateImage}
                  alt={`${selectedCertificate.title} certificate`}
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='18'%3ECertificate Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

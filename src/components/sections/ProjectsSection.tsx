import { Github, ExternalLink, FolderKanban, HardDrive } from "lucide-react";

const PlayStoreIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.18 23.76c.33.18.7.22 1.06.13l12.76-7.37-2.9-2.9-10.92 10.14zM.47 1.46A1.5 1.5 0 0 0 0 2.56v18.88c0 .43.17.83.47 1.1l.06.06 10.58-10.58v-.25L.53 1.4l-.06.06zM21.6 10.4l-2.73-1.58-3.06 3.06 3.06 3.06 2.76-1.59a1.56 1.56 0 0 0 0-2.95zM4.24.11L16.99 7.48l-2.9 2.9L4.18.24C4.53.14 4.9.19 5.25.37L4.24.11z" />
  </svg>
);

const projects = [
  {
    title: "Buffer Platform",
    description: "My Graduation Project - Developed a web platform that helps tech users generate professional CVs by integrating GitHub repositories and LinkedIn data, then recommends relevant jobs, internships, events, courses, and hackathons based on user profiles.",
    tags: ["React", "TypeScript", "Python", "Supabase", "API Integration", "Trello"],
    image: "/buffer.svg",
    status: "completed" as const,
    url: "https://bufferco.com/",
    linkType: "external" as const,
  },
  {
    title: "Murshid Platform",
    description: "A web platform designed to help high school students identify suitable university majors through intelligent questionnaires that analyze students' answers using AI-based decision logic. The platform provide access to university and major information, and a community space where students can share experiences.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Trello"],
    image: "/murshid.svg",
    status: "completed" as const,
    url: "https://murshid-vrtb.vercel.app/",
    linkType: "external" as const,
  },
  {
    title: "Sabbih Mobile App",
    description: "Sabbih, a mobile-based application, designed to help users read Azkar and stay consistent through reminder notifications. Focused on building a simple, user-friendly interface and reliable notification functionality to support daily spiritual practices.",
    tags: ["Flutter"],
    image: "/sabbih.png",
    status: "completed" as const,
    url: "https://github.com/MuhannadAldawsari/sabbih-app",
    linkType: "github" as const,
    playstoreUrl: "https://play.google.com/store/apps/details?id=com.muhanad.sabbih",
  },
  {
    title: "Library Management System",
    description: "This project aims to develop a simple Library Management System that allows users to browse books and either purchase or rent them through a web application. The system is built using Laravel as a backend RESTful API and React for the frontend interface.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "Git"],
    image: "/library6.png",
    status: "completed" as const,
    url: "https://github.com/MuhannadAldawsari/Library-Management-Project",
    linkType: "github" as const,
  },
  {
    title: "Mobile Posts Platform",
    description: "Built a Flutter-based mobile posts platform utilizing Firebase and Supabase for authentication, data storage, and backend services. Implemented features including user login, post creation and deletion, image sharing, bookmarking, and real-time viewing of user engagement.",
    tags: ["Flutter", "Dart", "Firebase", "Supabase"],
    image: "/posts.png",
    status: "completed" as const,
    url: null,
    linkType: "github" as const,
  },
  {
    title: "SRS Document for Payroll Management System",
    description: "Developed a full SRS document following IEEE standards as part of Requirements Engineering course. Defined functional and non-functional requirements, created use case diagrams and use case descriptions, and modeled the system using sequence diagrams, activity diagrams, and class diagrams.",
    tags: ["Requirements Engineering Tools"],
    image: "/SRS.png",
    status: "completed" as const,
    url: "https://drive.google.com/drive/folders/1yeCGWVx2lIjW6t6iTErhaP5UQ75GFjiI?usp=sharing",
    linkType: "drive" as const,
  },
];

const getLinkIcon = (type: "external" | "github" | "drive" | "playstore") => {
  if (type === "github") return <Github className="w-3.5 h-3.5" />;
  if (type === "drive") return <HardDrive className="w-3.5 h-3.5" />;
  if (type === "playstore") return <PlayStoreIcon />;
  return <ExternalLink className="w-3.5 h-3.5" />;
};

const getLinkTitle = (type: "external" | "github" | "drive" | "playstore") => {
  if (type === "github") return "View on GitHub";
  if (type === "drive") return "View on Google Drive";
  if (type === "playstore") return "Download on Google Play";
  return "Visit project";
};

export const ProjectsSection = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <FolderKanban className="w-5 h-5 text-accent" />
        Selected Projects From My Portfolio
      </h3>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card cursor-pointer group overflow-hidden p-0 relative"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section - Compact */}
              {/* Image Section - Compact & Rounded */}
              <div className="w-full md:w-36 shrink-0 p-3 flex flex-col justify-center">
                <div className={`relative aspect-video md:aspect-square w-full overflow-hidden rounded-xl ${project.title === "Buffer Platform"
                  ? "bg-white"
                  : "bg-secondary/50"
                  }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Status Badge — top-right corner (desktop only) */}
              <span
                className={`hidden md:inline-flex absolute top-3 right-3 items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === "completed"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </span>

              {/* Content Section - Compact */}
              <div className="flex-1 flex flex-col p-4">
                {/* Title row: name on left, badge on right (mobile only) */}
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  {/* Status badge — inline, mobile only */}
                  <span
                    className={`md:hidden shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === "completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}
                  >
                    {project.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] bg-secondary/50 text-muted-foreground rounded-md border border-transparent group-hover:border-border transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="px-2 py-0.5 text-[10px] bg-secondary/50 text-muted-foreground rounded-md">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 ml-2 shrink-0">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                        title={getLinkTitle(project.linkType)}
                      >
                        {getLinkIcon(project.linkType)}
                      </a>
                    )}
                    {'playstoreUrl' in project && (
                      <a
                        href={(project as any).playstoreUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                        title="Download on Google Play"
                      >
                        <PlayStoreIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

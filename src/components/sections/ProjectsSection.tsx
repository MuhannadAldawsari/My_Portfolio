import { Github, ExternalLink, FolderKanban, HardDrive } from "lucide-react";

const projects = [
  {
    title: "Murshid Platform – Career Guidance Web Application",
    description: "A web platform designed to help high school students identify suitable university majors through intelligent questionnaires that analyze students' answers using AI-based decision logic. The platform provide access to university and major information, and a community space where students can share experiences.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Trello"],
    image: "/murshid.svg",
    status: "completed" as const,
    url: "https://murshid-vrtb.vercel.app/",
    linkType: "external" as const,
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
    title: "Sabbih Mobile App",
    description: "Sabbih, a mobile-based application as part of an Application Development Camp, designed to help users read Azkar and stay consistent through reminder notifications. Focused on building a simple, user-friendly interface and reliable notification functionality to support daily spiritual practices.",
    tags: ["Flutter"],
    image: "/sabbih4.png",
    status: "in-progress" as const,
    url: "https://github.com/muhanad0000/Sabbih-Mobile-App",
    linkType: "github" as const,
  },
  {
    title: "SRS Document for Payroll Management System",
    description: "Developed a full SRS document following IEEE standards as part of Requirements Engineering course. Defined functional and non-functional requirements, created use case diagrams and use case descriptions, and modeled the system using sequence diagrams, activity diagrams, and class diagrams.",
    tags: ["Requirements Engineering Tools"],
    image: "/SRS.png",
    status: "completed" as const,
    url: "https://drive.google.com/file/d/19263486-1012-4141-8181-818181818181/view?usp=sharing",
    linkType: "drive" as const,
  },
];

const getLinkIcon = (type: "external" | "github" | "drive") => {
  if (type === "github") return <Github className="w-3.5 h-3.5" />;
  if (type === "drive") return <HardDrive className="w-3.5 h-3.5" />;
  return <ExternalLink className="w-3.5 h-3.5" />;
};

const getLinkTitle = (type: "external" | "github" | "drive") => {
  if (type === "github") return "View on GitHub";
  if (type === "drive") return "View on Google Drive";
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
                <div className="relative aspect-video md:aspect-square w-full overflow-hidden rounded-xl bg-secondary/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Status Badge — top-right corner */}
              <span
                className={`absolute top-3 right-3 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === "completed"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </span>

              {/* Content Section - Compact */}
              <div className="flex-1 flex flex-col p-4">
                <div className="mb-2">
                  <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h4>
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

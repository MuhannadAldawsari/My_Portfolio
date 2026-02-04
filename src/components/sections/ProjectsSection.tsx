import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Murshid Platform – Career Guidance Web Application",
    description: "Developed a web platform designed to help high school students identify suitable university majors through intelligent questionnaires that analyze students’ answers using AI-based decision logic. The platform highlights students’ strengths and interests, provides access to university and major information, and includes a community space where students can share experiences and insights.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Trello",],
    image: "/placeholder.svg",
    featured: true,
  },
  {
    title: "Mobile Posts Platform – Flutter Application",
    description: "Built a Flutter-based mobile posts platform utilizing Firebase and Supabase for authentication, data storage, and backend services. Implemented features including user login, post creation and deletion, image sharing, bookmarking, and real-time viewing of user engagement. Developed as part of an Application Development Camp, emphasizing mobile UI/UX and backend integration.",
    tags: ["Flutter", "Dart", "Firebase", "Supabase"],
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "SRS Document for Payroll Management System",
    description: "Developed a full SRS document following IEEE standards for a Payroll Management System as part of Requirements Engineering course. Defined functional and non-functional requirements, created use case diagrams and detailed use case descriptions, and modeled the system using sequence diagrams, activity diagrams, and class diagrams. Focused on requirements analysis, system scope definition, and stakeholder needs.",
    tags: ["Requirements Engineering Tools"],
    image: "/placeholder.svg",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Selected projects from my portfolio.
      </p>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card cursor-pointer group overflow-hidden p-0"
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

              {/* Content Section - Compact */}
              <div className="flex-1 flex flex-col p-4">
                <div className="flex items-start justify-between mb-2">
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
                    <button className="p-1.5 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                      <Github className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
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

import { Github, ExternalLink, Star } from "lucide-react";

interface ProjectsSectionProps {
  isArabic: boolean;
}

const projects = {
  en: [
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for monitoring business metrics. Built with React, D3.js, and WebSocket for live data streaming.",
      tags: ["React", "D3.js", "WebSocket"],
      stars: 128,
      featured: true,
    },
    {
      title: "AI Code Assistant",
      description: "An intelligent code completion tool powered by machine learning, helping developers write better code faster.",
      tags: ["Python", "TensorFlow", "VS Code"],
      stars: 89,
      featured: true,
    },
    {
      title: "Component Library",
      description: "A React component library with accessible, customizable UI components following design system principles.",
      tags: ["React", "Storybook", "TypeScript"],
      stars: 256,
      featured: false,
    },
    {
      title: "Cloud Deploy CLI",
      description: "Command-line tool for seamless deployment to multiple cloud providers with a single configuration file.",
      tags: ["Node.js", "AWS", "GCP"],
      stars: 67,
      featured: false,
    },
  ],
  ar: [
    {
      title: "لوحة تحليلات البيانات",
      description: "لوحة تحليلات في الوقت الفعلي لمراقبة مقاييس الأعمال. مبنية باستخدام React و D3.js و WebSocket للبث المباشر للبيانات.",
      tags: ["React", "D3.js", "WebSocket"],
      stars: 128,
      featured: true,
    },
    {
      title: "مساعد الأكواد الذكي",
      description: "أداة إكمال الأكواد الذكية مدعومة بالتعلم الآلي، تساعد المطورين على كتابة أكواد أفضل بشكل أسرع.",
      tags: ["Python", "TensorFlow", "VS Code"],
      stars: 89,
      featured: true,
    },
    {
      title: "مكتبة المكونات",
      description: "مكتبة مكونات React مع عناصر واجهة مستخدم قابلة للوصول والتخصيص تتبع مبادئ نظام التصميم.",
      tags: ["React", "Storybook", "TypeScript"],
      stars: 256,
      featured: false,
    },
    {
      title: "أداة النشر السحابي",
      description: "أداة سطر أوامر للنشر السلس على مزودي الخدمات السحابية المتعددين بملف تكوين واحد.",
      tags: ["Node.js", "AWS", "GCP"],
      stars: 67,
      featured: false,
    },
  ],
};

export const ProjectsSection = ({ isArabic }: ProjectsSectionProps) => {
  const currentProjects = isArabic ? projects.ar : projects.en;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {isArabic 
          ? "مشاريع مختارة من معرض أعمالي. كل مشروع يمثل التزامي بالأكواد النظيفة والتصميم المدروس."
          : "Selected projects from my portfolio. Each project represents my commitment to clean code and thoughtful design."
        }
      </p>

      <div className="grid gap-4">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="project-card cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-foreground">
                {project.title}
              </h4>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Star className="w-4 h-4 fill-accent text-accent" />
                {project.stars}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Github className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

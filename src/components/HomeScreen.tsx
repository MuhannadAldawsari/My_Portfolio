import { Smartphone, Globe, Server, Brain, User, Target, Code2, Wrench } from "lucide-react";
import { MobileSidebar } from "@/components/MobileSidebar";

// skills exported so ProfileSidebar can still import them
export const skills = [
  "React", "TypeScript", "Node.js", "Laravel", "Python",
  "Docker", "Tailwind CSS", "Flutter", "Firebase", "Databases", "SQL", "Git", "GitHub"
];

const expertiseCards = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building cross-platform mobile apps for Android and iOS using Flutter.",
  },
  // {
  //   icon: Brain,
  //   title: "AI/ML Engineering",
  //   description: "Integrating intelligent models and AI-driven features into practical applications.",
  // },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-quality full-stack web applications using modern frameworks and tools.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable REST APIs and backend services designed for performance and reliability.",
  },
];

const interests = [
  "Software Engineering Internships",
  "Backend / Full-Stack Development Roles",
  "Cross-Platform Mobile Development Roles",
];

interface HomeScreenProps {
  onTypingComplete?: () => void;
  hasPlayedAnimation?: boolean;
}

export const HomeScreen = ({ onTypingComplete, hasPlayedAnimation = false }: HomeScreenProps) => {
  return (
    <div>
      {/* Mobile-only: hidden on md+, so lives outside space-y-8 to avoid phantom gap on desktop */}
      <div className="md:hidden mb-8">
        <MobileSidebar
          onTypingComplete={onTypingComplete}
          hasPlayedAnimation={hasPlayedAnimation}
        />
      </div>

      <div className="space-y-8">

        {/* Who Am I? */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <User className="w-5 h-5 text-accent" />
            Who Am I?
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Engineer focused on building reliable web and mobile products,
              delivering seamless user experiences and robust backend architecture.
            </p>
            <p>
              I deliver end-to-end solutions with clean architecture, strong execution,
              and measurable outcomes.
            </p>
          </div>
        </div>

        {/* Currently Interested In */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            Currently Interested In
          </h3>
          <div className="elegant-card p-5">
            <ul className="space-y-2">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Code2 className="w-5 h-5 text-accent" />
            Core Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertiseCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="elegant-card flex items-start gap-4 p-4 hover:bg-card transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 dark:bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent dark:text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Technologies — mobile only (shown here instead of sidebar card) */}
        <div className="space-y-4 md:hidden">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Wrench className="w-5 h-5 text-accent" />
            Skills &amp; Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>{/* end space-y-8 */}
    </div>
  );
};


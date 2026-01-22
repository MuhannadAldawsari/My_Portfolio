import { Award, Calendar, ExternalLink } from "lucide-react";

interface AboutSectionProps {
  isArabic: boolean;
}

const certificates = {
  en: [
    {
      title: "Advanced React Development",
      issuer: "Meta",
      date: "2024",
      badge: "Professional",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      badge: "Specialization",
    },
    {
      title: "Cloud Architecture",
      issuer: "AWS",
      date: "2023",
      badge: "Certified",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "2022",
      badge: "Professional",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Stanford Online",
      date: "2022",
      badge: "Completed",
    },
  ],
  ar: [
    {
      title: "تطوير React المتقدم",
      issuer: "ميتا",
      date: "2024",
      badge: "احترافي",
    },
    {
      title: "تطوير الويب الشامل",
      issuer: "كورسيرا",
      date: "2023",
      badge: "تخصص",
    },
    {
      title: "هندسة الحوسبة السحابية",
      issuer: "أمازون ويب سيرفيسز",
      date: "2023",
      badge: "معتمد",
    },
    {
      title: "أساسيات تصميم واجهة المستخدم",
      issuer: "جوجل",
      date: "2022",
      badge: "احترافي",
    },
    {
      title: "هياكل البيانات والخوارزميات",
      issuer: "ستانفورد أونلاين",
      date: "2022",
      badge: "مكتمل",
    },
  ],
};

const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Tailwind CSS", "PostgreSQL", "GraphQL", "Figma"];

export const AboutSection = ({ isArabic }: AboutSectionProps) => {
  const currentCerts = isArabic ? certificates.ar : certificates.en;

  return (
    <div className="space-y-8">
      {/* Bio */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          {isArabic ? "نبذة عني" : "About Me"}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {isArabic 
            ? "مطور شغوف بخبرة تزيد عن 5 سنوات في بناء تطبيقات ويب قابلة للتوسع. أتخصص في أطر عمل JavaScript الحديثة ولدي عين ثاقبة لإنشاء تجارب مستخدم بديهية. عندما لا أكون منشغلاً بالبرمجة، تجدني أستكشف تقنيات جديدة أو أساهم في مشاريع مفتوحة المصدر."
            : "A passionate developer with over 5 years of experience in building scalable web applications. I specialize in modern JavaScript frameworks and have a keen eye for creating intuitive user experiences. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects."
          }
        </p>
      </div>

      {/* Certificates */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Award className="w-5 h-5 text-accent" />
          {isArabic ? "الشهادات والدورات" : "Certificates & Courses"}
        </h3>
        
        <div className="grid gap-3">
          {currentCerts.map((cert, index) => (
            <div
              key={index}
              className="elegant-card p-4 flex items-center justify-between group cursor-pointer"
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
          {isArabic ? "المهارات والتقنيات" : "Skills & Technologies"}
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
    </div>
  );
};

import { Mail, Github, Linkedin, X, MapPin, Phone } from "lucide-react";

interface ContactSectionProps { }

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/MuhannadAldawsari", username: "Muhannad Aldawsari" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhannad-aldawsari", username: "Muhannad Aldawsari" },
  { icon: X, label: "X", href: "https://x.com/Muhand773", username: "@Muhand773" },
];

export const ContactSection = ({ }: ContactSectionProps) => {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground text-lg">
          Informations
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="mailto:Muhanad1214@hotmail.com"
            className="elegant-card p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
          >
            <div className="p-2.5 rounded-full bg-accent/10">
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Email
              </p>
              <p className="font-medium text-foreground">
                Muhanad1214@hotmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+966508661214"
            className="elegant-card p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
          >
            <div className="p-2.5 rounded-full bg-accent/10">
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Phone
              </p>
              <p className="font-medium text-foreground">
                +966 50 866 1214
              </p>
            </div>
          </a>

          <div className="elegant-card p-4 flex items-center gap-3 hover:border-accent/30 transition-colors">
            <div className="p-2.5 rounded-full bg-accent/10">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Location
              </p>
              <p className="font-medium text-foreground">
                Riyadh, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground text-lg">
          Connect With Me
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="elegant-card px-4 py-3 flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {social.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{social.username}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

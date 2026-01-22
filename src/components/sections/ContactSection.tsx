import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";

interface ContactSectionProps {
  isArabic: boolean;
}

const socialLinks = [
  { icon: Github, label: "GitHub", labelAr: "جيت هب", href: "#", username: "@daviddev" },
  { icon: Linkedin, label: "LinkedIn", labelAr: "لينكد إن", href: "#", username: "in/daviddev" },
  { icon: Twitter, label: "Twitter", labelAr: "تويتر", href: "#", username: "@david_dev" },
];

export const ContactSection = ({ isArabic }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-8">
      {/* Quick Info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="elegant-card p-4 flex items-center gap-3">
          <div className="p-2.5 rounded-full bg-secondary">
            <MapPin className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {isArabic ? "الموقع" : "Location"}
            </p>
            <p className="font-medium text-foreground">
              {isArabic ? "سان فرانسيسكو، كاليفورنيا" : "San Francisco, CA"}
            </p>
          </div>
        </div>
        
        <div className="elegant-card p-4 flex items-center gap-3">
          <div className="p-2.5 rounded-full bg-secondary">
            <Clock className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {isArabic ? "وقت الاستجابة" : "Response Time"}
            </p>
            <p className="font-medium text-foreground">
              {isArabic ? "خلال 24 ساعة" : "Within 24 hours"}
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">
          {isArabic ? "تواصل" : "Connect"}
        </h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="elegant-card px-4 py-3 flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {isArabic ? social.labelAr : social.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{social.username}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Mail className="w-5 h-5 text-accent" />
          {isArabic ? "أرسل رسالة" : "Send a Message"}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {isArabic ? "الاسم" : "Name"}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder={isArabic ? "اسمك" : "Your name"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {isArabic ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder={isArabic ? "بريدك@email.com" : "your@email.com"}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {isArabic ? "الرسالة" : "Message"}
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              placeholder={isArabic ? "أخبرني عن مشروعك..." : "Tell me about your project..."}
            />
          </div>
          
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            {isArabic ? "إرسال الرسالة" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

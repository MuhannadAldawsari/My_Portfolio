interface HomeScreenProps {
  isArabic: boolean;
}

export const HomeScreen = ({ isArabic }: HomeScreenProps) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-14 pb-20">
      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
          <span className="status-indicator" />
          <span className="text-sm text-muted-foreground">
            {isArabic ? "متاح لفرص جديدة" : "Available for new opportunities"}
          </span>
        </div>

        {/* Avatar */}
        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-border flex items-center justify-center">
          <span className="font-display text-4xl text-primary">
            {isArabic ? "د" : "D"}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
            {isArabic ? (
              <>مرحباً، أنا <span className="text-accent">ديفيد</span></>
            ) : (
              <>Hello, I'm <span className="text-accent">David</span></>
            )}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {isArabic ? "مطور متكامل ومصمم واجهات مستخدم" : "Full-Stack Developer & UI/UX Designer"}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
          {isArabic 
            ? "أصنع تجارب رقمية مدروسة بأكواد نظيفة وتصميم أنيق. أركز على بناء منتجات تُحدث فرقاً."
            : "I craft thoughtful digital experiences with clean code and elegant design. Focused on building products that make a difference."
          }
        </p>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
        {isArabic ? "استخدم القائمة أدناه للتنقل" : "Navigate using the menu below"}
      </div>
    </div>
  );
};

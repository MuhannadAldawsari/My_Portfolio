interface HomeScreenProps { }

export const HomeScreen = ({ }: HomeScreenProps) => {
  return (
    <div className="space-y-8 py-4 text-center">
      {/* Avatar */}
      <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-border flex items-center justify-center">
        <span className="font-display text-4xl text-primary">
          D
        </span>
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
          Hello, I'm <span className="text-accent">David</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Full-Stack Developer & UI/UX Designer
        </p>
      </div>

      {/* Tagline */}
      <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
        I craft thoughtful digital experiences with clean code and elegant design. Focused on building products that make a difference.
      </p>
    </div>
  );
};

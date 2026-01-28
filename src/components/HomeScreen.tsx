import { useState } from "react";
import TypingText from "@/components/animata/text/typing-text";
import { TypingAnimation } from "@/components/animata/text/typing-animation";

interface HomeScreenProps {
  onTypingComplete?: () => void;
  hasPlayedAnimation?: boolean;
}

export const HomeScreen = ({ onTypingComplete, hasPlayedAnimation = false }: HomeScreenProps) => {
  const [showSubtitle, setShowSubtitle] = useState(hasPlayedAnimation);

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
        <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight">
          {hasPlayedAnimation ? (
            <>
              Hello, I'm <span className="text-accent">Muhannad Aldawsari</span>
            </>
          ) : (
            <>
              <TypingAnimation
                className="font-display text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight inline"
                duration={40}
                delay={500}
                loop={false}
                showCursor={false}
              >
                Hello, I'm
              </TypingAnimation>{" "}
              <TypingAnimation
                className="font-display text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight inline text-accent"
                duration={40}
                delay={1000}
                loop={false}
                onComplete={() => setShowSubtitle(true)}
              >
                Muhannad Aldawsari
              </TypingAnimation>
            </>
          )}
        </h1>
        <div className="rounded-md px-4 py-2 font-mono text-base md:text-lg">
          {hasPlayedAnimation ? (
            <span className="font-mono text-base md:text-lg leading-normal">
              Software Engineer & Full-Stack Developer
            </span>
          ) : showSubtitle ? (
            <TypingAnimation
              className="font-mono text-base md:text-lg leading-normal"
              duration={35}
              loop={false}
              showCursor={true}
              onComplete={onTypingComplete}
            >
              Software Engineer & Full-Stack Developer
            </TypingAnimation>
          ) : null}
        </div>
      </div>
      {/* Tagline */}
      <div className="text-muted-foreground leading-relaxed max-w-lg mx-auto min-h-[100px] flex justify-center">
        <TypingText
          text="I craft thoughtful digital experiences with clean code and elegant design. Focused on building products that make a difference."
          delay={30}
          repeat={false}
          smooth={true}
          cursor={null}
        />
      </div>
    </div>
  );
};

// TechMarquee — Infinite scrolling tech stack banner
// To add an icon: place the image file in /public/icons/ and set the `img` field.

interface TechItem {
  name: string;
  /** Path to the icon image, e.g. "/icons/react.svg" — leave empty to keep placeholder */
  img: string;
  /** Official website URL — opens in a new tab when the item is clicked */
  url: string;
}

interface TechGroup {
  label: string;
  items: TechItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const techGroups: TechGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React",      img: "/icons/react-native.svg", url: "https://react.dev" },
      { name: "Next.js",    img: "/icons/next.js.png",      url: "https://nextjs.org" },
      { name: "TypeScript", img: "/icons/typescript.svg",   url: "https://www.typescriptlang.org" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Flutter", img: "/icons/flutter.svg", url: "https://flutter.dev" },
      { name: "Dart",    img: "/icons/dart.svg",    url: "https://dart.dev" },
      { name: "Java",    img: "/icons/java.svg",    url: "https://www.java.com" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "PHP",        img: "/icons/php.png",        url: "https://www.php.net" },
      { name: "Laravel",    img: "/icons/laravel.png",    url: "https://laravel.com" },
      { name: "PostgreSQL", img: "/icons/postgresql.png", url: "https://www.postgresql.org" },
      { name: "Firebase",   img: "/icons/firebase1.svg",  url: "https://firebase.google.com" },
    ],
  },
];

// ─── Placeholder shown when no img is provided ────────────────────────────────

const IconPlaceholder = ({ name }: { name: string }) => (
  <div className="tech-marquee__placeholder" title={name}>
    <span>{name.slice(0, 2).toUpperCase()}</span>
  </div>
);

// ─── Component ───────────────────────────────────────────────────────────────

export const TechMarquee = () => {
  const track = (
    <>
      {techGroups.map((group, gi) => (
        <div key={gi} className="tech-marquee__group">

          {/* Label centered above the icons row */}
          <span className="tech-marquee__label">{group.label}</span>

          {/* Icons row */}
          <div className="tech-marquee__icons-row">
            {group.items.map((item, ii) => (
              <a
                key={ii}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-marquee__item"
                title={`Visit ${item.name} website`}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="tech-marquee__icon-img"
                  />
                ) : (
                  <IconPlaceholder name={item.name} />
                )}
                <span className="tech-marquee__item-name">{item.name}</span>
              </a>
            ))}
          </div>

        </div>
      ))}
      {/* Gap between repeated tracks */}
      <div className="tech-marquee__spacer" />
    </>
  );

  return (
    <div className="tech-marquee">
      <div className="tech-marquee__fade-left" />
      <div className="tech-marquee__track">
        <div className="tech-marquee__inner">{track}</div>
        <div className="tech-marquee__inner" aria-hidden="true">{track}</div>
      </div>
      <div className="tech-marquee__fade-right" />
    </div>
  );
};

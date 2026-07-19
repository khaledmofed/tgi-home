interface SectionEyebrowProps {
  eyebrow: string;
  title: string;
  desc?: string;
  /** Heading level for `title` — callers set this so each page keeps a real,
   *  non-repeating h1→h2→h3 hierarchy instead of copying the source site's
   *  heading-level-as-styling-hook pattern. */
  level?: 2 | 3 | 4;
  align?: "center" | "left";
  className?: string;
  /** Extra class on the title element itself — for the rare section (e.g.
   *  "Your Dashboard") that the source site sets in hero-scale type instead
   *  of the shared section-title size. */
  titleClassName?: string;
}

export function SectionEyebrow({
  eyebrow,
  title,
  desc,
  level = 2,
  align = "center",
  className,
  titleClassName,
}: SectionEyebrowProps) {
  const Heading = `h${level}` as "h2" | "h3" | "h4";
  return (
    <div className={["section-head", align === "left" ? "align-left" : "", className].filter(Boolean).join(" ")}>
      <span className="eyebrow">{eyebrow}</span>
      <Heading className={["section-title", titleClassName].filter(Boolean).join(" ")}>{title}</Heading>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}
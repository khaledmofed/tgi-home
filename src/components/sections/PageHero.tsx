import type { ReactNode } from "react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import { HeroVideoBackground } from "./HeroVideoBackground";
import styles from "./HeroVideo.module.css";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** Reusable inner-page hero (video bg + eyebrow/H1/subtitle/CTAs) used by
 *  Products and How — About intentionally does not use this (see AboutIntroSection). */
export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className={styles.wrap} style={{ minHeight: 460 }} aria-label={title}>
      <HeroVideoBackground />
      <div className={["container", styles.content].join(" ")}>
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className={styles.title} style={{ fontSize: "var(--fs-h2)" }}>
            {title}
          </h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.actions}>
            {children ?? (
              <>
                <Button to="/products#products" variant="primary">
                  Explore Gold Models
                </Button>
                <Button to="/contact" variant="secondary">
                  Contact Us
                </Button>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
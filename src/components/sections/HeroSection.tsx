import { homeHero } from "../../data/homeContent";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";
import { HeroVideoBackground } from "./HeroVideoBackground";
import { StatisticsBar } from "./StatisticsBar";
import styles from "./HeroVideo.module.css";

export function HeroSection() {
  return (
    <section className={styles.wrap} aria-label="Introduction">
      <HeroVideoBackground />
      <div className={["container", styles.content].join(" ")}>
        <ScrollReveal>
          <span className="eyebrow">{homeHero.eyebrow}</span>
          <h1 className={styles.title}>{homeHero.title}</h1>
          <p className={styles.subtitle}>{homeHero.subtitle}</p>
          <div className={styles.actions}>
            <Button to="/products#products" variant="primary">
              Explore Gold Models
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </ScrollReveal>

        {/* Measured gap on the live site: ~294px of open video between the
            CTA row and the stats bar — a deliberate breathing-room beat,
            not a layout accident. */}
        <div style={{ marginTop: "4rem" }}>
          <StatisticsBar />
        </div>
      </div>
    </section>
  );
}

import { sellOrDeliverSection } from "../../data/productsContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import cardStyles from "../ui/Card.module.css";
import styles from "./SellOrDeliverSection.module.css";

export function SellOrDeliverSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={sellOrDeliverSection.eyebrow} title={sellOrDeliverSection.title} level={2} />
        <div className={cardStyles.grid2}>
          {sellOrDeliverSection.options.map((option, i) => (
            <ScrollReveal key={option.title} delay={i * 0.08} className={[cardStyles.card, cardStyles.padded].join(" ")}>
              <div className={styles.header}>
                <h3 className="card-title" style={{ marginBottom: 0 }}>
                  {option.title}
                </h3>
                <span className={styles.tag}>{option.tag}</span>
              </div>
              <p className="card-desc">{option.desc}</p>
              {option.bullets.length > 0 && (
                <ul className="checklist">
                  {option.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </ScrollReveal>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-8)", textAlign: "center" }}>
          <Button to="/products#products" variant="secondary">
            Explore Gold Models
          </Button>
        </div>
      </div>
    </section>
  );
}
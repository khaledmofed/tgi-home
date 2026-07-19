import { afterPurchaseCards, afterPurchaseIntro } from "../../data/howContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import cardStyles from "../ui/Card.module.css";
import styles from "./SellOrDeliverSection.module.css";

export function AfterPurchaseSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={afterPurchaseIntro.eyebrow} title={afterPurchaseIntro.title} level={2} />
        <div className={cardStyles.grid3}>
          {afterPurchaseCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08} className={[cardStyles.card, cardStyles.padded].join(" ")}>
              <div className={styles.header}>
                <h3 className="card-title" style={{ marginBottom: 0 }}>
                  {card.title}
                </h3>
                <span className={styles.tag}>{card.tag}</span>
              </div>
              <p className="card-desc">{card.desc}</p>
              <ul className="checklist">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
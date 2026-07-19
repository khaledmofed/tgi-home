import { digitalAccessSection } from "../../data/homeContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import cardStyles from "../ui/Card.module.css";

export function GoldFeaturesSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow
          eyebrow={digitalAccessSection.eyebrow}
          title={digitalAccessSection.title}
          align="left"
          level={2}
        />
        <div className={cardStyles.grid2}>
          {digitalAccessSection.features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08} className={[cardStyles.card, cardStyles.padded].join(" ")}>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-desc">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
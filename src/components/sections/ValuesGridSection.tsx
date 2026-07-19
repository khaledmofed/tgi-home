import { valuesSection } from "../../data/aboutContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import cardStyles from "../ui/Card.module.css";
import styles from "./ValuesGridSection.module.css";

export function ValuesGridSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={valuesSection.eyebrow} title={valuesSection.title} desc={valuesSection.desc} level={2} />
        <div className={styles.grid}>
          {valuesSection.values.map((value, i) => (
            <ScrollReveal key={value} delay={i * 0.05} className={[cardStyles.card, styles.item].join(" ")}>
              {value}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
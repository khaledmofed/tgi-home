import { referralSection } from "../../data/howContent";
import { ScrollReveal } from "../ui/ScrollReveal";
import styles from "./ReferralProgramSection.module.css";

export function ReferralProgramSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal className={styles.imageWrap}>
            <img src={referralSection.image} alt="TGI International referral program" loading="lazy" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="eyebrow">{referralSection.eyebrow}</span>
            <h2 className="section-title">{referralSection.title}</h2>
            <p className="section-desc">{referralSection.desc}</p>

            <div style={{ marginTop: "var(--space-5)" }}>
              {referralSection.steps.map((step) => (
                <div className={styles.step} key={step.index}>
                  <span className={styles.stepIndex}>{step.index}</span>
                  <p className="card-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
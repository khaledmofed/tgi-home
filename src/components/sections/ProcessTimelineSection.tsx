import { Fragment } from "react";
import { processIntro, processSteps } from "../../data/howContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { StepBadge } from "../ui/StepBadge";
import { ScrollReveal } from "../ui/ScrollReveal";
import cardStyles from "../ui/Card.module.css";
import styles from "./ProcessTimelineSection.module.css";

/** The 7-step vertical connected timeline from /how — numbered pill badges
 *  joined by a vertical connector line. */
export function ProcessTimelineSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={processIntro.eyebrow} title={processIntro.title} desc={processIntro.desc} level={2} />
        <div className={styles.timeline}>
          {processSteps.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && <div className={styles.connector} aria-hidden="true" />}
              <ScrollReveal delay={i * 0.05} className={styles.step}>
                <StepBadge>{`${i + 1}. Step`}</StepBadge>
                <div className={[cardStyles.card, styles.card].join(" ")} style={{ marginTop: "var(--space-3)" }}>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
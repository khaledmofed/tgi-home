import { howItWorksPreview } from "../../data/homeContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import cardStyles from "../ui/Card.module.css";

export function HowItWorksPreview() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow eyebrow={howItWorksPreview.eyebrow} title={howItWorksPreview.title} level={2} />
        <div className={cardStyles.grid3}>
          {howItWorksPreview.steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08} className={[cardStyles.card, cardStyles.padded].join(" ")}>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-desc">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-6)" }}>
          <Button to="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
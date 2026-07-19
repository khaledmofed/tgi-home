import { paymentMethodsSection } from "../../data/productsContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import styles from "./PaymentMethodsSection.module.css";

export function PaymentMethodsSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionEyebrow
          eyebrow={paymentMethodsSection.eyebrow}
          title={paymentMethodsSection.title}
          desc={paymentMethodsSection.desc}
          align="left"
          level={2}
        />
        <div className={styles.grid}>
          <ScrollReveal>
            {paymentMethodsSection.steps.map((step) => (
              <div className={styles.row} key={step.index}>
                <span className={styles.rowIndex}>{step.index}</span>
                <div>
                  <p className={styles.rowTitle}>{step.title}</p>
                  <p className={styles.rowDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ marginTop: "var(--space-6)" }}>
              <Button to="/products#products" variant="primary">
                Explore Gold Models
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className={styles.imageWrap}>
            <img src={paymentMethodsSection.image} alt="Supported payment methods illustration" loading="lazy" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
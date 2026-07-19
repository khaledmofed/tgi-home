import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import styles from "./FinalCtaSection.module.css";

interface FinalCtaSectionProps {
  eyebrow: string;
  title: string;
  contactLabel?: string;
}

/** The "Your Golden Future awaits You" band that closes every page except Contact/legal pages. */
export function FinalCtaSection({
  eyebrow,
  title,
  contactLabel = "Contact Us",
}: FinalCtaSectionProps) {
  return (
    <section className="section-pad" style={{ marginBottom: "3rem" }}>
      <div className={["container", styles.wrap].join(" ")}>
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <div className={styles.actions}>
            <Button to="/products#products" variant="primary">
              Explore Gold Models
            </Button>
            <Button to="/contact" variant="secondary">
              {contactLabel}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

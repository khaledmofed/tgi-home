import { backofficeSection } from "../../data/homeContent";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";
import styles from "./BackofficeSection.module.css";

/** Static marketing screenshot of the backoffice UI, not a functional
 *  dashboard — matches the source site's public-page treatment exactly. */
export function BackofficeSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal>
            <SectionEyebrow
              eyebrow={backofficeSection.eyebrow}
              title={backofficeSection.title}
              desc={backofficeSection.desc}
              align="left"
              level={2}
              titleClassName={styles.bigTitle}
            />
            <ul className={styles.list}>
              {backofficeSection.items.map((item) => (
                <li className={styles.item} key={item.index}>
                  <span className={styles.itemIndex}>{item.index}</span>
                  <span className={styles.itemLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Button to="/products#products" variant="primary">
                Explore Gold Models
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className={styles.imageWrap}>
            <img
              src={backofficeSection.image}
              alt="TGI International backoffice dashboard preview"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

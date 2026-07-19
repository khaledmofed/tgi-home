import type { GoldModel } from "../../data/goldModels";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./GoldModelCard.module.css";
import cardStyles from "./Card.module.css";

interface GoldModelCardProps {
  model: GoldModel;
  variant?: "compact" | "detailed";
  delay?: number;
}

export function GoldModelCard({ model, variant = "compact", delay = 0 }: GoldModelCardProps) {
  return (
    <ScrollReveal delay={delay} className={variant === "detailed" ? cardStyles.card : undefined}>
      <div className={styles.card}>
        {variant === "detailed" && <span className={styles.index}>{model.index}</span>}
        <div className={styles.imageWrap}>
          <img src={model.image} alt={`${model.title} TGI International gold model`} loading="lazy" />
        </div>
        <h4 className={styles.title}>{model.title}</h4>
        <span className={styles.pill}>{model.discountLabel}</span>

        {variant === "detailed" && (
          <dl className={styles.detailed}>
            <div className={styles.specRow}>
              <dt className={styles.specLabel}>Delivery after</dt>
              <dd className={styles.specValue}>{model.spec.deliveryAfter}</dd>
            </div>
            <div className={styles.specRow}>
              <dt className={styles.specLabel}>Discounts</dt>
              <dd className={styles.specValue}>{model.spec.discounts}</dd>
            </div>
            <div className={styles.specRow}>
              <dt className={styles.specLabel}>Storage</dt>
              <dd className={styles.specValue}>{model.spec.storage}</dd>
            </div>
            <div className={styles.specRow}>
              <dt className={styles.specLabel}>Delivery</dt>
              <dd className={styles.specValue}>{model.spec.delivery}</dd>
            </div>
            <div className={styles.specRow}>
              <dt className={styles.specLabel}>Cancellable</dt>
              <dd className={styles.specValue}>{model.spec.cancellable}</dd>
            </div>
          </dl>
        )}
      </div>
    </ScrollReveal>
  );
}
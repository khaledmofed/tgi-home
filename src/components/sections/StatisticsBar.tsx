import { trackRecordCaption, trackRecordStats } from "../../data/goldModels";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { ScrollReveal } from "../ui/ScrollReveal";
import styles from "./StatisticsBar.module.css";

interface StatisticsBarProps {
  className?: string;
}

/** The "Track Record" stats bar — appears on Home (inside the hero) and About. */
export function StatisticsBar({ className }: StatisticsBarProps) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <p className={styles.caption}>{trackRecordCaption}</p>
      <ScrollReveal className={styles.row} as="div">
        {trackRecordStats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <span className={styles.value}>
              <AnimatedCounter prefix={stat.prefix} value={stat.value} suffix={stat.suffix} noSeparator={stat.noSeparator} />
            </span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </ScrollReveal>
    </div>
  );
}
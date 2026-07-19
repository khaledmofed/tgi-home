import styles from "./StepBadge.module.css";

interface StepBadgeProps {
  children: string;
  className?: string;
}

export function StepBadge({ children, className }: StepBadgeProps) {
  return <span className={[styles.badge, className].filter(Boolean).join(" ")}>{children}</span>;
}
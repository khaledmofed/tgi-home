import { useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  prefix?: string;
  value: number;
  suffix?: string;
  /** Skip thousands-separator grouping — for values like a year that aren't a count. */
  noSeparator?: boolean;
}

/** Count-up number, e.g. "+ 50,000" — triggers once the element scrolls into view. */
export function AnimatedCounter({ prefix, value, suffix, noSeparator }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useAnimatedCounter(value, inView);

  return (
    <span ref={ref}>
      {prefix}
      {noSeparator ? count : count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
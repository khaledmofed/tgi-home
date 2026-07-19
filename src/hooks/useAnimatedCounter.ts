import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Counts from 0 up to `target` once `start` becomes true. Mirrors the
 * jquery-numerator count-up behavior seen on the live site's stats bar.
 * Jumps straight to the final value when reduced motion is requested.
 */
export function useAnimatedCounter(target: number, start: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  const reducedMotion = useReducedMotion();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (reducedMotion) {
      setValue(target);
      return;
    }

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration, reducedMotion]);

  return value;
}
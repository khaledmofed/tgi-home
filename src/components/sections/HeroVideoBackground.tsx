import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./HeroVideo.module.css";

/**
 * The same looping background video used behind the hero on Home, Products
 * and How (confirmed via the live-site audit — About does not use it).
 * Skips the video entirely on small screens / reduced motion and falls back
 * to the static poster frame, per the task's mobile-bandwidth and
 * accessibility requirements.
 */
export function HeroVideoBackground() {
  const reducedMotion = useReducedMotion();
  const isTabletUp = useMediaQuery("(min-width: 640px)");
  const showVideo = isTabletUp && !reducedMotion;

  return (
    <>
      {showVideo ? (
        <video
          className={styles.video}
          src="/videos/hero-background.mp4"
          poster="/images/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : (
        <img className={styles.video} src="/images/hero-poster.webp" alt="" aria-hidden="true" loading="eager" />
      )}
      <div className={styles.scrim} aria-hidden="true" />
    </>
  );
}
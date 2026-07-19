import styles from "./Logo.module.css";

interface LogoProps {
  /** Approximates the flat white mark in brand gold — the source assets
   *  are flat white, so this is a CSS filter tint, not a true gold asset. */
  gold?: boolean;
  /** false = just the crown-and-shield mark, no "TGI INTERNATIONAL" wordmark. */
  showWordmark?: boolean;
  /** "sm" = header/footer lockup. "lg" = bigger mobile-menu lockup. */
  size?: "sm" | "lg";
}

/**
 * The real TGI International lockup, extracted from the site's own inline
 * SVG markup (public/images/logo-mark.svg / logo-icon.svg) — not a redrawn
 * approximation.
 */
export function Logo({ gold = false, showWordmark = true, size = "sm" }: LogoProps) {
  return (
    <img
      src={showWordmark ? "/images/logo-mark.svg" : "/images/logo-icon.svg"}
      alt="TGI International"
      className={[styles.logo, size === "lg" ? styles.lg : styles.sm, gold ? styles.gold : ""].join(" ")}
    />
  );
}

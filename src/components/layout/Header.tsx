import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "../ui/Button";
import { env } from "../../config/env";
import styles from "./Header.module.css";

/**
 * Not sticky — confirmed via computed styles on the live site
 * (`position: relative`), so the header scrolls away with the page.
 *
 * Uses its own wide layout (measured: 96px side padding, ~1728px content
 * width at 1920px viewport) rather than the shared `.container` — the
 * shared container's 1280px cap was leaving ~320px of dead margin on each
 * side at desktop widths, which is what made the header look compressed
 * toward the center compared to the reference.
 */
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link
            to="/"
            aria-label="TGI International home"
            style={{ display: "flex" }}
          >
            <Logo />
          </Link>
        </div>

        <DesktopNavigation />

        <div className={styles.right}>
          {/* Plain text link, not a button — matches the source header
              exactly (only Contact is a bordered button there). */}
          <a
            href={env.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.loginLink}
          >
            Login
          </a>
          <Button
            to="/contact"
            variant="secondary"
            size="sm"
            className={styles.contactButton}
          >
            Contact
          </Button>
          <div className={styles.langDesktop}>
            <LanguageSelector theme="dark" />
          </div>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

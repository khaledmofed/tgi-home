import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "../ui/Button";
import styles from "./CookieConsent.module.css";

type Consent = "all" | "necessary" | null;

const STORAGE_KEY = "tgi-cookie-consent";

/**
 * Visual recreation of the Cookiebot-style banner observed on the live site
 * ("This website uses cookies" + Deny / Allow selection / Allow all). This
 * project ships no analytics or third-party trackers, so the choice is only
 * ever persisted locally (localStorage) — there is nothing real to gate.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored === "all" || stored === "necessary") {
      setConsent(stored);
    } else {
      setBannerOpen(true);
    }
  }, []);

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setBannerOpen(false);
  }

  if (!bannerOpen) {
    return (
      <button
        type="button"
        className={styles.reopen}
        aria-label="Open cookie settings"
        onClick={() => setBannerOpen(true)}
      >
        <Cookie size={18} aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <p className={styles.title}>This website uses cookies</p>
      <p className={styles.text}>
        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.
        This demo site does not ship analytics or advertising scripts — your choice is stored locally only.
      </p>
      <div className={styles.actions}>
        <Button variant="secondary" onClick={() => choose("necessary")}>
          Deny
        </Button>
        <Button variant="secondary" onClick={() => choose("necessary")}>
          Allow selection
        </Button>
        <Button variant="primary" onClick={() => choose("all")}>
          Allow all
        </Button>
      </div>
      {consent && <span className="sr-only">Current preference: {consent}</span>}
    </div>
  );
}
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { primaryNav } from "../../data/navigation";
import { env } from "../../config/env";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { ExternalLinkButton } from "../ui/ExternalLinkButton";
import { LanguageSelector } from "./LanguageSelector";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./MobileNavigation.module.css";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={reducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.topBar}>
              <Logo size="lg" />
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <LanguageSelector theme="light" />
                <button
                  type="button"
                  ref={closeButtonRef}
                  className={styles.closeButton}
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className={styles.body}>
              <ul className={styles.navList}>
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [styles.navLink, isActive ? styles.navLinkActive : ""].filter(Boolean).join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <ExternalLinkButton url={env.loginUrl} variant="outlineDark">
                  Login
                </ExternalLinkButton>
                <Button to="/contact" variant="dark" fullWidth onClick={() => setOpen(false)}>
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
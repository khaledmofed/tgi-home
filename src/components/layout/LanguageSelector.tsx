import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { languages } from "../../data/languages";
import { env } from "../../config/env";
import styles from "./LanguageSelector.module.css";

interface LanguageSelectorProps {
  theme?: "dark" | "light";
}

/**
 * Recreates the source site's Weglot-style flag dropdown. Only English has
 * real content, so unless VITE_ENABLE_TRANSLATIONS=true every other
 * language renders visibly disabled instead of silently doing nothing.
 */
export function LanguageSelector({ theme = "dark" }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("en");
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const activeLang = languages.find((lang) => lang.code === active) ?? languages[0];

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {activeLang.code.toUpperCase()}
        <ChevronRight size={14} className={[styles.chevron, open ? styles.chevronOpen : ""].join(" ")} />
      </button>

      {open && (
        <ul
          className={[styles.menu, theme === "light" ? styles.menuLight : ""].filter(Boolean).join(" ")}
          role="listbox"
          aria-label="Select language"
        >
          {languages.map((lang) => {
            const disabled = !env.translationsEnabled && lang.code !== "en";
            const isActive = lang.code === active;
            return (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  aria-disabled={disabled}
                  disabled={disabled}
                  className={[styles.option, isActive ? styles.optionActive : ""].filter(Boolean).join(" ")}
                  onClick={() => {
                    if (disabled) return;
                    setActive(lang.code);
                    setOpen(false);
                  }}
                >
                  <span className={styles.flag} aria-hidden="true">
                    {lang.flag}
                  </span>
                  {lang.label}
                  {disabled && <span className={styles.unavailableTag}>Unavailable</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
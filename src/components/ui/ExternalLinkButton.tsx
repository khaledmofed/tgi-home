import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { isInternalPath } from "../../config/env";
import styles from "./Button.module.css";

interface ExternalLinkButtonProps {
  url: string;
  variant?: "primary" | "secondary" | "gold" | "dark" | "outlineDark";
  children: ReactNode;
  className?: string;
}

/**
 * Centralizes the "open externally in a new tab" pattern used for the
 * private Login/Register/Dashboard portals (matches the source site's
 * Login button, which opens `my.tgi.gold` with target="_blank"). If the
 * configured URL happens to be an internal path (e.g. VITE_CONTACT_URL set
 * to "/contact"), it renders a same-tab router Link instead.
 */
export function ExternalLinkButton({ url, variant = "secondary", children, className }: ExternalLinkButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (isInternalPath(url)) {
    return (
      <Link to={url} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  );
}
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "gold" | "dark" | "outlineDark";

interface CommonProps {
  variant?: Variant;
  /** "sm" matches the live header's compact Contact button; default ("md")
   *  matches the larger hero/section CTA buttons — these are two distinct
   *  measured sizes on the source site, not one button stretched two ways. */
  size?: "sm" | "md";
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

interface AsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  to?: undefined;
  href?: undefined;
}

interface AsInternalLink extends CommonProps {
  to: string;
  href?: undefined;
  onClick?: () => void;
}

interface AsExternalLink extends CommonProps {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

type ButtonProps = AsButton | AsInternalLink | AsExternalLink;

/** The site's single button primitive — matches the source site's monochrome
 *  primary/secondary buttons plus the gold-filled variant reserved for the
 *  contact-wizard "NEXT" button. */
export function Button(props: ButtonProps) {
  const { variant = "secondary", size = "md", fullWidth, children, className } = props;
  const classes = [
    styles.button,
    styles[variant],
    size === "sm" ? styles.sm : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props as AsExternalLink;
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  const buttonProps = props as AsButton;
  const { type = "button", ...rest } = buttonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
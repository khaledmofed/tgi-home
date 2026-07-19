import { Link } from "react-router-dom";
import { footerDisclaimer, footerLinks } from "../../data/footerLinks";
import { Logo } from "../ui/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <nav aria-label="Legal">
            <ul className={styles.links}>
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <span className={styles.copyright}>All rights reserved © {year}</span>
              </li>
            </ul>
          </nav>

          <Link to="/" aria-label="TGI International home" className={styles.logoLink}>
            <Logo />
          </Link>

          <p className={styles.disclaimer}>{footerDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
import { NavLink } from "react-router-dom";
import { primaryNav } from "../../data/navigation";
import styles from "./DesktopNavigation.module.css";

export function DesktopNavigation() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul style={{ display: "flex", gap: "inherit", listStyle: "none" }}>
        {primaryNav.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => [styles.link, isActive ? styles.linkActive : ""].filter(Boolean).join(" ")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on every route change (SPA navigation doesn't do this automatically). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
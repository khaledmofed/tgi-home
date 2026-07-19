import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultSeo, seoByRoute } from "../../config/seo";

const SITE_NAME = "TGI International";
const SITE_URL = "https://www.tgi.gold";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight per-route metadata manager for this Vite SPA — no
 * react-helmet-class dependency needed since this is the only place
 * document.title/meta tags are touched.
 */
export function Seo() {
  const location = useLocation();

  useEffect(() => {
    const route = seoByRoute[location.pathname] ?? defaultSeo;
    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = route.title;
    setMeta("description", route.description);
    setMeta("og:title", route.title, "property");
    setMeta("og:description", route.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", `${SITE_URL}/images/hero-poster.webp`, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", route.title);
    setMeta("twitter:description", route.description);
    setCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}
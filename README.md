# TGI Gold Website (React Recreation)

A standalone React recreation of the public marketing site at [tgi.gold](https://www.tgi.gold/) —
"TGI International," a physical-gold discount product. Built from a full live-site audit
(Playwright, all 7 public pages, desktop/tablet/mobile, DOM/CSS inspection) rather than guesswork.

**Project path:** `E:\Laravel Project\Anas\golden\tgi-gold-website`

This project is intentionally standalone: it does not import or depend on any of the other
projects in the parent `golden` folder, and it does not implement any private
login/backoffice/dashboard functionality — those are redirect-only, see [Login, Register &
Dashboard](#login-register--dashboard-redirects) below.

## Tech stack

- **Vite + React 19 + TypeScript** — build tooling and UI framework.
- **React Router v6** (`react-router-dom`) — client-side routing, matching the live site's URL structure.
- **Framer Motion** — scroll-reveal entrance animations, the mobile menu transition, the language dropdown. Covers every animation observed on the source site, so GSAP was not needed and was left out to avoid an unnecessary dependency.
- **lucide-react** — icons (menu/close, chevrons, checkmarks).
- Plain **CSS custom properties + CSS Modules** — no Tailwind/UI-kit, per the project's own design tokens (measured from the live site's computed styles: `#030303` background, custom "Mundial" heading font, `#B0B0B0` muted text, `4px` button radius, etc).
- No `react-helmet`-class dependency — `src/components/ui/Seo.tsx` is a ~40-line component that sets `document.title`/meta tags per route directly.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks (tsc -b) then builds to dist/
npm run preview   # serves the production build locally
```

## Environment variables

Copy `.env.example` to `.env` (already done for local dev with safe placeholders) and adjust as needed:

| Variable | Purpose | Default |
|---|---|---|
| `VITE_LOGIN_URL` | Where the "Login" button sends users (opens in a new tab, `rel="noopener noreferrer"`) | `https://example.com/login` |
| `VITE_USER_DASHBOARD_URL` | Reserved for a future dashboard entry point — **no current UI links to this** (see below) | `https://example.com/dashboard` |
| `VITE_REGISTER_URL` | Reserved for a future register entry point — **no current UI links to this** (see below) | `https://example.com/register` |
| `VITE_CONTACT_URL` | Where "Contact" buttons go. Internal path by default; can be an absolute URL | `/contact` |
| `VITE_CONTACT_API_URL` | Real backend endpoint for the contact form. Empty = demo-only submission | *(empty)* |
| `VITE_ENABLE_TRANSLATIONS` | Master switch for the language selector's non-English options | `false` |

All of these are read through the single typed module `src/config/env.ts` — no component reads
`import.meta.env` directly, so there is exactly one place to change if a URL needs to move.

`.env` is git-ignored; `.env.example` is the committed template with safe placeholder values only
(no secrets).

## Login, Register & Dashboard redirects

The live site only exposes a **Login** link in its header/mobile menu (opens `my.tgi.gold/login`
in a new tab) — there is no visible "Register" or "Dashboard" button anywhere on the public site
(registration happens implicitly via a personal referral link after a purchase; the dashboard is
only reached after authenticating on the private backoffice).

Per the task's explicit restriction, **this project does not build, copy, or link to the private
backoffice/dashboard/login UI**. Concretely:

- The **Login** button/link uses `ExternalLinkButton` → `env.loginUrl`, opens in a new tab.
- `VITE_USER_DASHBOARD_URL` and `VITE_REGISTER_URL` are declared, typed, and exported from
  `env.ts` for future use, but **no current button or link references them** — there was nothing
  on the live site to justify inventing that UI.
- If a real "Register" or "Dashboard" entry point should exist later, wire it the same way Login
  is wired: `<ExternalLinkButton url={env.registerUrl}>...</ExternalLinkButton>`.

## Routes

Routes mirror the live site's actual slugs (discovered via the audit, not invented):

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero video, stats, feature grid, explainer video, gold models, dashboard teaser, final CTA |
| `/products` | Products | Also handles the `#products` in-page anchor used by "Explore Gold Models" CTAs site-wide |
| `/how` | How It Works | 7-step vertical timeline, after-purchase functions, referral program |
| `/about` | About | **No video hero** — a static image+text panel, confirmed distinct from Products/How |
| `/contact` | Contact | **No page hero** — straight into the 3-step wizard card |
| `/privacy-policy` | Privacy Policy | Verbatim legal text captured via `innerText`, not paraphrased |
| `/legal-notice` | Legal Notice | Verbatim legal text captured via `innerText`, not paraphrased |
| `*` | 404 | Not present on the source site; added since a real SPA needs one |

All internal navigation is client-side (React Router `Link`/`NavLink`) — no full page reloads.

## Deployment: SPA route fallback

Because this is a client-side-routed SPA, the web server must serve `index.html` for any path
it doesn't recognize (otherwise refreshing `/products` 404s). Fallback config is included for the
three most common targets — **use whichever one matches your actual host, not all three**:

- **Apache / cPanel** → `public/.htaccess` (copied to `dist/.htaccess` on build)
- **Vercel** → `vercel.json` (rewrites at the project root)
- **Netlify** → `public/_redirects` (copied to `dist/_redirects` on build)

`npm run preview` (Vite's own preview server) already handles SPA fallback out of the box, so it
won't catch a missing server-side rewrite — test against your actual target host before shipping.

## Connecting a real contact API

The contact form (`src/components/sections/contact/ContactWizard.tsx`) checks
`env.contactApiUrl` on submit:

- **Empty** (the default): a local demo path runs — a short artificial delay, then a success
  message. **No entered data is logged, stored, or transmitted anywhere** in this mode.
- **Set**: it does `fetch(env.contactApiUrl, { method: 'POST', headers: {'Content-Type':
  'application/json'}, body: JSON.stringify(data) })` and reflects the response as
  success/error.

To go live, set `VITE_CONTACT_API_URL` to a real endpoint — no other code changes needed. The
live source site's own Privacy Policy (reproduced verbatim on `/privacy-policy`) documents that
it uses Formspree/Zapier/SendLayer for this — this project doesn't call any of those, since
that would mean submitting real data to TGI International's actual production service.

## Language selector

The live site uses Weglot with ~15 languages. This project ships the full selector UI (flag
list, dropdown, keyboard-operable) with real English content only. Controlled by
`VITE_ENABLE_TRANSLATIONS` (default `false`): every non-English row renders visibly
**disabled** (`aria-disabled`, dimmed, no click handler) rather than pretending to switch
languages — see `src/components/layout/LanguageSelector.tsx`. This is a documented limitation,
not a silent fake.

## Asset organization

```
public/
  images/    downloaded .webp product photos, posters, dashboard mockup, favicon.png
  videos/    hero-background.mp4, explainer-en.mp4 (downloaded from the live site)
  .htaccess, _redirects   SPA fallback (see above)
src/
  assets/
    fonts/   self-hosted Mundial-*.ttf (downloaded from tgi.gold) + Roboto-*.woff2
    icons/   (reserved; current icon needs are covered by lucide-react + inline SVG logo)
```

Large static images/video referenced by URL path live in `public/`; only bundler-imported assets
(fonts) live in `src/assets/`, to avoid two competing homes for the same files.

The header/footer/mobile-menu logo is an **original crown-over-shield "TG" monogram**, redrawn
from scratch — not a copy of the source site's proprietary SVG path data — since the task
explicitly allows a "visually similar original alternative" where reusing the exact asset isn't
appropriate. Language-flag icons use emoji flags instead of ~15 downloaded flag images, documented
here as an intentional simplification.

## Known differences from the reference site

Reported honestly, per the task's instruction not to claim pixel-perfect accuracy:

- **Logo mark**: an original redrawn monogram, not the exact source SVG (see above).
- **Language selector**: UI-complete but only English has real content (see above).
- **Cookie banner**: visually recreated (Cookiebot-style), but backed by `localStorage` only —
  no real Cookiebot/analytics integration, since this project ships no analytics to gate.
- **Contact form backend**: demo-only by default (see above) — never calls the source site's
  real Formspree/Zapier/SendLayer pipeline.
- **Fonts**: self-hosted copies of the same font files served by the live site (`Mundial-Thin`,
  `Mundial-DemiBold`, Roboto), so metrics should match closely, but no font license was verified
  beyond "downloadable from the live site's own `wp-content/uploads`."
- **Country/dial-code list** on the contact form is a curated ~65-country list (not the full
  ISO 3166 set) — enough to cover the vast majority of real users, documented in
  `src/data/countries.ts`.
- **Text rendering**: on some Windows/Chromium setups, thin light-colored text on the near-black
  background can show faint ClearType subpixel color fringing in screenshots. Verified via
  computed styles that the actual CSS colors are correct (plain white/gray, no blue) — this is a
  subpixel-antialiasing rendering characteristic, not a styling bug.
- **Scroll-reveal animation timing** is a close approximation (Framer Motion `whileInView`,
  ~0.6s ease-out) of the source site's Elementor entrance animations, not a frame-for-frame match.
- Minor spacing/proportion differences may remain versus the live site at some breakpoints;
  the build was checked at 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024, 390×844, but a
  full pixel-diff pass was not performed.

## Accessibility

- Keyboard navigation works throughout; the mobile menu and language dropdown both close on
  `Escape` and manage focus (close button receives focus when the mobile menu opens).
- Body scroll is locked while the mobile menu is open (`useLockBodyScroll`).
- `prefers-reduced-motion: reduce` disables scroll-reveal transforms, the autoplaying hero video
  (falls back to its static poster), and CSS transition durations globally.
- Decorative images use empty `alt=""`; informative images (gold model photos, dashboard
  mockup, about/referral illustrations) have descriptive `alt` text.
- Every form field in the contact wizard has an associated `<label>`, `aria-invalid`, and an
  inline error message wired with `role="alert"`.

## What wasn't tested against production

Per the task's restrictions, none of the following were exercised against the real
`tgi.gold`/`my.tgi.gold` services — only inspected read-only or built as local-only demos:

- No real account was created and no real login was attempted.
- The contact wizard was tested end-to-end in this project's own demo mode only; it was never
  pointed at the live site's real Formspree/Zapier/SendLayer pipeline.
- No gold purchase, buyback, or delivery flow exists in this project (out of scope — the public
  site itself doesn't expose these as anonymous actions either; they require backoffice login).
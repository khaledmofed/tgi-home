/**
 * Central, typed access point for build-time environment variables.
 * No component should read `import.meta.env` directly — import `env` from
 * here instead, so every external redirect target lives in exactly one place.
 */

interface AppEnv {
  /** Private backoffice login portal. Login always opens this in a new tab. */
  loginUrl: string;
  /** Private user dashboard. Not linked from any current UI (see README). */
  dashboardUrl: string;
  /** Referral-based registration entry point. Not linked from any current UI (see README). */
  registerUrl: string;
  /** Contact destination — an internal route by default, but can be an absolute URL. */
  contactUrl: string;
  /** Real contact-form backend endpoint. Empty string means "use the local demo submission". */
  contactApiUrl: string;
  /** Master switch for the language selector's translated languages. */
  translationsEnabled: boolean;
}

function readString(value: string | undefined, fallback: string): string {
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

export const env: AppEnv = {
  loginUrl: readString(
    import.meta.env.VITE_LOGIN_URL,
    "https://tgi-kappa.vercel.app/login",
  ),
  dashboardUrl: readString(
    import.meta.env.VITE_USER_DASHBOARD_URL,
    "https://tgi-kappa.vercel.app/dashboard",
  ),
  registerUrl: readString(
    import.meta.env.VITE_REGISTER_URL,
    "https://tgi-kappa.vercel.app/register",
  ),
  contactUrl: readString(import.meta.env.VITE_CONTACT_URL, "/contact"),
  contactApiUrl: readString(import.meta.env.VITE_CONTACT_API_URL, ""),
  translationsEnabled: import.meta.env.VITE_ENABLE_TRANSLATIONS === "true",
};

/** True when `contactUrl` is a same-origin path rather than an absolute URL. */
export function isInternalPath(url: string): boolean {
  return url.startsWith("/") && !url.startsWith("//");
}

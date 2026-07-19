/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOGIN_URL: string;
  readonly VITE_USER_DASHBOARD_URL: string;
  readonly VITE_REGISTER_URL: string;
  readonly VITE_CONTACT_URL: string;
  readonly VITE_CONTACT_API_URL: string;
  readonly VITE_ENABLE_TRANSLATIONS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
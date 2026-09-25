/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form id, e.g. "abcdwxyz". Unset until the owners create the form. */
  readonly VITE_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

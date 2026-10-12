/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * FormSubmit endpoint: the random-string ID from the activation email
   * (preferred), or the inbox email address for the first activation submit.
   * Unset until the owners activate the form.
   */
  readonly VITE_FORMSUBMIT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

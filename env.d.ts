/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string
  readonly VITE_SCHEDULE_URL?: string
  readonly VITE_WHATSAPP?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

// / <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_URL: string
  readonly VITE_TMDB_API_KEY: string
  // Add more variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],

  app: {
    // 独自ドメイン (ikalga.net) で公開する場合は '/' のままでよい。
    // <user>.github.io/<repo>/ で公開する場合は NUXT_APP_BASE_URL=/ikalga.net/ を指定する。
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'ja' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },

  // GitHub Pages 向けの静的出力（.nojekyll / 404.html を自動生成する）
  nitro: {
    preset: 'github_pages',
  },

  // 要件 4.4: ページ遷移時のトランジション
  experimental: {
    viewTransition: true,
  },

  // コンテナ外（ホストのブラウザ）からアクセスできるようにする
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      // Windows ホストのバインドマウント経由ではファイル変更イベントが届かないため、
      // Dev Container 内ではポーリングで監視する（compose.yaml で有効化）。
      watch:
        process.env.VITE_USE_POLLING === 'true' ? { usePolling: true, interval: 300 } : undefined,
    },
  },
})

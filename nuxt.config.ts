import tailwindcss from '@tailwindcss/vite'

// 公開 URL。OGP の og:image / og:url と canonical は絶対 URL でないと効かないため、
// ビルド時にここから組み立てる。
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://ikalga.net'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],

  app: {
    // 独自ドメイン (ikalga.net) のルートで公開するため '/' 固定。
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'ja' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        // PNG のファビコンを使うので link で明示する必要がある。
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  runtimeConfig: {
    public: { siteUrl },
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

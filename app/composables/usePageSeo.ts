import { joinURL, withTrailingSlash } from 'ufo'

type PageSeoOptions = {
  /** <title> と og:title に使う */
  title: string
  /** meta description と og:description に使う */
  description: string
  /** 既定は website */
  ogType?: 'website' | 'profile' | 'article'
}

/**
 * 各ページ共通の SEO / OGP 設定。
 *
 * og:image・og:url・canonical は絶対 URL である必要があるため、
 * runtimeConfig の siteUrl と baseURL から組み立てる。
 * OGP 画像は全ページ共通で public/og.png を使う（生成元は docs/og-image/og.html）。
 */
export function usePageSeo({ title, description, ogType = 'website' }: PageSeoOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()

  // GitHub Pages は about/index.html を配信するため、正規 URL は末尾スラッシュ付き。
  // 付けないとリンクを踏んだときに 301 を1回挟むことになる。
  const url = withTrailingSlash(joinURL(config.public.siteUrl, config.app.baseURL, route.path))
  const image = joinURL(config.public.siteUrl, config.app.baseURL, 'og.png')

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType,
    ogUrl: url,
    ogSiteName: 'ikalga.net',
    ogLocale: 'ja_JP',
    ogImage: image,
    ogImageType: 'image/png',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: 'ikalga.net — ひとの役に立ってなんぼ。',
    twitterCard: 'summary_large_image',
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}

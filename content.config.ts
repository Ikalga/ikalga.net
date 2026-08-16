import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // 経歴などの長文コンテンツを Markdown で管理し、ビルド時に HTML 化する
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
})

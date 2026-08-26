import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // 経歴などの長文コンテンツを Markdown で管理し、ビルド時に HTML 化する
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        // 職務経歴書の最終更新日（未設定なら表示しない）
        updated: z.string().optional(),
      }),
    }),
  },
})

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const message = computed(() =>
  props.error?.statusCode === 404
    ? 'お探しのページが見つかりませんでした。'
    : 'エラーが発生しました。',
)

useSeoMeta({
  title: `${props.error?.statusCode ?? 'error'} | ikalga.net`,
  // エラー画面は検索結果に出さない
  robots: 'noindex',
})

// エラー状態を解除してから遷移する。clearError を挟まないと遷移後もエラー画面が残る。
const backToTop = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="my-auto py-10">
      <p class="text-[64px] leading-none font-bold tracking-[-0.035em] md:text-[88px]">
        {{ error?.statusCode ?? 'error' }}
      </p>

      <p class="mt-6 text-[17px] font-medium md:text-[21px]">{{ message }}</p>

      <NuxtLink
        to="/"
        class="text-brand-strong mt-8 inline-flex items-center gap-1.5 text-[13px] tracking-[0.06em]"
        @click.prevent="backToTop"
      >
        トップへ戻る
        <svg
          viewBox="0 0 12 12"
          class="size-[11px]"
          fill="none"
          stroke="currentColor"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M2 6h8" />
          <path d="M6.5 2.5 10 6l-3.5 3.5" />
        </svg>
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

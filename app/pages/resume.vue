<script setup lang="ts">
const { data: page } = await useAsyncData('resume', () =>
  queryCollection('content').path('/resume').first(),
)

useSeoMeta({ title: `${page.value?.title ?? 'resume'} | ikalga.net` })
</script>

<template>
  <article v-if="page" class="prose-resume">
    <ContentRenderer :value="page" />
  </article>
  <p v-else class="text-ink-muted">コンテンツが見つかりませんでした。</p>
</template>

<style scoped>
/*
 * TODO: Markdown 由来の見出し・リストのスタイルを整える（暫定の最小指定）。
 * Tailwind v4 では scoped style 内の @apply に @reference が必要になるため、
 * ここでは素の CSS で書いている。
 */
.prose-resume :deep(h1) {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.prose-resume :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
}

.prose-resume :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.prose-resume :deep(p) {
  margin-block: 0.75rem;
}

.prose-resume :deep(ul) {
  margin-block: 0.75rem;
  padding-left: 1.25rem;
  list-style-type: disc;
}

.prose-resume :deep(li + li) {
  margin-top: 0.25rem;
}
</style>

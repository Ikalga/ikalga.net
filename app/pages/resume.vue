<script setup lang="ts">
const { data: page } = await useAsyncData('resume', () =>
  queryCollection('content').path('/resume').first(),
)

const description = 'ikalga の職務経歴書。経験した技術・業務領域と職務経歴をまとめています。'

useSeoMeta({
  title: `${page.value?.title ?? 'resume'} | ikalga.net`,
  description,
  ogTitle: `${page.value?.title ?? 'resume'} | ikalga.net`,
  ogDescription: description,
  ogType: 'article',
  twitterCard: 'summary',
})
</script>

<template>
  <section class="pt-14 pb-6 md:pt-19">
    <PageHeader eyebrow="Resume" :title="page?.title ?? '職務経歴書'">
      <template #meta>
        <span
          v-if="page?.updated"
          class="text-ink-muted shrink-0 text-[11px] tracking-[0.09em] md:text-[11.5px]"
        >
          最終更新 {{ page.updated }}
        </span>
      </template>
    </PageHeader>

    <article v-if="page" class="md mt-9 md:mt-10">
      <ContentRenderer :value="page" />
    </article>
    <p v-else class="text-ink-muted mt-10 text-[14px]">コンテンツが見つかりませんでした。</p>
  </section>
</template>

<style scoped>
/*
 * Markdown から生成される要素の組版。
 * Tailwind v4 では scoped style 内の @apply に @reference が必要になるため、
 * ここでは素の CSS でテーマトークンを参照している。
 */
.md :deep(blockquote) {
  padding: 2px 0 2px 16px;
  border-left: 1px solid var(--color-rule);
  color: var(--color-ink-muted);
  font-size: 12.5px;
  line-height: 1.95;
}

.md :deep(h2) {
  margin-top: 44px;
  padding-top: 14px;
  border-top: 1px solid var(--color-rule);
  font-size: 16px;
  font-weight: 700;
}

.md :deep(h3) {
  margin-top: 28px;
  font-size: 14px;
  font-weight: 700;
}

.md :deep(h4) {
  margin-top: 18px;
  color: var(--color-ink-muted);
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.md :deep(p) {
  margin-top: 14px;
  max-width: 36em;
  font-size: 13.5px;
  line-height: 2;
}

.md :deep(ul) {
  margin-top: 14px;
  padding-left: 1.25em;
  list-style-type: disc;
}

.md :deep(li) {
  margin-top: 5px;
  font-size: 13.5px;
  line-height: 1.95;
}

.md :deep(li::marker) {
  color: var(--color-brand-strong);
}

.md :deep(ul ul) {
  margin-top: 6px;
}

.md :deep(ul ul li) {
  color: var(--color-ink-muted);
  font-size: 13px;
}

.md :deep(ul ul li::marker) {
  color: var(--color-rule);
}

.md :deep(a) {
  color: var(--color-brand-strong);
}

.md :deep(strong) {
  font-weight: 700;
}

@media (min-width: 768px) {
  .md :deep(h2) {
    margin-top: 56px;
    font-size: 18px;
  }

  .md :deep(h3) {
    font-size: 14.5px;
  }

  .md :deep(h4) {
    font-size: 13px;
  }

  .md :deep(p),
  .md :deep(li) {
    font-size: 14px;
  }

  .md :deep(ul ul li) {
    font-size: 13.5px;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  /** ページ上部の欧文ラベル */
  eyebrow: string
  /** ページ見出し */
  title: string
}>()
</script>

<template>
  <div>
    <p class="text-ink-muted text-[10.5px] font-semibold tracking-[0.2em] uppercase md:text-[11px]">
      {{ eyebrow }}
    </p>
    <div class="mt-3 flex items-baseline justify-between gap-6">
      <h1 class="text-[27px] font-bold tracking-[-0.02em] md:text-[34px]">{{ title }}</h1>
      <slot name="meta" />
    </div>
  </div>
</template>

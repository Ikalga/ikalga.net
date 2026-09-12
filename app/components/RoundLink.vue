<script setup lang="ts">
defineProps<{
  /** リンク先 URL */
  href: string
  /** スクリーンリーダー向けのラベル（アイコンのみのため必須） */
  label: string
}>()
</script>

<template>
  <a
    :href="href"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    class="round-link border-rule bg-surface text-ink hover:border-brand-strong/45 relative inline-flex size-[50px] items-center justify-center rounded-full border transition-colors duration-300 md:size-14"
  >
    <slot />
  </a>
</template>

<style scoped>
/* 要件 4.4: ホバーで破線円が外側に現れる */
.round-link::after {
  content: '';
  position: absolute;
  inset: -7px;
  border: 1px dashed var(--color-brand-strong);
  border-radius: 9999px;
  opacity: 0;
  transform: scale(0.84);
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.round-link:hover::after {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  .round-link::after {
    inset: -8px;
  }
}
</style>

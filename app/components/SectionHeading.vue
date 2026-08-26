<script setup lang="ts">
defineProps<{
  /** 見出し（日本語） */
  title: string
  /** 見出しに添える欧文ラベル */
  en: string
}>()
</script>

<template>
  <div class="border-rule flex items-baseline gap-3 border-b pb-3">
    <h2 class="text-base font-bold md:text-[18px]">{{ title }}</h2>
    <span
      class="text-brand-strong text-[10.5px] font-semibold tracking-[0.18em] uppercase md:text-[11px]"
    >
      {{ en }}
    </span>
  </div>
</template>

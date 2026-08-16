<script setup lang="ts">
const nav = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/resume', label: 'resume' },
]
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="px-6 py-5">
      <div class="mx-auto flex max-w-3xl items-center justify-between">
        <NuxtLink to="/" class="font-semibold tracking-wide">ikalga.net</NuxtLink>
        <nav aria-label="メイン">
          <ul class="flex gap-5 text-sm">
            <li v-for="item in nav" :key="item.to">
              <NuxtLink :to="item.to" class="text-ink-muted hover:text-ink">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-1 px-6 py-10">
      <div class="mx-auto max-w-3xl">
        <slot />
      </div>
    </main>

    <footer class="text-ink-muted px-6 py-8 text-center text-xs">
      © {{ new Date().getFullYear() }} ikalga
    </footer>
  </div>
</template>

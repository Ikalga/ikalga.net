<script setup lang="ts">
const nav = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/resume', label: 'resume' },
]
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="pt-8">
      <div class="mx-auto flex w-full max-w-page items-baseline justify-between gap-6 px-6 md:px-8">
        <NuxtLink to="/" class="text-[15px] font-bold tracking-[-0.015em] md:text-[17px]">
          ikalga.net
        </NuxtLink>
        <nav aria-label="メイン">
          <ul class="flex gap-5 md:gap-7">
            <li v-for="item in nav" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="nav-link text-ink-muted hover:text-brand-strong inline-block text-[12.5px] tracking-[0.07em] md:text-[13px]"
                exact-active-class="is-current"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex flex-1 flex-col">
      <div class="mx-auto flex w-full max-w-page flex-1 flex-col px-6 md:px-8">
        <slot />
      </div>
    </main>

    <footer class="pt-16 pb-8">
      <div
        class="text-ink-muted mx-auto w-full max-w-page px-6 text-center text-[10.5px] tracking-[0.09em] md:px-8 md:text-[11px]"
      >
        © ikalga
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 現在地のナビゲーションにアクセントの下線を引く */
.nav-link.is-current {
  color: var(--color-ink);
}

.nav-link.is-current::after {
  content: '';
  display: block;
  height: 1px;
  margin-top: 6px;
  background: var(--color-brand-strong);
}
</style>

<script setup lang="ts">
const description = 'ikalga のプロフィール、スキルセット、制作実績、連絡先。'

useSeoMeta({
  title: 'about | ikalga.net',
  description,
  ogTitle: 'about | ikalga.net',
  ogDescription: description,
  ogType: 'profile',
  twitterCard: 'summary',
})

// TODO: [ ] の項目を実際の内容に置き換える
const skills = [
  { label: '言語', items: ['TypeScript', 'JavaScript', '[主要言語]', '[主要言語]'] },
  { label: 'フレームワーク', items: ['Nuxt (Vue 3)', 'Vue.js', '[サーバーサイド FW]'] },
  { label: 'インフラ・ツール', items: ['Docker', 'GitHub Actions', 'Git', '[クラウド]'] },
  { label: 'その他', items: ['Tailwind CSS', 'ESLint / Prettier', '[DB]'] },
]

const works = [
  {
    title: 'ikalga.net',
    description:
      'このポートフォリオサイト。静的生成した HTML を GitHub Pages に配信し、職務経歴は Markdown から生成しています。',
    stack: ['Nuxt 4', 'TypeScript', 'Tailwind CSS'],
    linkLabel: 'GitHub',
    href: '#',
    placeholder: false,
  },
  {
    title: '[プロジェクト名]',
    description: '[何を解決するものか、どこを担当したかを 2 行程度で]',
    stack: ['[技術]', '[技術]'],
    linkLabel: 'GitHub',
    href: '#',
    placeholder: true,
  },
  {
    title: '[プロジェクト名]',
    description: '[何を解決するものか、どこを担当したかを 2 行程度で]',
    stack: ['[技術]', '[技術]'],
    linkLabel: '外部リンク',
    href: '#',
    placeholder: true,
  },
]

const contacts = [
  { label: 'メール', value: '[メールアドレス]', href: '#' },
  { label: 'X（DM）', value: '@[ユーザー名]', href: '#' },
]

/** 未入力のプレースホルダー（[ ] で囲まれた文字列）かどうか */
const isPlaceholder = (value: string) => value.startsWith('[')
</script>

<template>
  <section class="pt-14 pb-6 md:pt-19">
    <PageHeader eyebrow="About" title="プロフィール" />

    <div
      class="text-ink-muted mt-8 space-y-4 text-[13.5px] leading-[2.05] md:mt-10 md:text-[14.5px]"
    >
      <p>
        <strong class="text-ink font-bold">ikalga</strong>（<span class="todo">[氏名]</span
        >）。<span class="todo">[勤務地]</span>を拠点に、Web
        アプリケーションの開発をしているフルスタックエンジニアです。
      </p>
      <p class="max-w-[34em]">
        要件を固めるところから、設計・実装・リリース後の運用までを一通り担当してきました。とくに、仕様のあいまいさを実装で早めに潰していく進め方と、あとから読む人が迷わないコードを書くことを大事にしています。
      </p>
      <p class="max-w-[34em]">
        最近は TypeScript と Nuxt
        を中心に、個人でも小さなプロダクトをつくって公開しています。このサイト自体もそのひとつです。
      </p>
    </div>

    <div class="mt-13 md:mt-17">
      <SectionHeading title="スキルセット" en="Skills" />
      <dl class="mt-1">
        <div
          v-for="skill in skills"
          :key="skill.label"
          class="border-rule border-b py-4 md:grid md:grid-cols-[168px_1fr] md:gap-5"
        >
          <dt
            class="text-ink-muted text-[11.5px] font-semibold tracking-[0.06em] md:pt-0.5 md:text-[12.5px]"
          >
            {{ skill.label }}
          </dt>
          <dd class="mt-2 text-[13.5px] leading-[1.9] md:mt-0 md:text-[14px]">
            <template v-for="(item, index) in skill.items" :key="item + index">
              <span v-if="index > 0" class="text-rule mx-2" aria-hidden="true">/</span>
              <span :class="{ todo: isPlaceholder(item) }">{{ item }}</span>
            </template>
          </dd>
        </div>
      </dl>
    </div>

    <div class="mt-13 md:mt-17">
      <SectionHeading title="制作実績" en="Works" />
      <div class="mt-5 grid gap-4 md:mt-6 md:grid-cols-2">
        <article
          v-for="work in works"
          :key="work.title + work.linkLabel"
          class="border-rule bg-surface hover:border-brand-strong/45 flex flex-col gap-2.5 rounded-[3px] border p-5 transition-colors duration-300 hover:bg-white/60"
        >
          <h3 class="text-[15px] font-bold md:text-[15.5px]" :class="{ todo: work.placeholder }">
            {{ work.title }}
          </h3>
          <p
            class="text-ink-muted flex-1 text-[12.5px] leading-[1.85] md:text-[13px]"
            :class="{ todo: work.placeholder }"
          >
            {{ work.description }}
          </p>
          <ul class="flex flex-wrap gap-1.5">
            <li
              v-for="tech in work.stack"
              :key="tech"
              class="border-rule text-ink-muted rounded-full border px-2.5 py-0.5 text-[10.5px] tracking-[0.05em] md:text-[11px]"
            >
              {{ tech }}
            </li>
          </ul>
          <!-- TODO: href に実際のリンク先を設定する -->
          <a
            :href="work.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-strong inline-flex items-center gap-1.5 self-start text-[12px] tracking-[0.06em]"
          >
            {{ work.linkLabel }}
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
              <path d="M3.5 8.5 8.5 3.5" />
              <path d="M4.6 3.5h3.9v3.9" />
            </svg>
          </a>
        </article>
      </div>
    </div>

    <div class="mt-13 md:mt-17">
      <SectionHeading title="連絡先" en="Contact" />
      <dl class="mt-1">
        <div
          v-for="contact in contacts"
          :key="contact.label"
          class="border-rule border-b py-4 md:grid md:grid-cols-[168px_1fr] md:gap-5"
        >
          <dt
            class="text-ink-muted text-[11.5px] font-semibold tracking-[0.06em] md:pt-0.5 md:text-[12.5px]"
          >
            {{ contact.label }}
          </dt>
          <dd class="mt-2 text-[13.5px] leading-[1.9] md:mt-0 md:text-[14px]">
            <!-- TODO: href と表示文字列を実際の連絡先に置き換える -->
            <a :href="contact.href" class="todo">{{ contact.value }}</a>
          </dd>
        </div>
      </dl>
      <p class="text-ink-muted mt-4 text-[12px] leading-[1.9] md:text-[12.5px]">
        お仕事のご相談・カジュアル面談などはこちらまで。その他の SNS は
        <NuxtLink to="/" class="text-brand-strong">home</NuxtLink> に掲載しています。
      </p>
    </div>
  </section>
</template>

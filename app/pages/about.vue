<script setup lang="ts">
usePageSeo({
  title: 'about | ikalga.net',
  description: 'ikalga のプロフィール、スキルセット、制作実績、連絡先。',
  ogType: 'profile',
})

const skills = [
  { label: '言語', items: ['Python', 'PHP', 'Java', 'TypeScript', 'JavaScript'] },
  { label: 'フレームワーク', items: ['Django', 'Symfony', 'Nuxt', 'Vue.js'] },
  {
    label: 'インフラ・ツール',
    items: ['AWS', 'Cloudflare', 'nginx', 'SaltStack', 'Git', 'GitHub', 'Docker'],
  },
  { label: 'その他', items: ['PostgreSQL', 'Redis', 'Tailwind CSS'] },
]

const works = [
  {
    title: 'ikalga.net',
    description:
      '当ポートフォリオサイト。静的生成した HTML を GitHub Pages に配信し、職務経歴は Markdown から生成しています。',
    stack: ['Nuxt 4', 'TypeScript', 'Tailwind CSS'],
    linkLabel: 'GitHub',
    href: 'https://github.com/Ikalga/ikalga.net',
  },
  {
    title: 'csff-japanese-improved',
    description:
      'インディーゲーム "Card Survival: Fantasy Forest" の日本語化 MOD。ゲーム内のテキストを翻訳するMODと、翻訳用のスクリプト・ツールを配布しています。',
    stack: ['Python'],
    linkLabel: 'GitHub',
    href: 'https://github.com/Ikalga/csff-japanese-improved',
  },
  {
    title: 'misskey.ikalga.net',
    description: 'Misskey インスタンス。サーバー構築・運用の経験を積むために立ち上げています。',
    stack: ['Node.js', 'Docker', 'Cloudflare'],
    linkLabel: 'Misskey',
    href: 'https://misskey.ikalga.net/',
  },
]

type Contact = {
  label: string
  value: string
  /** 未設定の場合は a タグにせず、テキストとして表示する（メールはスパム避けのため設定しない） */
  href?: string
}

const contacts: Contact[] = [
  { label: 'メール', value: 'a.ikaluga.06 [at] gmail.com' },
  { label: 'X（DM）', value: '@Ikalga', href: 'https://x.com/Ikalga' },
]
</script>

<template>
  <section class="pt-14 pb-6 md:pt-19">
    <PageHeader eyebrow="About" title="プロフィール" />

    <div
      class="text-ink-muted mt-8 space-y-4 text-[13.5px] leading-[2.05] md:mt-10 md:text-[14.5px]"
    >
      <p><strong class="text-ink font-bold">斑鳩勇人</strong>（@ikalga）</p>
      <p>普段は関東某所で、とあるポータルサイトのスクラムマスターやSREエンジニアをやっています。</p>
      <p>
        10年以上の間、Webアプリケーションの設計・実装・運用に携わってきました。<br />
        要求定義から総合テストまで、インフラ設計からフロントエンド実装まで、幅広く担当してきた経験を活かし、現在はチームの開発プロセス改善や運用の自動化などに取り組んでいます。
      </p>
      <p>
        趣味は自転車ロードレース、読書、インディーゲームなど。<br />
        インディーゲームについては、最近はプログラミングスキルを活かしてのMOD作成等にも手を出しています。
      </p>
    </div>

    <div class="mt-13 md:mt-17">
      <SectionHeading id="skills" title="スキルセット" en="Skills" />
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
              <span>{{ item }}</span>
            </template>
          </dd>
        </div>
      </dl>
    </div>

    <div class="mt-13 md:mt-17">
      <SectionHeading id="works" title="制作実績" en="Works" />
      <div class="mt-5 grid gap-4 md:mt-6 md:grid-cols-2">
        <article
          v-for="work in works"
          :key="work.title + work.linkLabel"
          class="border-rule bg-surface hover:border-brand-strong/45 flex flex-col gap-2.5 rounded-[3px] border p-5 transition-colors duration-300 hover:bg-white/60"
        >
          <h3 class="text-[15px] font-bold md:text-[15.5px]">
            {{ work.title }}
          </h3>
          <p class="text-ink-muted flex-1 text-[12.5px] leading-[1.85] md:text-[13px]">
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
      <SectionHeading id="contact" title="連絡先" en="Contact" />
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
            <a v-if="contact.href" :href="contact.href">{{ contact.value }}</a>
            <template v-else>{{ contact.value }}</template>
          </dd>
        </div>
      </dl>
      <p class="text-ink-muted mt-4 text-[12px] leading-[1.9] md:text-[12.5px]">
        メールアドレスは [at] を@に置き換えてください。<br />
        その他の SNS は<NuxtLink to="/" class="text-brand-strong">home</NuxtLink> に掲載しています。
      </p>
    </div>
  </section>
</template>

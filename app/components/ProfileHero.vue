<template>
  <section id="top" class="min-h-[calc(100vh-1px)] border-b border-stone-200 bg-[#fbfaf7]">
    <div
      class="mx-auto grid min-h-screen max-w-7xl gap-8 px-5 py-6 md:px-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:py-10">
      <aside class="flex flex-col justify-between lg:sticky lg:top-10 lg:h-[calc(100vh-80px)]">
        <div>
          <div class="mb-8 flex items-center justify-between">
            <a href="#top" class="text-sm font-semibold tracking-tight text-stone-950">
              Portfolio
            </a>

            <div class="flex items-center gap-2 text-sm">
              <button type="button" class="font-semibold" :class="locale === 'ja' ? 'text-stone-950' : 'text-stone-400'"
                @click="setLocale('ja')">
                日本語
              </button>
              <span class="text-stone-300">/</span>
              <button type="button" class="font-semibold" :class="locale === 'en' ? 'text-stone-950' : 'text-stone-400'"
                @click="setLocale('en')">
                English
              </button>
            </div>
          </div>

          <div>
            <h1 class="text-4xl font-semibold leading-none tracking-tight text-stone-950 md:text-5xl">
              {{ profile.nameKanji }}
            </h1>

            <p class="mt-3 text-sm font-medium text-stone-500">
              {{ profile.nameRomaji }} / {{ profile.nameKana }}
            </p>

            <p class="mt-8 text-xl font-semibold leading-tight text-stone-950">
              Frontend Engineer
            </p>

            <p class="mt-2 text-base font-medium text-green-900">
              Vue / Nuxt / TypeScript
            </p>
          </div>

          <div class="mt-8 space-y-2 text-sm leading-6 text-stone-700">
            <p>{{ localizedCopy.identity }}</p>
            <p>{{ localizedCopy.status }}</p>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <span v-for="tag in localizedCopy.tags" :key="tag"
              class="border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="mt-10">
          <div class="space-y-3">
            <a v-for="item in contactItems" :key="item.label" :href="item.href"
              :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined"
              class="group grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3 text-sm">
              <span class="font-semibold uppercase tracking-[0.12em] text-stone-400">
                {{ item.label }}
              </span>
              <span
                class="truncate font-semibold text-stone-950 underline decoration-stone-300 underline-offset-4 group-hover:text-green-800 group-hover:decoration-green-700">
                {{ item.text }}
              </span>
            </a>
          </div>

          <a :href="profile.resumeUrl"
            class="mt-6 inline-flex border border-stone-950 px-4 py-2.5 text-sm font-semibold text-stone-950 hover:bg-stone-950 hover:text-white">
            {{ localizedCopy.resume }}
          </a>
        </div>
      </aside>

      <main class="flex flex-col justify-center">
        <div class="border-y border-stone-200">
          <a v-for="item in indexItems" :key="item.href" :href="item.href"
            class="group grid gap-3 border-b border-stone-200 py-5 last:border-b-0 md:grid-cols-[56px_180px_minmax(0,1fr)_auto] md:items-baseline">
            <span class="text-xs font-semibold text-stone-400">
              {{ item.number }}
            </span>

            <span class="text-xl font-semibold tracking-tight text-stone-950 group-hover:text-green-800">
              {{ item.title }}
            </span>

            <span class="text-sm leading-6 text-stone-600">
              {{ item.description }}
            </span>

            <span class="hidden text-sm font-semibold text-stone-400 group-hover:text-green-800 md:block">
              ↗
            </span>
          </a>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div v-for="language in localizedLanguageSkills" :key="language.key"
            class="border border-stone-200 bg-white p-4">
            <div class="flex items-baseline justify-between gap-4">
              <p class="font-semibold text-stone-950">
                {{ language.name }}
              </p>
              <p class="text-xs font-semibold text-stone-500">
                {{ language.level }} / 5
              </p>
            </div>

            <div class="mt-3 flex gap-1">
              <span v-for="step in levelSteps" :key="step" class="h-1.5 w-full"
                :class="step <= language.level ? 'bg-green-800' : 'bg-stone-200'" />
            </div>

            <p class="mt-3 text-xs font-medium text-stone-500">
              {{ language.credential }}
            </p>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { languageSkills, profile } from '~/data/site'

const { locale, setLocale } = useLocale()

const localizedCopy = computed(() => {
  return locale.value === 'ja'
    ? {
      identity: '中国出身、大阪在住。修士課程修了後、約3年間フロントエンド開発に携わってきました。',
      status: '現在、日本国内で Vue / Nuxt / TypeScript を中心としたフロントエンド職を探しています。',
      tags: ['中国出身', '修士課程修了', 'Frontend 約3年', '大阪在住', '求職中', '中日英対応'],
      resume: '職務経歴書'
    }
    : {
      identity: 'Frontend engineer from China, currently based in Osaka, Japan. Master’s degree holder with about 3 years of frontend experience.',
      status: 'Seeking frontend roles in Japan, mainly focused on Vue / Nuxt / TypeScript.',
      tags: ['From China', 'Master’s Degree', '3 Years Frontend', 'Osaka', 'Open to Work', 'Trilingual'],
      resume: 'Resume'
    }
})

const indexItems = computed(() => {
  return locale.value === 'ja'
    ? [
      {
        number: '01',
        title: 'Experience',
        href: '#experience',
        description: '約3年間の Web フロントエンド開発経験。Vue / Nuxt を中心に、業務画面、API 連携、UI 実装を担当。'
      },
      {
        number: '02',
        title: 'Projects',
        href: '#projects',
        description: '個人開発・学習プロジェクト。Nuxt、Vue、iOS、家計簿アプリ、Web アプリケーション設計など。'
      },
      {
        number: '03',
        title: 'Education',
        href: '#education',
        description: '中国石油大学（華東）で地理情報科学、北京林業大学大学院で農業工程・情報技術を専攻。'
      },
      {
        number: '04',
        title: 'Certificates',
        href: '#certificates',
        description: 'JLPT N1、情報セキュリティマネジメント、CET、全国计算机等级考试など。'
      },
      {
        number: '05',
        title: 'Skills',
        href: '#skills',
        description: 'Vue、Nuxt、TypeScript、REST API、Tailwind CSS、GitHub、Cloudflare など。'
      }
    ]
    : [
      {
        number: '01',
        title: 'Experience',
        href: '#experience',
        description: 'About 3 years of frontend development experience, mainly with Vue / Nuxt, business UI, API integration, and web application implementation.'
      },
      {
        number: '02',
        title: 'Projects',
        href: '#projects',
        description: 'Personal and learning projects covering Nuxt, Vue, iOS, household bookkeeping, and web application design.'
      },
      {
        number: '03',
        title: 'Education',
        href: '#education',
        description: 'Studied Geographic Information Science at China University of Petroleum and Agricultural Engineering & Information Technology at Beijing Forestry University.'
      },
      {
        number: '04',
        title: 'Certificates',
        href: '#certificates',
        description: 'JLPT N1, Information Security Management Examination, CET, and National Computer Rank Examination.'
      },
      {
        number: '05',
        title: 'Skills',
        href: '#skills',
        description: 'Vue, Nuxt, TypeScript, REST API, Tailwind CSS, GitHub, Cloudflare, and related frontend technologies.'
      }
    ]
})

const localizedLanguageSkills = computed(() => {
  return languageSkills.map((item) => ({
    key: item.key,
    level: item.level,
    ...item[locale.value]
  }))
})

const levelSteps = [1, 2, 3, 4, 5]

const displayUrl = (url: string) => {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

const contactItems = computed(() => [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    text: profile.email,
    external: false
  },
  {
    label: 'GitHub',
    href: profile.github,
    text: displayUrl(profile.github),
    external: true
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    text: displayUrl(profile.linkedin),
    external: true
  }
])
</script>
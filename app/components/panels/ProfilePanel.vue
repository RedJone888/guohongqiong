<template>
    <div
        class="grid min-h-full grid-cols-1 gap-3 px-1 py-2 lg:h-full lg:grid-cols-12 lg:grid-rows-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 lg:px-0 lg:py-0">
        <section
            class="soft-shadow relative overflow-hidden rounded-2xl border border-white/90 bg-white p-6 lg:col-span-12 lg:min-h-0 lg:p-9">
            <div class="relative z-10 flex h-full flex-col">
                <div class="flex items-center gap-2">
                    <span class="h-2 w-2 rounded-full bg-purple-700" aria-hidden="true" />
                    <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                        {{ copy.availability }}
                    </p>
                </div>

                <div class="mt-6 max-w-4xl lg:mt-5">
                    <h2
                        class="text-[2.25rem] font-bold leading-[1.12] tracking-[-0.045em] text-stone-950 sm:text-5xl lg:text-[3.35rem]">
                        {{ copy.headline }}
                    </h2>
                    <p class="mt-4 max-w-3xl text-sm leading-7 text-stone-500 sm:text-base lg:mt-5">
                        {{ copy.introduction }}
                    </p>
                </div>

                <div class="mt-6 flex flex-wrap gap-3">
                    <button type="button"
                        class="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
                        @click="$emit('navigate', 'experience')">
                        {{ copy.experienceCta }}
                        <span aria-hidden="true"
                            class="material-symbols-outlined text-[18px]! transition-transform group-hover:translate-x-0.5">
                            arrow_forward
                        </span>
                    </button>
                    <button type="button"
                        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-bold text-stone-800 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
                        @click="$emit('navigate', 'contact')">
                        <span aria-hidden="true" class="material-symbols-outlined text-[18px]!">mail</span>
                        {{ copy.contactCta }}
                    </button>
                </div>

                <dl
                    class="mt-8 grid grid-cols-1 gap-3 border-t border-stone-200 pt-5 sm:grid-cols-3 lg:mt-auto lg:gap-6">
                    <div v-for="proof in copy.proofs" :key="proof.label" class="min-w-0">
                        <dt class="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400">
                            {{ proof.label }}
                        </dt>
                        <dd class="mt-1 text-lg font-bold tracking-tight text-stone-950">
                            {{ proof.value }}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <button type="button"
            class="hover-lift group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl bg-stone-950 p-6 text-left shadow-[2px_10px_28px_rgba(62,45,78,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950 lg:col-span-7 lg:min-h-0 lg:p-7"
            @click="$emit('navigate', 'projects')">
            <div class="flex items-start justify-between gap-5">
                <div>
                    <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
                        {{ copy.featured }}
                    </p>
                    <h3 class="mt-3 text-3xl font-bold tracking-[-0.04em] text-white">
                        KakeiNeko
                    </h3>
                </div>
                <span aria-hidden="true"
                    class="material-symbols-outlined rounded-full border border-white/15 bg-white/10 p-3 text-[24px]! text-white">
                    account_balance_wallet
                </span>
            </div>

            <p class="mt-4 max-w-xl text-sm leading-6 text-stone-300">
                {{ copy.projectDescription }}
            </p>

            <div class="mt-auto flex items-end justify-between gap-4 pt-6">
                <div class="flex flex-wrap gap-2">
                    <span v-for="item in projectStack" :key="item"
                        class="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-stone-300">
                        {{ item }}
                    </span>
                </div>
                <span aria-hidden="true"
                    class="material-symbols-outlined shrink-0 text-white transition-transform group-hover:translate-x-1">
                    arrow_forward
                </span>
            </div>
        </button>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:grid-rows-2 lg:gap-6">
            <button type="button"
                class="hover-lift soft-shadow group rounded-2xl border border-white/90 bg-white p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 lg:min-h-0 lg:p-6"
                @click="$emit('navigate', 'skills')">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
                            {{ copy.coreStack }}
                        </p>
                        <h3 class="mt-2 text-xl font-bold tracking-tight text-stone-950">
                            {{ copy.stackTitle }}
                        </h3>
                    </div>
                    <span aria-hidden="true"
                        class="material-symbols-outlined text-stone-400 transition-colors group-hover:text-purple-800">
                        psychology
                    </span>
                </div>
                <div class="mt-4 flex flex-wrap gap-2">
                    <span v-for="skill in skills" :key="skill"
                        class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-semibold text-stone-600">
                        {{ skill }}
                    </span>
                </div>
            </button>

            <button type="button"
                class="hover-lift group rounded-2xl border border-purple-200/70 bg-purple-100/60 p-5 text-left shadow-[2px_8px_24px_rgba(62,45,78,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 lg:min-h-0 lg:p-6"
                @click="$emit('navigate', 'certificates')">
                <div class="flex h-full items-center justify-between gap-5">
                    <div>
                        <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-purple-900/55">
                            {{ copy.credentials }}
                        </p>
                        <h3 class="mt-2 text-xl font-bold tracking-tight text-stone-950">
                            {{ copy.credentialsTitle }}
                        </h3>
                        <p class="mt-1 text-xs leading-5 text-stone-600">
                            {{ copy.credentialsDescription }}
                        </p>
                    </div>
                    <span aria-hidden="true"
                        class="material-symbols-outlined shrink-0 text-[28px]! text-purple-900 transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PortfolioSectionKey } from '~/data/site'

defineEmits<{
    navigate: [section: PortfolioSectionKey]
}>()

const { locale } = useLocale()

const copy = computed(() => {
    return locale.value === 'ja'
        ? {
            availability: 'Open to opportunities in Japan',
            headline: 'プロダクトの価値を、使いやすい Web 体験に。',
            introduction:
                'Vue / Nuxt / TypeScript を軸に、ユーザー視点と実装品質の両方を大切にするフロントエンドエンジニアです。',
            experienceCta: '実務経験を見る',
            contactCta: '連絡する',
            proofs: [
                { label: 'Experience', value: '3+ Years' },
                { label: 'Based in', value: 'Osaka, Japan' },
                { label: 'Languages', value: 'JA / EN / ZH' }
            ],
            featured: 'Featured Project',
            projectDescription:
                '日本の家庭向け共有記帳アプリ。プロダクト設計から Nuxt、iOS、API、データ設計まで取り組む個人開発プロジェクト。',
            coreStack: 'Core Stack',
            stackTitle: 'Web プロダクト開発',
            credentials: 'Credentials',
            credentialsTitle: '学習と資格',
            credentialsDescription: '語学・IT・情報セキュリティの取り組みを見る'
        }
        : {
            availability: 'Open to opportunities in Japan',
            headline: 'Turning product value into thoughtful web experiences.',
            introduction:
                'A frontend engineer focused on Vue, Nuxt, and TypeScript, balancing user-centered thinking with reliable implementation.',
            experienceCta: 'View experience',
            contactCta: 'Get in touch',
            proofs: [
                { label: 'Experience', value: '3+ Years' },
                { label: 'Based in', value: 'Osaka, Japan' },
                { label: 'Languages', value: 'JA / EN / ZH' }
            ],
            featured: 'Featured Project',
            projectDescription:
                'A shared household bookkeeping product for Japan, covering product design, Nuxt, iOS, APIs, and data modeling.',
            coreStack: 'Core Stack',
            stackTitle: 'Web product development',
            credentials: 'Credentials',
            credentialsTitle: 'Learning & certificates',
            credentialsDescription: 'Explore language, IT, and security credentials'
        }
})

const skills = ['Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS']
const projectStack = ['Nuxt', 'iOS', 'REST API']
</script>

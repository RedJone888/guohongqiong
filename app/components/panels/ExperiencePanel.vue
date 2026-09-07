<template>
    <div
        class="experience-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-3 lg:overflow-hidden lg:pb-0 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="experience-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[0.9375rem] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div class="scroll-affordance-frame experience-scroll-frame min-h-0 flex-1">
            <div v-scroll-affordance
                class="experience-scroll scroll-affordance no-scrollbar flex min-h-0 flex-1 flex-col gap-5 overflow-x-hidden -mr-2 pr-2 lg:gap-3 lg:overflow-y-auto">
                <article class="experience-employer paper-panel relative shrink-0 p-5 lg:px-7 lg:py-4">
                    <div class="grid gap-4 lg:grid-cols-[1.25fr_1fr] lg:gap-0">
                        <section class="lg:border-r lg:border-dashed lg:border-stone-400 lg:pr-8">
                            <p class="experience-kicker">Employer</p>
                            <h4
                                class="mt-1 text-lg font-extrabold leading-tight tracking-[-0.03em] text-stone-950 lg:text-xl">
                                {{ experience.company }}
                            </h4>
                            <p class="mt-1 text-sm leading-5 text-stone-600">{{ experience.onsite }}</p>
                        </section>

                        <section class="flex flex-col items-start lg:pl-8">
                            <p class="experience-kicker">Role</p>
                            <div class="experience-role-line mt-1">
                                <p
                                    class="min-w-0 text-base font-extrabold leading-6 tracking-[-0.03em] text-stone-950 lg:text-lg">
                                    {{ experience.role }}
                                </p>
                                <div
                                    class="experience-date inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-stone-600 lg:text-sm">
                                    <span class="material-symbols-outlined text-[0.9375rem]!">calendar_today</span>
                                    <span>{{ experience.period }}</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section class="mt-4 border-t border-dashed border-stone-400 pt-3">
                        <p class="experience-kicker">{{ currentHeader.overviewLabel }}</p>
                        <p class="mt-1 text-sm leading-5 text-stone-700">{{ experience.summary }}</p>
                    </section>
                </article>

                <section class="experience-timeline relative flex shrink-0 flex-col pl-7 lg:pl-10">
                    <p class="experience-kicker mb-2 shrink-0">{{ currentHeader.projectsLabel }}</p>
                    <div class="experience-timeline-line" aria-hidden="true" />

                    <div class="grid gap-3">
                        <article v-for="(project, index) in experience.projects" :key="project.abbrTitle"
                            class="experience-project group/project relative" :data-accent="projectAccent(index)">
                            <span class="experience-node" aria-hidden="true" />
                            <button type="button"
                                class="paper-panel relative flex w-full cursor-pointer items-start gap-3 overflow-visible px-4 py-3 text-left transition duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-stone-950 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-4 lg:px-5 lg:py-3"
                                @click="openProject(project.key)">
                                <span
                                    class="experience-project-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2">
                                    <span aria-hidden="true"
                                        class="material-symbols-outlined material-symbol-filled text-xl!">
                                        {{ project.icon }}
                                    </span>
                                </span>

                                <span class="min-w-0 flex-1">
                                    <span class="flex min-w-0 flex-wrap items-center gap-2">
                                        <span
                                            class="text-sm font-extrabold leading-5 tracking-[-0.02em] text-stone-950 lg:text-[0.9375rem]">
                                            {{ project.abbrTitle }}
                                        </span>
                                        <span
                                            class="experience-stack-badge rounded-full px-2 py-0.5 text-[0.625rem] font-bold">
                                            {{ project.stack }}
                                        </span>
                                    </span>
                                    <span class="mt-1 block text-xs leading-[1.55] text-stone-600 lg:text-[0.8125rem]">
                                        {{ project.description }}
                                    </span>
                                </span>

                                <span
                                    class="experience-project-action hidden shrink-0 items-center gap-1 rounded-lg border-2 px-3 py-1.5 text-xs font-extrabold text-stone-950 shadow-[2px_2px_1px_#6b6560] transition group-hover/project:translate-x-0.5 lg:inline-flex">
                                    {{ currentHeader.expand }}
                                    <span class="material-symbols-outlined text-base!">open_in_new</span>
                                </span>
                            </button>
                        </article>
                    </div>
                </section>
            </div>
            <div class="scroll-cue" aria-hidden="true">
                <span class="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="selectedProject"
                class="fixed inset-0 z-[999] flex items-center justify-center bg-stone-950/55 backdrop-blur-[2px] lg:px-6 lg:py-8"
                @click.self="closeProject">
                <section ref="dialogRef" :data-accent="selectedProjectAccent"
                    class="project-detail-dialog flex h-dvh w-full max-w-5xl flex-col overflow-hidden outline-none lg:h-auto lg:max-h-[88dvh]"
                    role="dialog" aria-modal="true" aria-labelledby="project-dialog-title"
                    aria-describedby="project-dialog-overview" tabindex="-1">
                    <header
                        class="project-dialog-header flex shrink-0 items-center justify-between gap-3 p-4 lg:gap-6 lg:px-6 lg:py-5">
                        <div class="flex min-w-0 flex-wrap items-center gap-3">
                            <div class="flex min-w-0 flex-1 items-center gap-3">
                                <span
                                    class="project-dialog-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                                    <span aria-hidden="true"
                                        class="material-symbols-outlined material-symbol-filled text-xl!">
                                        {{ selectedProject.icon }}
                                    </span>
                                </span>
                                <h3 id="project-dialog-title"
                                    class="text-lg font-bold leading-tight tracking-[-0.03em] text-stone-950 lg:text-2xl">
                                    {{ selectedProject.fullTitle }}
                                </h3>
                            </div>
                            <span
                                class="experience-stack-badge shrink-0 rounded-full px-2.5 py-1 text-[0.625rem] font-bold">
                                {{ selectedProject.stack }}
                            </span>
                        </div>

                        <button ref="closeButtonRef" type="button"
                            class="project-dialog-close flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-stone-950 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-stone-950"
                            :aria-label="currentHeader.closeDialog" @click="closeProject">
                            <span class="material-symbols-outlined text-xl">
                                close
                            </span>
                        </button>
                    </header>

                    <div class="scroll-affordance-frame min-h-0 flex-1">
                        <div v-scroll-affordance class="project-dialog-body scroll-affordance no-scrollbar min-h-0 flex-1 space-y-6 overflow-y-auto p-4 lg:p-6">
                            <section>
                            <div class="mb-3 flex items-center gap-2">
                                <span aria-hidden="true"
                                    class="project-detail-marker material-symbols-outlined">description</span>
                                <h4 class="experience-kicker">
                                    {{ currentHeader.projectOverview }}
                                </h4>
                            </div>

                            <p id="project-dialog-overview"
                                class="project-dialog-content project-dialog-overview p-4 text-sm leading-6 text-stone-700 lg:p-5">
                                {{ selectedProject.detail.overview }}
                            </p>
                        </section>

                        <section>
                            <div class="mb-3 flex items-center gap-2">
                                <span aria-hidden="true"
                                    class="project-detail-marker material-symbols-outlined">task_alt</span>
                                <h4 class="experience-kicker">
                                    {{ currentHeader.responsibilities }}
                                </h4>
                            </div>

                            <div class="project-dialog-content project-dialog-list">
                                <article v-for="(item, itemIndex) in selectedProject.detail.responsibilities"
                                    :key="item.title" class="project-dialog-row">
                                    <div class="min-w-0">
                                        <h5 class="project-item-title text-sm font-extrabold leading-5 text-stone-950"
                                            :data-step="String(itemIndex + 1).padStart(2, '0')">
                                            {{ item.title }}
                                        </h5>
                                        <p class="mt-1 text-sm leading-6 text-stone-600">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </section>

                        <section>
                            <div class="mb-3 flex items-center gap-2">
                                <span aria-hidden="true"
                                    class="project-detail-marker material-symbols-outlined">widgets</span>
                                <h4 class="experience-kicker">
                                    {{ currentHeader.mainFeatures }}
                                </h4>
                            </div>

                            <div class="project-dialog-content grid grid-cols-1 gap-3 lg:grid-cols-2">
                                <article v-for="(feature, featureIndex) in selectedProject.detail.features"
                                    :key="feature.title" class="project-feature-card p-4">
                                    <div class="min-w-0">
                                        <h5 class="project-item-title text-sm font-extrabold leading-5 text-stone-950"
                                            :data-step="String(featureIndex + 1).padStart(2, '0')">
                                            {{ feature.title }}
                                        </h5>
                                        <p class="mt-1 text-sm leading-6 text-stone-600">
                                            {{ feature.description }}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </section>


                        </div>
                        <div class="scroll-cue" aria-hidden="true">
                            <span class="material-symbols-outlined">expand_more</span>
                        </div>
                    </div>
                </section>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { experiences } from '~/data/experience'
const { locale } = useLocale()
import { experienceHeader } from '~/data/experience'
import type { ProjectKey } from '~/data/type'

const currentHeader = computed(() => {
    return experienceHeader[locale.value]
})
// const experience = computed(() => {
//     return locale.value === 'ja'
//         ? {
//             role: 'フロントエンドエンジニア',
//             company: '北京国科鉄服',
//             onsite: '中国鉄道科学研究院に常駐',
//             period: '2022.08 — 2025.08',
//             summary:
//                 '約3年間、鉄道貨物・物流関連システムの Web フロントエンド開発を担当しました。Vue を中心に、業務画面の実装、データ密度の高い管理画面、EC 系フローの UI 改善、既存画面の保守・改修に携わりました。',
//             tags: ['Enterprise UI', 'Railway Logistics', 'Vue.js', 'Backend Management', 'Business System'],
//             projects: [
//                 {
//                     title: '鉄道貨物 EC システム（95306）- EC プラットフォーム',
//                     icon: 'shopping_cart',
//                     stack: ['Vue 2'],
//                     description:
//                         '全国規模の鉄道貨物・物流関連 EC プラットフォームにおいて、ユーザー向け画面の実装と既存機能の改修を担当しました。',
//                     contributions: [
//                         'EC 画面の UI 実装と既存画面の保守改修を担当',
//                         '業務フローに沿ったフォーム、一覧、詳細画面を実装',
//                         'API 連携を前提としたデータ表示・状態管理を実装',
//                         'ユーザー操作の分かりやすさと画面の一貫性を改善'
//                     ]
//                 },
//                 {
//                     title: '鉄道貨物 EC システム（95306）- バックエンド管理システム',
//                     icon: 'dashboard',
//                     stack: ['Vue 2'],
//                     description:
//                         '内部運用向けの管理画面において、大量データを扱う一覧、検索、詳細、編集系 UI の開発を担当しました。',
//                     contributions: [
//                         '管理者向けダッシュボード、一覧、検索条件画面を実装',
//                         '高密度なテーブル表示と複雑な業務項目の UI を整理',
//                         '状態に応じた操作制御、入力チェック、表示切替を実装',
//                         '運用担当者が扱いやすい管理画面の改善に参加'
//                     ]
//                 },
//                 {
//                     title: '上海鉄路局 バックエンド管理システム',
//                     icon: 'corporate_fare',
//                     stack: ['Vue 3'],
//                     description:
//                         '上海鉄路局向けの地域管理ポータルにおいて、Vue 3 を用いた管理画面の開発と改善を担当しました。',
//                     contributions: [
//                         'Vue 3 ベースの管理画面実装に参加',
//                         '地域運用向けの画面構成、データ表示、操作 UI を実装',
//                         '既存プロジェクトで得た管理画面開発経験を再利用',
//                         '業務システムとしての安定性と保守性を意識して実装'
//                     ]
//                 }
//             ]
//         }
//         : {
//             role: 'Frontend Developer',
//             company: 'Beijing Guoke Tiefu',
//             onsite: 'Onsite at China Academy of Railway Sciences',
//             period: 'Aug 2022 — Aug 2025',
//             summary:
//                 'Worked for about three years on web frontend development for railway freight and logistics-related systems. Mainly used Vue to build enterprise UI, data-dense management dashboards, e-commerce workflows, and ongoing feature maintenance.',
//             tags: ['Enterprise UI', 'Railway Logistics', 'Vue.js', 'Backend Management', 'Business System'],
//             projects: [
//                 {
//                     title: 'Railway Freight E-commerce System (95306) - EC Platform',
//                     icon: 'shopping_cart',
//                     stack: ['Vue 2', 'Element UI', 'Business UI'],
//                     description:
//                         'Worked on user-facing frontend features for a national railway freight and logistics e-commerce platform.',
//                     contributions: [
//                         'Implemented and maintained e-commerce frontend screens',
//                         'Built forms, list views, detail pages, and workflow-oriented UI',
//                         'Integrated API-driven data display and frontend state handling',
//                         'Improved interface consistency and usability across business flows'
//                     ]
//                 },
//                 {
//                     title: 'Railway Freight E-commerce System (95306) - Backend Management System',
//                     icon: 'dashboard',
//                     stack: ['Vue 2', 'Admin Dashboard', 'Data Table'],
//                     description:
//                         'Developed internal management interfaces for operational users, focusing on data-heavy tables, search workflows, and administrative actions.',
//                     contributions: [
//                         'Built dashboards, list pages, search panels, and detail views',
//                         'Handled dense table layouts and complex business fields',
//                         'Implemented conditional actions, validation, and UI state changes',
//                         'Improved operational efficiency through clearer management screens'
//                     ]
//                 },
//                 {
//                     title: 'Shanghai Railway Bureau Backend System',
//                     icon: 'corporate_fare',
//                     stack: ['Vue 3', 'Management System', 'Regional Operations'],
//                     description:
//                         'Worked on a regional backend management portal for Shanghai Railway Bureau, using Vue 3 for frontend implementation.',
//                     contributions: [
//                         'Participated in Vue 3-based management screen development',
//                         'Implemented regional operation screens, data presentation, and action UI',
//                         'Reused experience from previous admin system development',
//                         'Focused on maintainability and stability for business system usage'
//                     ]
//                 }
//             ]
//         }
// })
const experience = computed(() => {
    return experiences[locale.value]
})
const projectAccent = (index: number) => ['yellow', 'pink', 'blue'][index] ?? 'yellow'
const selectedProjectKey = ref<ProjectKey | null>(null)

const selectedProject = computed(() => {
    return (
        experience.value.projects.find((project) => project.key === selectedProjectKey.value) ??
        null
    )
})

const selectedProjectAccent = computed(() => {
    if (!selectedProjectKey.value) return 'yellow'
    const index = experience.value.projects.findIndex((project) => project.key === selectedProjectKey.value)
    return projectAccent(index)
})

const dialogRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)

const setBackgroundInert = (isInert: boolean) => {
    const appRoot = document.getElementById('__nuxt')
    if (!appRoot) return

    if (isInert) {
        appRoot.setAttribute('inert', '')
    } else {
        appRoot.removeAttribute('inert')
    }
}

const openProject = async (key: ProjectKey) => {
    lastFocusedElement.value =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
    selectedProjectKey.value = key
    setBackgroundInert(true)

    await nextTick()
    closeButtonRef.value?.focus()
}

const closeProject = async () => {
    if (!selectedProjectKey.value) return

    selectedProjectKey.value = null
    setBackgroundInert(false)

    await nextTick()
    lastFocusedElement.value?.focus()
    lastFocusedElement.value = null
}

const focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
].join(',')

const handleKeydown = (event: KeyboardEvent) => {
    if (!selectedProject.value) return

    if (event.key === 'Escape') {
        event.preventDefault()
        closeProject()
        return
    }

    if (event.key !== 'Tab' || !dialogRef.value) return

    const focusableElements = Array.from(
        dialogRef.value.querySelectorAll<HTMLElement>(focusableSelector)
    ).filter((element) => !element.hasAttribute('disabled'))

    if (focusableElements.length === 0) {
        event.preventDefault()
        dialogRef.value.focus()
        return
    }

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    if (!firstElement || !lastElement) return

    if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
    setBackgroundInert(false)
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.experience-page {
    --scroll-affordance-surface: var(--experience-paper);
    --scroll-affordance-color: #6d4a9e;
    --experience-paper: #fffdf7;
    --experience-ink: #26201a;
    --experience-yellow: #ffdc5d;
    --experience-pink: #efb0c6;
    --experience-blue: #9fd0f3;
    --experience-purple: #e2d1f8;
}

.project-detail-dialog {
    --scroll-affordance-surface: var(--experience-paper);
    --scroll-affordance-color: #6d4a9e;
    --experience-paper: #fffdf7;
    --experience-ink: #26201a;
    --experience-yellow: #ffdc5d;
    --experience-pink: #efb0c6;
    --experience-blue: #9fd0f3;
    --experience-purple: #e2d1f8;
    border: 2px solid var(--experience-ink);
    border-radius: 0;
    background: var(--experience-paper);
    box-shadow: 8px 8px 1px #6b6560;
}

.project-dialog-header {
    border-bottom: 2px solid var(--experience-ink);
    background: var(--experience-paper);
}

.project-detail-dialog[data-accent="yellow"] .project-dialog-icon,
.project-detail-dialog[data-accent="yellow"] .project-detail-marker {
    background: var(--experience-yellow);
    border-color: #c49a2c;
}

.project-detail-dialog[data-accent="pink"] .project-dialog-icon,
.project-detail-dialog[data-accent="pink"] .project-detail-marker {
    background: var(--experience-pink);
    border-color: #c77493;
}

.project-detail-dialog[data-accent="blue"] .project-dialog-icon,
.project-detail-dialog[data-accent="blue"] .project-detail-marker {
    background: var(--experience-blue);
    border-color: #639fce;
}

.project-detail-dialog[data-accent="yellow"] .experience-kicker {
    color: #8a6b16 !important;
}

.project-detail-dialog[data-accent="pink"] .experience-kicker {
    color: #a34f6f !important;
}

.project-detail-dialog[data-accent="blue"] .experience-kicker {
    color: #2f6f9e !important;
}

.project-dialog-icon,
.project-detail-marker {
    border: 2px solid var(--experience-ink);
    color: var(--experience-ink);
}

.project-detail-marker {
    display: inline-flex;
    width: 1.35rem;
    height: 1.35rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-width: 1.5px;
    border-radius: 999px;
    font-size: 0.8125rem !important;
}

.project-dialog-close {
    border: 2px solid var(--experience-ink);
    background: var(--experience-paper);
    box-shadow: 3px 3px 1px #6b6560;
}

.project-dialog-close:hover {
    background: #5a3d8a;
    color: #fffdf7;
}

.project-dialog-body {
    background: var(--experience-paper);
}

.project-dialog-content {
    margin-inline: 0.25rem;
}

.project-dialog-overview,
.project-feature-card {
    border: 2px solid var(--experience-ink);
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.project-dialog-list {
    overflow: hidden;
    border: 2px solid var(--experience-ink);
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.project-dialog-row {
    padding: 1rem 1.125rem;
}

.project-dialog-row+.project-dialog-row {
    border-top: 1px dashed #8c8174;
}

.project-item-title {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.project-item-title::before {
    content: attr(data-step);
    display: inline-flex;
    min-width: 1.75rem;
    height: 1.25rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #5a3d8a;
    border-radius: 999px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 0.02em;
}

.project-detail-dialog[data-accent="yellow"] .project-item-title::before {
    background: color-mix(in srgb, var(--experience-yellow) 55%, white);
}

.project-detail-dialog[data-accent="pink"] .project-item-title::before {
    background: color-mix(in srgb, var(--experience-pink) 55%, white);
}

.project-detail-dialog[data-accent="blue"] .project-item-title::before {
    background: color-mix(in srgb, var(--experience-blue) 55%, white);
}

@media (min-width: 1024px) {
    .project-dialog-content {
        margin-inline: 1rem;
    }
}

.paper-panel {
    border: 2px solid var(--experience-ink);
    border-radius: 14px;
    background: var(--experience-paper);
    box-shadow: 4px 4px 1px #6b6560;
}

.experience-section-title::after {
    background: var(--experience-yellow);
}

.experience-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    line-height: 1.2;
    text-transform: uppercase;
    color: #655d53;
}

.experience-role-line {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 0.75rem;
    row-gap: 0.35rem;
    width: 100%;
}

.experience-role-line>p {
    flex: 1 1 auto;
}

.experience-date {
    /* border: 2px solid #5a3d8a; */
    background: var(--experience-purple);
}

.experience-role-line .experience-date {
    margin-left: auto;
}

.experience-stack-badge {
    background: var(--experience-purple);
    color: var(--experience-ink);
}

.experience-timeline-line {
    position: absolute;
    top: 2rem;
    bottom: 1.25rem;
    left: 0.7rem;
    width: 2px;
    background: var(--experience-ink);
}

.experience-node {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: -1.75rem;
    width: 18px;
    height: 18px;
    border: 2px solid var(--experience-ink);
    border-radius: 999px;
    background: var(--experience-paper);
    transform: translateY(-50%);
}

.experience-project::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -1rem;
    width: 1rem;
    height: 2px;
    background: var(--experience-ink);
}

.experience-project>button::before,
.experience-project>button::after {
    content: "";
    position: absolute;
    z-index: 3;
    top: 50%;
    width: 0;
    height: 0;
    transform: translateY(-50%);
}

.experience-project>button::before {
    left: -13px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 12px solid var(--experience-ink);
}

.experience-project>button::after {
    left: -9px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 10px solid var(--experience-paper);
}

.experience-project[data-accent="yellow"] .experience-project-icon,
.experience-project[data-accent="yellow"] .experience-project-action {
    background: var(--experience-yellow);
    border-color: #c49a2c;
}

.experience-project[data-accent="pink"] .experience-project-icon,
.experience-project[data-accent="pink"] .experience-project-action {
    background: var(--experience-pink);
    border-color: #c77493;
}

.experience-project[data-accent="blue"] .experience-project-icon,
.experience-project[data-accent="blue"] .experience-project-action {
    background: var(--experience-blue);
    border-color: #639fce;
}

@media (min-width: 1024px) {
    .experience-timeline-line {
        left: 1rem;
    }

    .experience-node {
        left: -2.05rem;
    }
}

@media (max-width: 1023px) {
    .experience-page {
        overflow: visible;
    }

    .experience-timeline {
        /* min-height: 34rem; */
    }
}
</style>

<template>
    <div
        class="projects-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-visible lg:pb-0 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="projects-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[0.9375rem] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <!-- 项目总览与深入了解入口（同一张大卡片） -->
        <div
            class="projects-scroll no-scrollbar flex flex-col overflow-x-hidden -mr-2 pr-2 lg:min-h-0 lg:flex-1 lg:overflow-visible lg:pb-0">
            <article class="petnido-overview">
                <div v-scroll-affordance class="petnido-overview-scroll scroll-affordance no-scrollbar">
                    <div class="petnido-head">
                    <div class="petnido-title-line">
                        <div class="petnido-title-block">
                            <img src="/images/projects/petnido-logo.png" alt="PetNido" width="44" height="44"
                                class="petnido-logo">
                            <h3>{{ project.title }}</h3>
                            <p class="petnido-title-category">{{ project.category }}</p>
                        </div>

                        <div class="petnido-title-actions">
                            <a :href="project.url" target="_blank" rel="noopener noreferrer"
                                class="petnido-action petnido-action-primary inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-extrabold text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                {{ currentHeader.visitLabel }}
                                <span aria-hidden="true"
                                    class="material-symbols-outlined text-[1rem]!">north_east</span>
                            </a>
                            <a :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer"
                                class="petnido-action petnido-action-secondary inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-extrabold text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1rem]!">code</span>
                                {{ currentHeader.sourceLabel }}
                            </a>
                        </div>
                    </div>

                    <div class="petnido-tags">
                        <span class="petnido-tag petnido-tag-type">{{ project.projectType }}</span>
                        <span class="petnido-tag petnido-tag-status">
                            <span class="petnido-live-dot" aria-hidden="true" />
                            {{ project.status.development }}
                        </span>
                        <span class="petnido-tag petnido-tag-role">
                            <span class="petnido-tag-label">{{ currentHeader.roleLabel }}:</span>
                            {{ project.role }}
                        </span>
                    </div>
                </div>

                    <p class="petnido-summary">{{ project.summary }}</p>

                    <div class="petnido-mid">
                    <section class="petnido-highlights">
                        <p class="petnido-kicker">{{ currentHeader.highlightLabel }}</p>
                        <ul class="petnido-highlight-list">
                            <li v-for="(highlight, index) in project.highlights" :key="index">
                                <span aria-hidden="true"
                                    class="material-symbols-outlined text-[0.9375rem]!">task_alt</span>
                                <span>{{ highlight }}</span>
                            </li>
                        </ul>
                    </section>

                    <section class="petnido-stack-block min-w-0">
                        <p class="petnido-kicker">{{ currentHeader.stackLabel }}</p>
                        <ul class="petnido-stack" aria-label="Tech stack">
                            <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
                        </ul>
                    </section>
                </div>

                    <div class="petnido-detail-zone">
                    <div class="petnido-detail-grid">
                        <button v-for="card in detailCards" :key="card.key" type="button"
                            class="petnido-detail-card text-left" :data-accent="card.accent"
                            :aria-label="`${card.title} — ${currentHeader.detailLabel}`" aria-haspopup="dialog"
                            :aria-expanded="selectedDetail === card.key" @click="openDetail(card.key)">
                            <div class="petnido-detail-top">
                                <span class="petnido-detail-icon">
                                    <span aria-hidden="true"
                                        class="material-symbols-outlined material-symbol-filled text-lg!">{{ card.icon
                                        }}</span>
                                </span>
                                <span class="petnido-detail-title">{{ card.title }}</span>
                            </div>

                            <p class="petnido-detail-teaser">{{ card.teaser }}</p>

                            <span class="petnido-detail-link inline-flex shrink-0 items-center gap-1 text-xs font-extrabold">
                                {{ currentHeader.detailLabel }}
                                <span aria-hidden="true"
                                    class="material-symbols-outlined text-[0.8125rem]!">arrow_forward</span>
                            </span>
                        </button>
                    </div>
                </div>

                    <section class="petnido-overview-media">
                    <p class="petnido-kicker">{{ currentHeader.screenshotsLabel }}</p>
                    <div class="petnido-shot-grid">
                        <ProjectScreenshotSlot v-for="shot in project.overviewScreenshots" :key="shot.label"
                            :shot="shot" :placeholder-label="currentHeader.screenshotPlaceholderLabel" />
                    </div>
                    </section>
                </div>
                <div class="scroll-cue" aria-hidden="true">
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </article>
        </div>
    </div>

    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="selectedDetail"
                class="fixed inset-0 z-[999] flex items-center justify-center bg-stone-950/55 backdrop-blur-[2px] lg:px-6 lg:py-8"
                @click.self="closeDetail">
                <section ref="dialogRef" :data-accent="selectedCard.accent"
                    class="petnido-dialog flex h-dvh w-full max-w-5xl flex-col overflow-hidden outline-none lg:h-auto lg:max-h-[88dvh]"
                    role="dialog" aria-modal="true" aria-labelledby="petnido-dialog-title" tabindex="-1">
                    <header
                        class="petnido-dialog-header flex shrink-0 items-center justify-between gap-3 p-4 lg:gap-6 lg:px-6 lg:py-5">
                        <div class="flex min-w-0 items-center gap-3">
                            <span class="petnido-dialog-icon">
                                <span aria-hidden="true"
                                    class="material-symbols-outlined material-symbol-filled text-xl!">{{
                                        selectedCard.icon }}</span>
                            </span>
                            <div class="min-w-0">
                                <p class="petnido-dialog-project-label petnido-kicker">
                                    {{ project.title }} / {{ project.category }}
                                </p>
                                <h3 id="petnido-dialog-title"
                                    class="mt-0.5 text-lg font-bold leading-tight tracking-[-0.03em] text-stone-950 lg:text-2xl">
                                    {{ selectedCard.title }}
                                </h3>
                            </div>
                        </div>

                        <button ref="closeButtonRef" type="button"
                            class="petnido-dialog-close flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-stone-950 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-stone-950"
                            :aria-label="currentHeader.closeDialog" @click="closeDetail">
                            <span class="material-symbols-outlined text-xl">close</span>
                        </button>
                    </header>

                    <div class="scroll-affordance-frame min-h-0 flex-1">
                        <div v-scroll-affordance class="petnido-dialog-body scroll-affordance no-scrollbar min-h-0 flex-1 space-y-6 overflow-y-auto p-4 lg:p-6">
                        <!-- 背景・きっかけ -->
                        <template v-if="selectedDetail === 'background'">
                            <section>
                                <div class="mb-3 flex items-center gap-2">
                                    <span aria-hidden="true"
                                        class="petnido-detail-marker material-symbols-outlined">favorite</span>
                                    <h4 class="petnido-kicker">
                                        {{ currentHeader.backgroundTitle }}
                                    </h4>
                                </div>
                                <div class="petnido-dialog-list">
                                    <p v-for="(paragraph, index) in project.background.paragraphs" :key="index"
                                        class="petnido-dialog-row text-sm leading-6 text-stone-600">
                                        {{ paragraph }}
                                    </p>
                                </div>
                            </section>

                            <section>
                                <div class="mb-3 flex items-center gap-2">
                                    <span aria-hidden="true"
                                        class="petnido-detail-marker material-symbols-outlined">fact_check</span>
                                    <h4 class="petnido-kicker">
                                        {{ currentHeader.experienceLabel }}
                                    </h4>
                                </div>
                                <div class="petnido-dialog-list">
                                    <article v-for="(signal, index) in project.background.experienceSignals" :key="index"
                                        class="petnido-dialog-row">
                                        <h5 class="petnido-item-title text-sm font-extrabold leading-5 text-stone-950"
                                            :data-step="String(index + 1).padStart(2, '0')">
                                            {{ signal }}
                                        </h5>
                                    </article>
                                </div>
                            </section>

                            <section>
                                <div class="mb-3 flex items-center gap-2">
                                    <span aria-hidden="true"
                                        class="petnido-detail-marker material-symbols-outlined">help</span>
                                    <h4 class="petnido-kicker">
                                        {{ currentHeader.problemsLabel }}
                                    </h4>
                                </div>
                                <div class="petnido-problem-grid">
                                    <article v-for="(problem, index) in project.background.problems" :key="problem.title"
                                        class="petnido-problem-card">
                                        <div class="petnido-case-heading">
                                            <span>{{ String(index + 1).padStart(2, '0') }}</span>
                                            <h5>{{ problem.title }}</h5>
                                        </div>
                                        <dl class="petnido-case-copy">
                                            <div>
                                                <dt>{{ currentHeader.evidenceLabel }}</dt>
                                                <dd>{{ problem.evidence }}</dd>
                                            </div>
                                            <div>
                                                <dt>{{ currentHeader.responseLabel }}</dt>
                                                <dd>{{ problem.response }}</dd>
                                            </div>
                                        </dl>
                                    </article>
                                </div>
                            </section>

                            <ProjectScreenshotSlot :shot="project.background.screenshot"
                                :placeholder-label="currentHeader.screenshotPlaceholderLabel" />
                        </template>

                        <!-- プロダクト設計 -->
                        <template v-else-if="selectedDetail === 'product'">
                            <section>
                                <div class="mb-3 flex items-center gap-2">
                                    <span aria-hidden="true"
                                        class="petnido-detail-marker material-symbols-outlined">design_services</span>
                                    <h4 class="petnido-kicker">
                                        {{ currentHeader.caseStudyLabel }}
                                    </h4>
                                </div>
                                <div class="petnido-case-stack">
                                    <article v-for="(item, index) in project.product.cases" :key="item.title"
                                        class="petnido-case-card">
                                        <header class="petnido-case-header">
                                            <div class="petnido-case-heading">
                                                <span>{{ String(index + 1).padStart(2, '0') }}</span>
                                                <h5>{{ item.title }}</h5>
                                            </div>
                                            <p>{{ item.status }}</p>
                                        </header>

                                        <dl class="petnido-case-copy petnido-case-copy-four">
                                            <div>
                                                <dt>{{ currentHeader.challengeLabel }}</dt>
                                                <dd>{{ item.challenge }}</dd>
                                            </div>
                                            <div>
                                                <dt>{{ currentHeader.decisionLabel }}</dt>
                                                <dd>{{ item.decision }}</dd>
                                            </div>
                                            <div>
                                                <dt>{{ currentHeader.implementationLabel }}</dt>
                                                <dd>{{ item.implementation }}</dd>
                                            </div>
                                            <div>
                                                <dt>{{ currentHeader.resultLabel }}</dt>
                                                <dd>{{ item.evidence }}</dd>
                                            </div>
                                        </dl>

                                        <div v-if="item.flows?.length" class="petnido-mode-flows">
                                            <article v-for="flow in item.flows" :key="flow.title"
                                                class="petnido-mode-flow">
                                                <h6>{{ flow.title }}</h6>
                                                <ol :aria-label="flow.title">
                                                    <li v-for="(step, stepIndex) in flow.steps" :key="step">
                                                        <span aria-hidden="true">{{ stepIndex + 1 }}</span>
                                                        {{ step }}
                                                    </li>
                                                </ol>
                                            </article>
                                        </div>

                                        <ProjectScreenshotSlot :shot="item.screenshot"
                                            :placeholder-label="currentHeader.screenshotPlaceholderLabel" compact />
                                    </article>
                                </div>
                            </section>
                        </template>

                        <!-- 実装と品質 -->
                        <template v-else-if="selectedDetail === 'engineering'">
                            <section>
                                <div class="mb-3 flex items-center gap-2">
                                    <span aria-hidden="true"
                                        class="petnido-detail-marker material-symbols-outlined">verified</span>
                                    <h4 class="petnido-kicker">
                                        {{ currentHeader.qualityLabel }}
                                    </h4>
                                </div>
                                <div class="petnido-quality-grid">
                                    <article v-for="(item, index) in project.engineering.cases" :key="item.title"
                                        class="petnido-quality-card">
                                        <div class="petnido-case-heading">
                                            <span>{{ String(index + 1).padStart(2, '0') }}</span>
                                            <h5>{{ item.title }}</h5>
                                        </div>
                                        <dl class="petnido-case-copy">
                                            <div>
                                                <dt>{{ currentHeader.approachLabel }}</dt>
                                                <dd>{{ item.approach }}</dd>
                                            </div>
                                            <div>
                                                <dt>{{ currentHeader.proofLabel }}</dt>
                                                <dd>{{ item.proof }}</dd>
                                            </div>
                                        </dl>
                                    </article>
                                </div>
                            </section>

                            <ProjectScreenshotSlot :shot="project.engineering.screenshot"
                                :placeholder-label="currentHeader.screenshotPlaceholderLabel" />

                            <p class="petnido-ai flex gap-2.5 rounded-xl border-2 border-stone-950 p-4">
                                <span aria-hidden="true"
                                    class="material-symbols-outlined shrink-0 text-lg!">auto_awesome</span>
                                <span class="text-sm leading-6 text-stone-700">
                                    <strong class="text-stone-950">{{ currentHeader.aiTitle }}:</strong>
                                    {{ project.engineering.ai }}
                                </span>
                            </p>
                        </template>

                        <!-- 現在の進捗 -->
                        <template v-else>
                            <section>
                                <div class="mb-3 flex items-center gap-2">
                                    <span aria-hidden="true"
                                        class="petnido-detail-marker material-symbols-outlined">insights</span>
                                    <h4 class="petnido-kicker">
                                        {{ currentHeader.progressTitle }}
                                    </h4>
                                </div>
                                <div class="petnido-progress grid gap-3 lg:grid-cols-3">
                                    <div class="petnido-progress-col" data-state="completed">
                                        <h5>{{ currentHeader.demoReadyLabel }}</h5>
                                        <ul>
                                            <li v-for="(item, index) in project.progress.demoReady" :key="index">{{ item
                                            }}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="petnido-progress-col" data-state="verified">
                                        <h5>{{ currentHeader.verifiedLabel }}</h5>
                                        <ul>
                                            <li v-for="(item, index) in project.progress.verified" :key="index">{{
                                                item }}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="petnido-progress-col" data-state="limitations">
                                        <h5>{{ currentHeader.limitationsLabel }}</h5>
                                        <ul>
                                            <li v-for="(item, index) in project.progress.limitations" :key="index">{{ item
                                            }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <ProjectScreenshotSlot :shot="project.progress.screenshot"
                                :placeholder-label="currentHeader.screenshotPlaceholderLabel" />

                            <section class="petnido-reflection">
                                <div>
                                    <p>{{ currentHeader.lastUpdatedLabel }}</p>
                                    <strong>{{ project.progress.lastUpdated }}</strong>
                                </div>
                                <div>
                                    <p>{{ currentHeader.reflectionLabel }}</p>
                                    <span>{{ project.progress.reflection }}</span>
                                </div>
                            </section>
                        </template>

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
import ProjectScreenshotSlot from '~/components/projects/ProjectScreenshotSlot.vue'
import { petnidoProjectHeader, petnidoProjects, type PetnidoDetailKey } from '~/data/projects'

const { locale } = useLocale()

const currentHeader = computed(() => petnidoProjectHeader[locale.value])
const project = computed(() => petnidoProjects[locale.value])

const detailCards = computed(() => {
    const accents = ['pink', 'yellow', 'blue', 'green'] as const
    const cards: {
        key: PetnidoDetailKey
        icon: string
        title: string
        teaser: string
        accent: (typeof accents)[number]
    }[] = [
            {
                key: 'background',
                icon: 'travel_explore',
                title: currentHeader.value.backgroundTitle,
                teaser: project.value.teasers.background,
                accent: accents[0],
            },
            {
                key: 'product',
                icon: 'web',
                title: currentHeader.value.productTitle,
                teaser: project.value.teasers.product,
                accent: accents[1],
            },
            {
                key: 'engineering',
                icon: 'verified',
                title: currentHeader.value.engineeringTitle,
                teaser: project.value.teasers.engineering,
                accent: accents[2],
            },
            {
                key: 'progress',
                icon: 'play_circle',
                title: currentHeader.value.progressTitle,
                teaser: project.value.teasers.progress,
                accent: accents[3],
            },
        ]
    return cards
})

const selectedDetail = ref<PetnidoDetailKey | null>(null)
const selectedCard = computed(() => {
    return detailCards.value.find((card) => card.key === selectedDetail.value) ?? detailCards.value[0]!
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

const openDetail = async (key: PetnidoDetailKey) => {
    lastFocusedElement.value =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
    selectedDetail.value = key
    setBackgroundInert(true)

    await nextTick()
    closeButtonRef.value?.focus()
}

const closeDetail = async () => {
    if (!selectedDetail.value) return

    selectedDetail.value = null
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
    if (!selectedDetail.value) return

    if (event.key === 'Escape') {
        event.preventDefault()
        closeDetail()
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
.projects-page {
    --scroll-affordance-surface: var(--project-paper);
    --scroll-affordance-color: #6d4a9e;
    --project-paper: #fffdf7;
    --project-ink: #26201a;
    --project-yellow: #ffdc5d;
    --project-pink: #efb0c6;
    --project-blue: #9fd0f3;
    --project-green: #8fb69a;
}

.projects-section-title::after {
    content: "";
    display: block;
    width: 7rem;
    height: 4px;
    margin-top: 0.55rem;
    border-radius: 999px;
    background: var(--project-yellow);
}

.petnido-overview {
    --scroll-affordance-surface: var(--project-paper);
    --scroll-affordance-color: #6d4a9e;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    border: 2px solid var(--project-ink);
    border-radius: 14px;
    background: var(--project-paper);
    box-shadow: 4px 4px 1px #6b6560;
}

.petnido-overview-scroll {
    display: flex;
    min-height: 0;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 1rem;
}

.petnido-kicker,
.petnido-tag,
.petnido-flow-number {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-weight: 800;
    letter-spacing: 0.1em;
    line-height: 1.35;
}

.petnido-kicker {
    font-size: 0.625rem;
    color: #655d53;
}

.petnido-title-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    margin-top: 0.35rem;
}

.petnido-title-block {
    display: flex;
    flex: 1 1 30rem;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    min-width: 0;
}

.petnido-logo {
    width: 2.75rem;
    height: 2.75rem;
    flex: 0 0 auto;
    /* border-radius: 0.65rem; */
    /* border: 1.5px solid var(--project-ink); */
    /* background: #fff; */
    /* box-shadow: 2px 2px 0 rgba(38, 32, 26, 0.22); */
}

.petnido-title-block h3 {
    font-size: 1.7rem;
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.035em;
    color: var(--project-ink);
}

.petnido-title-category {
    margin-left: 0.35rem;
    border-left: 1.5px dashed #b2a79a;
    padding-left: 1rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    line-height: 1.5;
    letter-spacing: 0.08em;
    color: #655d53;
}

.petnido-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.7rem;
}

.petnido-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.75rem;
    border: 1.5px solid #cfc6b8;
    border-radius: 999px;
    padding: 0.3rem 0.7rem;
    font-size: 0.6rem;
    line-height: 1.4;
    color: var(--project-ink);
    background: var(--project-paper);
}

.petnido-tag-type {
    background: #faf7f0;
    border-color: #cfc6b8;
    color: #6b6258;
}

.petnido-tag-status {
    background: #fff5d8;
    border-color: #c88a2a;
    color: #8a5415;
}

.petnido-tag-role {
    background: #fff3c2;
    border-color: #d5a93f;
    color: #6b5417;
}

.petnido-tag-label {
    font-weight: 800;
    color: #9a7620;
}

.petnido-live-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: #d48a20;
    box-shadow: 0 0 0 3px rgba(212, 138, 32, 0.16);
}

.petnido-summary {
    margin-top: 0.65rem;
    font-size: 0.875rem;
    line-height: 1.75;
    color: #44403c;
}

.petnido-highlights {
    min-width: 0;
}

.petnido-highlight-list {
    margin-top: 0.55rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
}

.petnido-highlights li {
    display: flex;
    gap: 0.55rem;
    font-size: 0.8rem;
    line-height: 1.6;
    color: #57534e;
}

.petnido-highlights li .material-symbols-outlined {
    color: #52765e;
}

.petnido-mid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.9rem;
    margin-top: 0.8rem;
    border-top: 1px dashed #b2a79a;
    padding-top: 0.8rem;
}

.petnido-overview-media {
    margin-top: 0.85rem;
    border-top: 1px dashed #b2a79a;
    padding-top: 0.8rem;
}

.petnido-shot-grid {
    display: grid;
    align-items: start;
    gap: 0.75rem;
    margin-top: 0.55rem;
}

.petnido-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.55rem;
}

.petnido-stack li {
    border: 1.5px solid var(--project-ink);
    border-radius: 999px;
    background: #fff;
    padding: 0.3rem 0.7rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #57534e;
}

.petnido-title-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.5rem;
}

.petnido-action {
    transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}

.petnido-action-primary {
    border: 1.5px solid #5a3d8a;
    background: var(--bg-heavy);
    color: #fffdf7;
    box-shadow: 2px 2px 1px #6b6560;
}

.petnido-action-primary:hover {
    transform: translateY(-1px);
    background: #5f3f8c;
    box-shadow: 3px 3px 1px #6b6560;
}

.petnido-action-secondary {
    border: 1.5px solid #5a3d8a;
    background: #fff;
    color: #5a3d8a;
    box-shadow: 2px 2px 1px #6b6560;
}

.petnido-action-secondary:hover {
    transform: translateY(-1px);
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.petnido-detail-zone {
    margin-top: 0.85rem;
    border-top: 1px dashed #b2a79a;
    padding-top: 0.8rem;
}

.petnido-detail-grid {
    display: grid;
    gap: 0.55rem;
}

.petnido-detail-card {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
    border: 1.5px solid var(--project-ink);
    border-radius: 10px;
    background: #fff;
    padding: 0.85rem;
    cursor: pointer;
    color: var(--project-ink);
    transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}

.petnido-detail-card:focus-visible {
    outline: 3px solid #5a3d8a;
    outline-offset: 3px;
}

.petnido-detail-card:hover {
    box-shadow: 3px 3px 1px #6b6560;
    transform: translateY(-2px);
}

.petnido-detail-card:hover .petnido-detail-link {
    color: var(--project-accent-deep);
}

.petnido-detail-top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.petnido-detail-icon {
    display: inline-flex;
    width: 2.3rem;
    height: 2.3rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--project-ink);
    border-radius: 999px;
    color: var(--project-ink);
}

.petnido-detail-card[data-accent="pink"] .petnido-detail-icon {
    background: var(--project-pink);
    border-color: #c77493;
}

.petnido-detail-card[data-accent="yellow"] .petnido-detail-icon {
    background: var(--project-yellow);
    border-color: #c49a2c;
}

.petnido-detail-card[data-accent="blue"] .petnido-detail-icon {
    background: var(--project-blue);
    border-color: #639fce;
}

.petnido-detail-card[data-accent="green"] .petnido-detail-icon {
    background: var(--project-green);
    border-color: #5f8f6b;
}

.petnido-detail-card[data-accent="pink"] {
    --project-accent-border: #c77493;
    --project-accent-deep: #a34f6f;
}

.petnido-detail-card[data-accent="yellow"] {
    --project-accent-border: #c49a2c;
    --project-accent-deep: #8a6b16;
}

.petnido-detail-card[data-accent="blue"] {
    --project-accent-border: #639fce;
    --project-accent-deep: #2f6f9e;
}

.petnido-detail-card[data-accent="green"] {
    --project-accent-border: #5f8f6b;
    --project-accent-deep: #3f6f4b;
}

.petnido-detail-title {
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: var(--project-ink);
    transition: color 160ms ease;
}

.petnido-detail-teaser {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.75rem;
    line-height: 1.6;
    color: #57534e;
    transition: color 160ms ease;
}

.petnido-detail-link {
    align-self: flex-start;
    align-items: center;
    border-bottom: 1px solid transparent;
    color: var(--project-ink);
    line-height: 1.25;
    transition: color 160ms ease, border-color 160ms ease;
}

.petnido-detail-card:hover .petnido-detail-link {
    border-bottom-color: currentColor;
}

.petnido-detail-link .material-symbols-outlined {
    line-height: 1;
}

.petnido-problem-grid,
.petnido-case-stack,
.petnido-quality-grid {
    display: grid;
    gap: 0.9rem;
}

.petnido-problem-card,
.petnido-case-card,
.petnido-quality-card,
.petnido-reflection {
    border: 2px solid var(--project-ink);
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.petnido-problem-card,
.petnido-quality-card {
    padding: 1rem;
}

.petnido-case-card {
    overflow: hidden;
}

.petnido-case-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    border-bottom: 1.5px dashed #8c8174;
    padding: 1rem;
    background: color-mix(in srgb, var(--project-blue) 16%, #fff);
}

.petnido-case-header>p {
    border: 1.5px solid #c88a2a;
    border-radius: 999px;
    padding: 0.28rem 0.6rem;
    background: #fff5d8;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.5625rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #8a5415;
}

.petnido-case-heading {
    display: flex;
    min-width: 0;
    align-items: flex-start;
    gap: 0.55rem;
}

.petnido-case-heading>span {
    display: inline-flex;
    min-width: 1.75rem;
    height: 1.25rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--project-ink);
    border-radius: 999px;
    background: color-mix(in srgb, var(--project-dialog-accent) 48%, white);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    line-height: 1;
    color: var(--project-ink);
}

.petnido-case-heading h5 {
    font-size: 0.875rem;
    font-weight: 850;
    line-height: 1.45;
    color: var(--project-ink);
}

.petnido-case-copy {
    display: grid;
    gap: 0.8rem;
    margin-top: 0.85rem;
}

.petnido-case-card>.petnido-case-copy {
    margin: 0;
    padding: 1rem;
}

.petnido-case-card> :deep(.project-screenshot-slot) {
    margin: 0 1rem 1rem;
}

.petnido-mode-flows {
    display: grid;
    gap: 0.7rem;
    padding: 0 1rem 1rem;
}

.petnido-mode-flow {
    border: 1.5px solid var(--project-ink);
    border-radius: 10px;
    padding: 0.8rem;
    background: #fffdf7;
}

.petnido-mode-flow h6 {
    font-size: 0.75rem;
    font-weight: 850;
    color: var(--project-ink);
}

.petnido-mode-flow ol {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.55rem;
}

.petnido-mode-flow li {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border: 1px solid #b2a79a;
    border-radius: 999px;
    padding: 0.3rem 0.55rem 0.3rem 0.35rem;
    background: #fff;
    font-size: 0.6875rem;
    font-weight: 700;
    line-height: 1.35;
    color: #57534e;
}

.petnido-mode-flow li>span {
    display: inline-flex;
    width: 1.15rem;
    height: 1.15rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: color-mix(in srgb, var(--project-dialog-accent) 48%, white);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.5625rem;
    font-weight: 850;
    color: var(--project-ink);
}

.petnido-case-copy div {
    min-width: 0;
}

.petnido-case-copy dt,
.petnido-reflection p {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.5625rem;
    font-weight: 850;
    letter-spacing: 0.08em;
    color: #5a3d8a;
}

.petnido-case-copy dd {
    margin-top: 0.28rem;
    font-size: 0.75rem;
    line-height: 1.65;
    color: #57534e;
}

.petnido-ai {
    box-shadow: none;
    background: color-mix(in srgb, var(--project-blue) 16%, #fff);
}

.petnido-reflection {
    display: grid;
    gap: 1rem;
    padding: 1rem;
}

.petnido-reflection strong,
.petnido-reflection span {
    display: block;
    margin-top: 0.35rem;
}

.petnido-reflection strong {
    font-size: 0.75rem;
    color: var(--project-ink);
}

.petnido-reflection span {
    font-size: 0.8rem;
    line-height: 1.7;
    color: #57534e;
}

.petnido-dialog {
    --scroll-affordance-surface: var(--project-paper);
    --scroll-affordance-color: #6d4a9e;
    --project-paper: #fffdf7;
    --project-ink: #26201a;
    border: 2px solid var(--project-ink);
    border-radius: 0;
    background: var(--project-paper);
    box-shadow: 8px 8px 1px #6b6560;
}

.petnido-dialog[data-accent="pink"] {
    --project-dialog-accent: #efb0c6;
    --project-dialog-border: #c77493;
    --project-dialog-deep: #a34f6f;
}

.petnido-dialog[data-accent="yellow"] {
    --project-dialog-accent: #ffdc5d;
    --project-dialog-border: #c49a2c;
    --project-dialog-deep: #8a6b16;
}

.petnido-dialog[data-accent="blue"] {
    --project-dialog-accent: #9fd0f3;
    --project-dialog-border: #639fce;
    --project-dialog-deep: #2f6f9e;
}

.petnido-dialog[data-accent="green"] {
    --project-dialog-accent: #8fb69a;
    --project-dialog-border: #5f8f6b;
    --project-dialog-deep: #3f6f4b;
}

.petnido-dialog[data-accent] .petnido-kicker:not(.petnido-dialog-project-label) {
    color: var(--project-dialog-deep) !important;
}

.petnido-dialog-project-label {
    color: #655d53 !important;
}

#petnido-dialog-title {
    color: var(--project-ink);
}

.petnido-dialog-header {
    border-bottom: 2px solid var(--project-ink);
    background: var(--project-paper);
}

.petnido-dialog-icon {
    display: inline-flex;
    width: 2.75rem;
    height: 2.75rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--project-dialog-border);
    border-radius: 999px;
    background: var(--project-dialog-accent);
    color: var(--project-ink);
}

.petnido-dialog-close {
    border: 2px solid var(--project-ink);
    background: var(--project-paper);
    box-shadow: 3px 3px 1px #6b6560;
}

.petnido-dialog-close:hover {
    background: #5a3d8a;
    color: var(--project-paper);
}

.petnido-dialog-body {
    background: var(--project-paper);
}

.petnido-detail-marker {
    display: inline-flex;
    width: 1.35rem;
    height: 1.35rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--project-dialog-border);
    border-radius: 999px;
    background: var(--project-dialog-accent);
    font-size: 0.8125rem !important;
    color: var(--project-ink);
}

.petnido-dialog-list,
.petnido-flow,
.petnido-progress-col,
.petnido-ai {
    border: 2px solid var(--project-ink);
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.petnido-dialog-list {
    overflow: hidden;
}

.petnido-dialog-row {
    padding: 1rem 1.125rem;
}

.petnido-dialog-row+.petnido-dialog-row {
    border-top: 1px dashed #8c8174;
}

.petnido-item-title {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.petnido-item-title::before {
    content: attr(data-step);
    display: inline-flex;
    min-width: 1.75rem;
    height: 1.25rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--project-ink);
    border-radius: 999px;
    background: color-mix(in srgb, var(--project-dialog-accent) 48%, white);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 0.02em;
    color: var(--project-ink);
}

.petnido-flow {
    padding: 1rem;
}

.petnido-flow h5 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--project-ink);
}

.petnido-flow-number {
    display: inline-flex;
    min-width: 1.7rem;
    height: 1.25rem;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #5a3d8a;
    border-radius: 999px;
    background: var(--project-blue);
    font-size: 0.5625rem;
    color: var(--project-ink);
}

.petnido-flow ol {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.petnido-flow li {
    position: relative;
    padding-left: 1rem;
    font-size: 0.75rem;
    line-height: 1.65;
    color: #57534e;
}

.petnido-flow li::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 999px;
    background: var(--project-blue);
}

.petnido-progress-col {
    padding: 0.9rem;
}

.petnido-progress-col h5 {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: var(--project-ink);
}

.petnido-progress-col[data-state="completed"] h5 {
    color: #52765e;
}

.petnido-progress-col[data-state="verified"] h5 {
    color: #5a3d8a;
}

.petnido-progress-col[data-state="limitations"] h5 {
    color: #b45309;
}

.petnido-progress-col ul {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.petnido-progress-col li {
    position: relative;
    padding-left: 0.85rem;
    font-size: 0.75rem;
    line-height: 1.6;
    color: #57534e;
}

.petnido-progress-col li::before {
    content: "";
    position: absolute;
    top: 0.48rem;
    left: 0;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 999px;
    background: currentColor;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 220ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

@media (min-width: 1024px) {
    .petnido-overview {
        max-height: 100%;
    }

    .petnido-overview-scroll {
        padding: 1.15rem;
    }

    .petnido-title-block h3 {
        font-size: 1.9rem;
    }

    .petnido-mid {
        grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
        gap: 1.5rem;
    }

    .petnido-shot-grid,
    .petnido-problem-grid,
    .petnido-quality-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .petnido-quality-grid article:last-child:nth-child(odd) {
        grid-column: 1 / -1;
    }

    .petnido-case-copy-four {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .petnido-mode-flows {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .petnido-reflection {
        grid-template-columns: minmax(10rem, 0.35fr) minmax(0, 1fr);
    }

    .petnido-stack-block {
        border-left: 1px dashed #b2a79a;
        padding-left: 1.5rem;
    }

    .petnido-detail-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.7rem;
    }

    .petnido-detail-card {
        padding: 0.9rem;
    }

    .petnido-dialog {
        border-radius: 16px;
    }
}

@media (min-width: 640px) and (max-width: 1023px) {
    .petnido-detail-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 1023px) {
    .projects-page {
        overflow: visible;
    }

    .petnido-head {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.7rem;
    }

    /* Let the title, tags, and actions become three deliberate mobile rows. */
    .petnido-title-line {
        display: contents;
    }

    .petnido-title-block {
        order: 1;
        width: 100%;
        flex: 0 1 auto;
        flex-wrap: nowrap;
        gap: 0.55rem;
    }

    .petnido-title-block h3 {
        flex: 0 0 auto;
    }

    .petnido-title-category {
        min-width: 0;
        flex: 1 1 0;
        margin-left: 0;
        padding-left: 0.7rem;
    }

    .petnido-tags {
        order: 2;
        margin-top: 0;
    }

    .petnido-title-actions {
        order: 3;
        width: 100%;
        justify-content: stretch;
        gap: 0.45rem;
    }

    .petnido-title-actions .petnido-action {
        min-width: max-content;
        flex: 1 1 auto;
        justify-content: center;
        padding-inline: 0.55rem;
        text-align: center;
        white-space: nowrap;
    }

    .petnido-overview-scroll {
        overflow-y: visible;
        overscroll-behavior: auto;
    }
}
</style>

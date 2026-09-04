<template>
    <div
        class="education-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-visible lg:pb-0 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="education-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[0.9375rem] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div
            class="education-scroll no-scrollbar flex flex-col overflow-x-hidden -mr-2 pr-2 lg:min-h-0 lg:flex-1 lg:overflow-visible lg:pb-0">
            <div class="grid gap-4 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:items-stretch lg:gap-5">
                <article v-for="(degree, degreeIndex) in degrees" :key="degree.key"
                    class="education-card no-scrollbar flex min-w-0 flex-col" :data-accent="degreeAccent(degreeIndex)">
                    <div v-scroll-affordance
                        class="education-card-scroll scroll-affordance scroll-affordance-card-body no-scrollbar"
                        tabindex="0" :aria-label="degree.major">
                    <header class="education-card-header p-4">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <span
                                class="education-level inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold text-stone-950">
                                <span aria-hidden="true"
                                    class="material-symbols-outlined material-symbol-filled text-[0.9375rem]!">school</span>
                                {{ degree.level }}
                            </span>
                            <span
                                class="education-date inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold text-stone-600">
                                <span aria-hidden="true"
                                    class="material-symbols-outlined text-[0.875rem]!">calendar_today</span>
                                {{ degree.period }}
                            </span>
                        </div>

                        <h3
                            class="mt-3 text-xl font-extrabold leading-snug tracking-[-0.025em] text-stone-950 lg:text-[1.375rem]">
                            {{ degree.major }}
                        </h3>

                        <a :href="degree.website" target="_blank" rel="noopener noreferrer"
                            class="education-school mt-2 flex items-center gap-3 rounded-xl p-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                            <span aria-hidden="true" class="education-school-logo h-10 w-10 shrink-0"
                                :style="{ backgroundImage: `url(${degree.logo})` }" />
                            <span class="min-w-0 flex-1">
                                <span class="block truncate text-sm font-extrabold text-stone-950">{{ degree.school
                                    }}</span>
                                <span class="mt-0.5 block text-xs font-semibold text-stone-500">{{ degree.location
                                    }}</span>
                            </span>
                            <span aria-hidden="true"
                                class="material-symbols-outlined text-[1.0625rem]! text-stone-500">north_east</span>
                        </a>
                    </header>

                    <div class="flex flex-1 flex-col gap-4 p-4 lg:p-5">
                        <section v-if="degree.curriculum">
                            <div class="education-subheading mb-2.5 flex items-center gap-2">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1rem]!">{{
                                    degree.curriculum.icon }}</span>
                                <h4>{{ degree.curriculum.sectionTitle }}</h4>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="item in degree.curriculum.items" :key="item"
                                    class="education-course rounded-full px-2.5 py-1 text-[0.6875rem] font-bold text-stone-700">
                                    {{ item }}
                                </span>
                            </div>
                        </section>

                        <section class="education-project-section">
                            <div class="education-subheading mb-2.5 flex items-center gap-2">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1rem]!">{{
                                    degree.project.icon }}</span>
                                <h4>{{ degree.project.sectionTitle }}</h4>
                            </div>

                            <div class="education-project-card overflow-hidden rounded-xl">
                                <div class="education-project-head p-4">
                                    <div class="flex items-center justify-between gap-3">
                                        <span
                                            class="min-w-0 text-sm font-extrabold leading-5 text-stone-950 lg:text-[0.9375rem]">
                                            {{ degree.project.title }}
                                        </span>
                                        <button type="button"
                                            class="education-project-action group/education flex shrink-0 items-center gap-1 rounded-lg border-2 px-2.5 py-1 text-[0.625rem] font-extrabold text-stone-950 shadow-[2px_2px_1px_#6b6560] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
                                            :data-accent="degreeAccent(degreeIndex)" :aria-haspopup="dialog"
                                            :aria-expanded="selectedDegreeKey === degree.key"
                                            @click="openProject(degree.key)">
                                            {{ currentHeader.expand }}
                                            <span aria-hidden="true"
                                                class="material-symbols-outlined text-[0.875rem]!">open_in_new</span>
                                        </button>
                                    </div>
                                    <p class="mt-2 text-xs leading-5 text-stone-600">
                                        {{ degree.project.summary }}
                                    </p>
                                </div>

                                <div v-if="degree.project.reference"
                                    class="education-project-links border-t border-dashed border-stone-400 px-4 py-3">
                                    <div class="flex flex-col items-start gap-2">
                                        <a v-if="degree.project.reference.githubUrl"
                                            :href="degree.project.reference.githubUrl" target="_blank"
                                            rel="noopener noreferrer"
                                            class="education-project-link education-project-link-secondary inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.625rem] font-extrabold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                            <span aria-hidden="true"
                                                class="material-symbols-outlined text-[0.9375rem]!">code</span>
                                            {{ degree.project.reference.githubLabel }}
                                        </a>
                                        <a :href="degree.project.reference.url" target="_blank"
                                            rel="noopener noreferrer"
                                            class="education-project-link education-project-link-primary inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.625rem] font-extrabold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                            {{ degree.project.reference.label }}
                                            <span aria-hidden="true"
                                                class="material-symbols-outlined text-[0.9375rem]!">north_east</span>
                                        </a>
                                    </div>
                                    <p v-if="degree.project.reference.note"
                                        class="mt-2 text-[0.625rem] leading-4 text-stone-600">
                                        {{ degree.project.reference.note }}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section v-if="degree.publish" class="mt-auto">
                            <div class="education-subheading mb-2.5 flex items-center gap-2">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1rem]!">{{
                                    degree.publish.icon }}</span>
                                <h4>{{ degree.publish.sectionTitle }}</h4>
                            </div>

                            <a :href="degree.publish.url" target="_blank" rel="noopener noreferrer"
                                class="education-publication group/publication flex items-center gap-3 rounded-xl p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                <img :src="degree.publish.cover" :alt="degree.publish.title"
                                    class="h-14 w-10 shrink-0 object-cover" loading="lazy">
                                <span class="min-w-0 flex-1 text-xs font-bold leading-5 text-stone-800">
                                    <span
                                        class="mr-1.5 inline-flex align-middle rounded-full bg-[#c3e2f8] px-2 py-0.5 text-[0.5625rem] font-extrabold leading-4 text-stone-800">
                                        {{ degree.publish.authorRole }}
                                    </span><span>{{ degree.publish.title }}</span>
                                </span>
                                <span aria-hidden="true"
                                    class="material-symbols-outlined shrink-0 text-[1.0625rem]! text-stone-500">north_east</span>
                            </a>
                        </section>
                    </div>
                    </div>
                    <div class="scroll-cue" aria-hidden="true">
                        <span class="material-symbols-outlined">expand_more</span>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="selectedProject"
                class="fixed inset-0 z-[999] flex items-center justify-center bg-stone-950/55 backdrop-blur-[2px] lg:px-6 lg:py-8"
                @click.self="closeProject">
                <section ref="dialogRef" :data-accent="selectedProjectAccent"
                    class="education-dialog flex h-dvh w-full max-w-5xl flex-col overflow-hidden outline-none lg:h-auto lg:max-h-[88dvh]"
                    role="dialog" aria-modal="true" aria-labelledby="education-dialog-title" tabindex="-1">
                    <header
                        class="education-dialog-header flex shrink-0 items-center justify-between gap-3 p-4 lg:gap-6 lg:px-6 lg:py-5">
                        <div class="flex min-w-0 items-center gap-3">
                            <span
                                class="education-dialog-icon flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full">
                                <span aria-hidden="true"
                                    class="material-symbols-outlined material-symbol-filled text-xl!">
                                    {{ selectedProject.icon }}
                                </span>
                            </span>
                            <div class="min-w-0">
                                <p class="education-kicker">{{ selectedDegree?.level }} / {{ selectedDegree?.school }}
                                </p>
                                <h3 id="education-dialog-title"
                                    class="mt-0.5 text-lg font-bold leading-tight tracking-[-0.03em] text-stone-950 lg:text-2xl">
                                    {{ selectedProject.title }}
                                </h3>
                            </div>
                        </div>

                        <button ref="closeButtonRef" type="button"
                            class="education-dialog-close flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-stone-950 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-stone-950"
                            :aria-label="currentHeader.closeDialog" @click="closeProject">
                            <span class="material-symbols-outlined text-xl">close</span>
                        </button>
                    </header>

                    <div class="scroll-affordance-frame min-h-0 flex-1">
                        <div v-scroll-affordance
                            class="education-dialog-body scroll-affordance no-scrollbar min-h-0 flex-1 space-y-6 overflow-y-auto p-4 lg:p-6">
                            <p class="text-sm leading-6 text-stone-600">
                                {{ selectedProject.summary }}
                            </p>

                            <div class="education-dialog-list">
                                <article v-for="(detail, detailIndex) in selectedProject.details" :key="detail.title"
                                    class="education-dialog-row">
                                    <h5 class="education-item-title text-sm font-extrabold leading-5 text-stone-950"
                                        :data-step="String(detailIndex + 1).padStart(2, '0')">
                                        {{ detail.title }}
                                    </h5>
                                    <p class="mt-1 text-sm leading-6 text-stone-600">
                                        {{ detail.description }}
                                    </p>
                                </article>
                            </div>
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
import { education, educationHeader } from '~/data/education'

const { locale } = useLocale()

type DegreeKey = 'bachelor' | 'master'

const currentHeader = computed(() => educationHeader[locale.value])
const degrees = computed(() => education[locale.value])

const degreeAccent = (index: number) => index === 0 ? 'yellow' : 'blue'

const selectedDegreeKey = ref<DegreeKey | null>(null)

const selectedDegree = computed(() => {
    return degrees.value.find((item) => item.key === selectedDegreeKey.value) ?? null
})

const selectedProject = computed(() => {
    return selectedDegree.value?.project ?? null
})

const selectedProjectAccent = computed(() => {
    if (!selectedDegreeKey.value) return 'yellow'
    return degreeAccent(degrees.value.findIndex((item) => item.key === selectedDegreeKey.value))
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

const openProject = async (key: DegreeKey) => {
    lastFocusedElement.value =
        document.activeElement instanceof HTMLElement ? document.activeElement : null
    selectedDegreeKey.value = key
    setBackgroundInert(true)

    await nextTick()
    closeButtonRef.value?.focus()
}

const closeProject = async () => {
    if (!selectedDegreeKey.value) return

    selectedDegreeKey.value = null
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
.education-page {
    --scroll-affordance-surface: var(--education-paper);
    --scroll-affordance-color: #6d4a9e;
    --education-paper: #fffdf7;
    --education-ink: #26201a;
    --education-yellow: #ffdc5d;
    --education-blue: #9fd0f3;
    --education-purple: #e2d1f8;
}

.education-section-title::after {
    content: "";
    display: block;
    width: 7rem;
    height: 4px;
    margin-top: 0.55rem;
    border-radius: 999px;
    background: var(--education-yellow);
}

.education-card {
    --scroll-affordance-surface: var(--education-paper);
    --scroll-affordance-color: #6d4a9e;
    overflow: hidden;
    border: 2px solid var(--education-ink);
    border-radius: 14px;
    background: var(--education-paper);
    box-shadow: 4px 4px 1px #6b6560;
}

.education-card-scroll {
    display: flex;
    min-height: 0;
    flex: 1;
    flex-direction: column;
}

.education-card-scroll:focus-visible {
    border-radius: 10px;
    outline: 2px solid #6d4a9e;
    outline-offset: -4px;
}

.education-card-header {
    border-bottom: 1px dashed #8c8174;
}

.education-level,
.education-date {
    /* border: 1.5px solid #5a3d8a; */
}

.education-card[data-accent="yellow"] .education-level {
    background: var(--education-yellow);
}

.education-card[data-accent="blue"] .education-level {
    background: var(--education-blue);
}

.education-project-action[data-accent="yellow"] {
    background: var(--education-yellow);
    border-color: #c49a2c;
}

.education-project-action[data-accent="blue"] {
    background: var(--education-blue);
    border-color: #639fce;
}

.education-date {
    background: var(--education-purple);
}

.education-school {
    border: 1.5px solid #ddd;
    background: #fff;
}

.education-school-logo {
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

.education-subheading {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #655d53;
}

.education-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #655d53;
}

.education-course {
    border: 1.5px solid var(--education-yellow);
    background: #fff0b8;
}

.education-project-card,
.education-publication {
    border: 1.5px solid var(--education-ink);
    background: #fff;
}

.education-project-action {
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.education-project-action:hover {
    transform: translateY(-1px) translateX(1px);
    box-shadow: 3px 3px 1px #6b6560;
}

.education-project-links {
    background: color-mix(in srgb, var(--education-purple) 14%, #fff);
}

.education-project-link {
    border: 1.5px solid var(--education-ink);
    transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

.education-project-link-primary {
    background: var(--bg-heavy);
    color: #fffdf7;
    border-color: #5a3d8a;
    box-shadow: 2px 2px 1px #6b6560;
}

.education-project-link-primary:hover {
    transform: translateY(-1px);
    box-shadow: 3px 3px 1px #6b6560;
    background: #5f3f8c;
}

.education-project-link-secondary {
    background: #fff;
    border-color: #5a3d8a;
    color: #5a3d8a;
    box-shadow: 2px 2px 1px #6b6560;
}

.education-project-link-secondary:hover {
    transform: translateY(-1px);
    box-shadow: 3px 3px 1px #6b6560;
}

.education-dialog {
    --scroll-affordance-surface: var(--education-paper);
    --scroll-affordance-color: #6d4a9e;
    --education-paper: #fffdf7;
    --education-ink: #26201a;
    --education-yellow: #ffdc5d;
    --education-blue: #9fd0f3;
    --education-purple: #e2d1f8;
    border: 2px solid var(--education-ink);
    background: var(--education-paper);
    box-shadow: 8px 8px 1px #6b6560;
}

.education-dialog-header {
    border-bottom: 2px solid var(--education-ink);
    background: var(--education-paper);
}

.education-dialog-icon,
.education-detail-marker {
    border: 2px solid var(--education-ink);
    color: var(--education-ink);
}

.education-dialog[data-accent="yellow"] .education-dialog-icon,
.education-dialog[data-accent="yellow"] .education-detail-marker,
.education-dialog[data-accent="yellow"] .education-item-title::before {
    background: var(--education-yellow);
}

.education-dialog[data-accent="blue"] .education-dialog-icon,
.education-dialog[data-accent="blue"] .education-detail-marker,
.education-dialog[data-accent="blue"] .education-item-title::before {
    background: var(--education-blue);
}

.education-dialog[data-accent="yellow"] .education-dialog-icon {
    border-color: #c49a2c;
}

.education-dialog[data-accent="blue"] .education-dialog-icon {
    border-color: #639fce;
}

.education-detail-marker {
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

.education-dialog-close {
    border: 2px solid var(--education-ink);
    background: var(--education-paper);
    box-shadow: 3px 3px 1px #6b6560;
}

.education-dialog-close:hover {
    background: #5a3d8a;
    color: #fffdf7;
}

.education-dialog-body {
    background: var(--education-paper);
}

.education-dialog-list {
    overflow: hidden;
    border: 2px solid var(--education-ink);
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.education-dialog-row {
    padding: 1rem 1.125rem;
}

.education-dialog-row+.education-dialog-row {
    border-top: 1px dashed #8c8174;
}

.education-item-title {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.education-item-title::before {
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

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 220ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.education-publication {
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.education-publication:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 1px #6b6560;
}

@media (min-width: 1024px) {
    .education-card {
        height: 100%;
        min-height: 0;
        max-height: 100%;
        overflow: hidden;
    }

    .education-card-scroll {
        overflow-y: auto;
        overscroll-behavior: contain;
    }

    .education-dialog {
        border-radius: 16px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition-duration: 1ms;
    }
}
</style>

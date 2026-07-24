<template>
    <div
        class="education-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-y-auto lg:pb-6 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="education-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[15px] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div class="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-5">
            <article v-for="(degree, degreeIndex) in degrees" :key="degree.key"
                class="education-card flex min-w-0 flex-col" :data-accent="degreeAccent(degreeIndex)">
                <header class="education-card-header p-4 lg:p-5">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span
                            class="education-level inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold text-stone-950">
                            <span aria-hidden="true"
                                class="material-symbols-outlined material-symbol-filled text-[15px]!">school</span>
                            {{ degree.level }}
                        </span>
                        <span
                            class="education-date inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold text-stone-950">
                            <span aria-hidden="true"
                                class="material-symbols-outlined text-[14px]!">calendar_today</span>
                            {{ degree.period }}
                        </span>
                    </div>

                    <h3
                        class="mt-4 text-xl font-extrabold leading-snug tracking-[-0.025em] text-stone-950 lg:text-[22px]">
                        {{ degree.major }}
                    </h3>

                    <a :href="degree.website" target="_blank" rel="noopener noreferrer"
                        class="education-school mt-3 flex items-center gap-3 rounded-xl p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                        <span aria-hidden="true" class="education-school-logo h-10 w-10 shrink-0"
                            :style="{ backgroundImage: `url(${degree.logo})` }" />
                        <span class="min-w-0 flex-1">
                            <span class="block truncate text-sm font-extrabold text-stone-950">{{ degree.school
                            }}</span>
                            <span class="mt-0.5 block text-xs font-semibold text-stone-500">{{ degree.location }}</span>
                        </span>
                        <span aria-hidden="true"
                            class="material-symbols-outlined text-[17px]! text-stone-500">north_east</span>
                    </a>
                </header>

                <div class="flex flex-1 flex-col gap-4 p-4 lg:p-5">
                    <section v-if="degree.curriculum">
                        <div class="education-subheading mb-2.5 flex items-center gap-2">
                            <span aria-hidden="true" class="material-symbols-outlined text-[16px]!">{{
                                degree.curriculum.icon }}</span>
                            <h4>{{ degree.curriculum.sectionTitle }}</h4>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="item in degree.curriculum.items" :key="item"
                                class="education-course rounded-full px-2.5 py-1 text-[11px] font-bold text-stone-700">
                                {{ item }}
                            </span>
                        </div>
                    </section>

                    <section class="education-project-section">
                        <div class="education-subheading mb-2.5 flex items-center gap-2">
                            <span aria-hidden="true" class="material-symbols-outlined text-[16px]!">{{
                                degree.project.icon }}</span>
                            <h4>{{ degree.project.sectionTitle }}</h4>
                        </div>

                        <div class="education-project-card overflow-hidden rounded-xl">
                            <button type="button" class="group/project w-full cursor-pointer p-4 text-left"
                                :aria-expanded="expandedDegree === degree.key" @click="toggleDegree(degree.key)">
                                <span class="min-w-0">
                                    <span class="block text-sm font-extrabold leading-5 text-stone-950 lg:text-[15px]">
                                        {{ degree.project.title }}
                                    </span>
                                    <span class="mt-1.5 block text-xs leading-5 text-stone-600">
                                        {{ degree.project.summary }}
                                    </span>
                                </span>

                                <span class="flex items-end justify-between gap-3">
                                    <span class="block text-[10px] font-extrabold text-stone-700">
                                        {{ expandedDegree === degree.key ? currentHeader.collapse : currentHeader.expand
                                        }}
                                    </span>
                                    <span aria-hidden="true"
                                        class="education-expand flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                                        <span class="education-expand-chevron material-symbols-outlined text-[18px]!"
                                            :class="expandedDegree === degree.key ? 'rotate-180' : ''">keyboard_arrow_down</span>
                                    </span>

                                </span>
                            </button>

                            <Transition name="expand">
                                <div v-if="expandedDegree === degree.key"
                                    class="education-project-expand">
                                    <div class="education-project-expand-inner">
                                        <div
                                            class="education-project-details border-t border-dashed border-stone-400 px-4 py-3">
                                            <article v-for="(detail, detailIndex) in degree.project.details"
                                                :key="detail.title" class="education-detail-row flex gap-2.5 py-2">
                                                <span class="education-detail-number shrink-0">
                                                    {{ String(detailIndex + 1).padStart(2, '0') }}
                                                </span>
                                                <p class="text-xs leading-5 text-stone-600">
                                                    <strong class="text-stone-950">{{ detail.title }}</strong><br>
                                                    {{ detail.description }}
                                                </p>
                                            </article>

                                            <a v-if="degree.project.reference" :href="degree.project.reference.url"
                                                target="_blank" rel="noopener noreferrer"
                                                class="education-project-reference mt-3 flex items-center gap-3 rounded-lg p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                                <span class="min-w-0 flex-1">
                                                    <span class="block text-xs font-extrabold text-stone-950">
                                                        {{ degree.project.reference.label }}
                                                    </span>
                                                    <span class="mt-1 block text-[10px] leading-4 text-stone-600">
                                                        {{ degree.project.reference.note }}
                                                    </span>
                                                </span>
                                                <span aria-hidden="true"
                                                    class="material-symbols-outlined shrink-0 text-[17px]! text-stone-600">north_east</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </section>

                    <section v-if="degree.publish" class="mt-auto">
                        <div class="education-subheading mb-2.5 flex items-center gap-2">
                            <span aria-hidden="true" class="material-symbols-outlined text-[16px]!">{{
                                degree.publish.icon }}</span>
                            <h4>{{ degree.publish.sectionTitle }}</h4>
                        </div>

                        <a :href="degree.publish.url" target="_blank" rel="noopener noreferrer"
                            class="education-publication group/publication flex items-center gap-3 rounded-xl p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                            <img :src="degree.publish.cover" :alt="degree.publish.title"
                                class="h-14 w-10 shrink-0 object-cover" loading="lazy">
                            <span class="min-w-0 flex-1 text-xs font-bold leading-5 text-stone-800">
                                <span
                                    class="mr-1.5 inline-flex align-middle rounded-full bg-[#e2d1f8] px-2 py-0.5 text-[9px] font-extrabold leading-4 text-stone-800">
                                    {{ degree.publish.authorRole }}
                                </span><span>{{ degree.publish.title }}</span>
                            </span>
                            <span aria-hidden="true"
                                class="material-symbols-outlined shrink-0 text-[17px]! text-stone-500">north_east</span>
                        </a>
                    </section>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { education, educationHeader } from '~/data/education'

const { locale } = useLocale()

type DegreeKey = 'bachelor' | 'master'

const expandedDegree = ref<DegreeKey | null>(null)

const currentHeader = computed(() => educationHeader[locale.value])
const degrees = computed(() => education[locale.value])

const degreeAccent = (index: number) => index === 0 ? 'yellow' : 'blue'

const toggleDegree = (key: DegreeKey) => {
    expandedDegree.value = expandedDegree.value === key ? null : key
}
</script>

<style scoped>
.education-page {
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
    border: 2px solid var(--education-ink);
    border-radius: 14px;
    background: var(--education-paper);
    box-shadow: 4px 4px 0 var(--education-ink);
}

.education-card-header {
    border-bottom: 1px dashed #8c8174;
}

.education-level,
.education-date,
.education-expand,
.education-detail-number {
    border: 1.5px solid var(--education-ink);
    box-shadow: 1.5px 1.5px 0 var(--education-ink);
}

.education-card[data-accent="yellow"] .education-level,
.education-card[data-accent="yellow"] .education-expand,
.education-card[data-accent="yellow"] .education-detail-number {
    background: var(--education-yellow);
}

.education-card[data-accent="blue"] .education-level,
.education-card[data-accent="blue"] .education-expand,
.education-card[data-accent="blue"] .education-detail-number {
    background: var(--education-blue);
}

.education-date {
    background: var(--education-purple);
}

.education-school {
    border: 1.5px solid var(--education-ink);
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
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #655d53;
}

.education-course {
    border: 1.5px solid var(--education-ink);
    background: #fff;
}

.education-project-card,
.education-publication {
    border: 1.5px solid var(--education-ink);
    background: #fff;
}

.education-project-reference {
    border: 1.5px solid var(--education-ink);
    background: #fff;
    box-shadow: 1.5px 1.5px 0 var(--education-ink);
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.education-project-reference:hover {
    transform: translateY(-1px);
    box-shadow: 2.5px 2.5px 0 var(--education-ink);
}

.education-project-details {
    background: color-mix(in srgb, var(--education-purple) 26%, #fff);
}

.education-project-expand {
    display: grid;
    grid-template-rows: 1fr;
}

.education-project-expand>.education-project-expand-inner {
    min-height: 0;
    overflow: hidden;
}

.expand-enter-active,
.expand-leave-active {
    overflow: hidden;
    transition: grid-template-rows 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease;
}

.expand-enter-from,
.expand-leave-to {
    grid-template-rows: 0fr;
    opacity: 0;
}

.education-expand-chevron {
    transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.education-detail-row+.education-detail-row {
    border-top: 1px dashed #b2a79a;
}

.education-detail-number {
    display: inline-flex;
    min-width: 1.75rem;
    height: 1.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 9px;
    font-weight: 800;
    line-height: 1;
}

.education-publication {
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.education-publication:hover {
    transform: translateY(-2px);
    box-shadow: 2px 2px 0 var(--education-ink);
}

@media (min-width: 1024px) {
    .education-card {
        min-height: 31.5rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .expand-enter-active,
    .expand-leave-active,
    .education-expand-chevron {
        transition-duration: 1ms;
    }
}
</style>

<template>
    <div
        class="skills-page no-scrollbar flex min-h-full flex-col gap-4 p-3 lg:h-full lg:gap-3.5 lg:overflow-visible lg:pb-0 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="skills-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[0.9375rem] lg:leading-6">
                {{ currentHeader.description }}
            </p>
            <div class="skill-legend mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[0.625rem] font-bold text-stone-600"
                aria-label="Skill source legend">
                <span v-for="entry in legendEntries" :key="entry.source" class="inline-flex items-center gap-1.5">
                    <span class="skill-legend-dot" :class="`skill-legend-${entry.source}`" aria-hidden="true" />
                    <span>{{ entry.label }}</span>
                    <span class="font-medium text-stone-500">— {{ entry.legend }}</span>
                </span>
            </div>
        </header>

        <div
            class="skills-scroll no-scrollbar -mr-2 flex min-h-0 flex-col overflow-x-hidden pr-2 lg:flex-1 lg:overflow-visible lg:pb-1">
            <article class="skill-map">
                <div v-scroll-affordance class="skill-map-scroll scroll-affordance no-scrollbar" tabindex="0"
                    :aria-label="currentHeader.title">
                    <div v-for="(group, index) in currentGroups" :key="group.key" class="skill-map-row"
                        :data-accent="skillAccent(index)">
                        <div class="skill-map-meta">
                            <span
                                class="skill-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-950">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1.125rem]!">{{ group.icon
                                }}</span>
                            </span>
                            <h3 class="skill-map-title min-w-0">{{ group.title }}</h3>
                        </div>

                        <ul class="skill-map-list" :aria-label="group.title">
                            <li v-for="item in group.items" :key="item.name"
                                class="skill-item inline-flex w-fit max-w-full items-center gap-1.5 text-xs font-semibold text-stone-800"
                                :class="skillItemClass(item.source)">
                                <span class="skill-dot h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                                <span class="min-w-0 leading-4">{{ item.name }}</span>
                                <span
                                    class="skill-source-label ml-auto shrink-0 rounded-[3px] px-1 py-0.5 text-[0.5rem] font-bold">
                                    {{ sourceLabel(item.source) }}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="skill-map-row skill-map-language-row" data-accent="green">
                        <div class="skill-map-meta">
                            <span
                                class="skill-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-950">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1.125rem]!">translate</span>
                            </span>
                            <h3 class="skill-map-title min-w-0">{{ currentHeader.languagesTitle }}</h3>
                        </div>

                        <ul class="skill-map-list" :aria-label="currentHeader.languagesTitle">
                            <li v-for="language in currentLanguages" :key="language.key"
                                class="skill-language-item inline-flex w-fit max-w-full items-center gap-1.5">
                                <span class="skill-language-dot h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                                <span class="skill-language-name text-xs font-extrabold text-stone-950">
                                    {{ language.name }}
                                </span>
                                <span
                                    class="skill-language-credential rounded-full px-1.5 py-0.5 text-[0.5rem] font-extrabold">
                                    {{ language.credential }}
                                </span>
                                <span v-if="language.note" class="skill-language-note text-[0.625rem] font-semibold text-stone-600">
                                    {{ language.note }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="scroll-cue" aria-hidden="true">
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { languageSkills } from '~/data/site'
import { skillGroups, skillHeader, type SkillSource } from '~/data/skills'

usePortfolioPage('skills')

const { locale } = useLocale()

const currentHeader = computed(() => skillHeader[locale.value])
const currentGroups = computed(() => skillGroups[locale.value])
const currentLanguages = computed(() => {
    return languageSkills.map((item) => ({
        key: item.key,
        ...item[locale.value],
    }))
})

const legendEntries = computed(() => {
    const header = currentHeader.value
    return [
        { source: 'core', label: header.coreLabel, legend: header.coreLegend },
        { source: 'personal', label: header.personalLabel, legend: header.personalLegend },
        { source: 'supporting', label: header.supportingLabel, legend: header.supportingLegend },
    ] satisfies { source: SkillSource, label: string, legend: string }[]
})

const sourceLabel = (source: SkillSource) => {
    return legendEntries.value.find(entry => entry.source === source)?.label ?? ''
}

const skillItemClass = (source: SkillSource) => `skill-item-${source}`
const skillAccent = (index: number) => ['yellow', 'pink', 'blue', 'purple', 'orange'][index] ?? 'yellow'
</script>

<style scoped>
.skills-page {
    --skill-paper: #fffdf7;
    --skill-ink: #26201a;
    --skill-yellow: #ffdc5d;
    --skill-pink: #efb0c6;
    --skill-blue: #9fd0f3;
    --skill-purple: #e2d1f8;
    --skill-green: #c8e5d0;
    --skill-orange: #ffd0a8;
}

.skills-section-title::after {
    content: "";
    display: block;
    width: 7rem;
    height: 4px;
    margin-top: 0.55rem;
    border-radius: 999px;
    background: var(--skill-yellow);
}

.skill-legend-dot {
    width: 0.45rem;
    height: 0.45rem;
    border: 1px solid var(--skill-ink);
    border-radius: 999px;
}

.skill-legend-core {
    background: var(--skill-yellow);
}

.skill-legend-personal {
    border-color: #65428c;
    background: #8460b9;
}

.skill-legend-supporting {
    border-color: #8c8174;
    background: #b9b0a4;
}

.skill-icon {
    border: 1.5px solid #5a3d8a;
}

.skill-map {
    --scroll-affordance-surface: var(--skill-paper);
    --scroll-affordance-color: #6d4a9e;
    display: flex;
    min-height: 0;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    border: 2px solid var(--skill-ink);
    border-radius: 16px;
    background: var(--skill-paper);
    box-shadow: 4px 4px 1px #6b6560;
}

.skill-map-scroll {
    display: flex;
    min-height: 0;
    flex: 1 1 auto;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
}

.skill-map-scroll:focus-visible {
    border-radius: 14px;
    outline: 2px solid #6d4a9e;
    outline-offset: -4px;
}

.skill-map-row {
    display: grid;
    flex: 1 0 auto;
    grid-template-columns: minmax(13rem, 17.5rem) minmax(0, 1fr);
    align-items: center;
    column-gap: 1.25rem;
    padding: 0.9rem 1.15rem;
    border-bottom: 1px solid #ded7cd;
}

.skill-map-row:last-child {
    border-bottom: 0;
}

.skill-map-meta {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 0.75rem;
}

.skill-map-title {
    color: #1f1a16;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.01em;
    line-height: 1.35;
}

.skill-map-list {
    display: flex;
    min-width: 0;
    flex-wrap: wrap;
    align-content: center;
    column-gap: 0.85rem;
    row-gap: 0.6rem;
}

.skill-map-row[data-accent="yellow"] .skill-icon {
    background: var(--skill-yellow);
}

.skill-map-row[data-accent="pink"] .skill-icon {
    background: var(--skill-pink);
}

.skill-map-row[data-accent="blue"] .skill-icon {
    background: var(--skill-blue);
}

.skill-map-row[data-accent="purple"] .skill-icon {
    background: var(--skill-purple);
}

.skill-map-row[data-accent="green"] .skill-icon {
    background: var(--skill-green);
}

.skill-map-row[data-accent="orange"] .skill-icon {
    background: var(--skill-orange);
}

.skill-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.5625rem;
    font-weight: 800;
    letter-spacing: 0.17em;
    line-height: 1.3;
    color: #655d53;
}

.skill-item {
    border-bottom: 1px solid #c5bcb1;
    border-radius: 0;
    padding: 0.15rem 0.2rem 0.2rem 0;
    color: #403930;
    font-weight: 600;
    background: transparent;
    transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.skill-item:hover {
    border-color: #8f8376;
    border-radius: 0.2rem;
    background: #f8f3ec;
    transform: translateY(-1px);
}

.skill-dot {
    border: 1px solid #8c8174;
    background: #b9b0a4;
}

.skill-item-core .skill-dot {
    border-color: #c19200;
    background: #e7b900;
}

.skill-item-personal .skill-dot {
    border-color: #65428c;
    background: #8460b9;
}

.skill-item-supporting .skill-dot {
    border-color: #8c8174;
    background: #b9b0a4;
}

.skill-source-label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    border-radius: 3px;
    letter-spacing: 0.08em;
    line-height: 1.1;
    color: #62594f;
    background: #f2eee8;
}

.skill-item-personal .skill-source-label {
    color: #5a3d8a;
    background: #f1ebf8;
}

.skill-item-supporting .skill-source-label {
    color: #8c8174;
    background: #f2eee8;
}

.skill-language-item {
    border-bottom: 1px solid #c5bcb1;
    padding: 0.15rem 0.2rem 0.2rem 0;
    background: transparent;
}

.skill-language-dot {
    border: 1px solid #5f9a6c;
    background: #a9d7b1;
}

.skill-language-credential {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    letter-spacing: 0.06em;
    color: #5f765f;
    background: #edf5ed;
}

@media (max-width: 767px) {
    .skill-map {
        flex: initial;
        box-shadow: 3px 3px 1px #6b6560;
    }

    .skill-map-row {
        display: flex;
        flex: initial;
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
        padding: 0.9rem;
    }
}
</style>

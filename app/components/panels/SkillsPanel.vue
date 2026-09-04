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
                <span class="inline-flex items-center gap-1.5">
                    <span class="skill-legend-dot skill-legend-core" aria-hidden="true" />
                    <span>{{ currentHeader.coreLabel }}</span>
                    <span class="font-medium text-stone-500">— {{ currentHeader.coreLegend }}</span>
                </span>
                <span class="inline-flex items-center gap-1.5">
                    <span class="skill-legend-dot skill-legend-petnido" aria-hidden="true" />
                    <span>{{ currentHeader.projectLabel }}</span>
                    <span class="font-medium text-stone-500">— {{ currentHeader.projectLegend }}</span>
                </span>
                <span class="inline-flex items-center gap-1.5">
                    <span class="skill-legend-dot skill-legend-portfolio" aria-hidden="true" />
                    <span>{{ currentHeader.portfolioLabel }}</span>
                    <span class="font-medium text-stone-500">— {{ currentHeader.portfolioLegend }}</span>
                </span>
                <span class="inline-flex items-center gap-1.5">
                    <span class="skill-legend-dot skill-legend-supporting" aria-hidden="true" />
                    <span>{{ currentHeader.supportingLabel }}</span>
                    <span class="font-medium text-stone-500">— {{ currentHeader.supportingLegend }}</span>
                </span>
            </div>
        </header>

        <div class="skills-scroll no-scrollbar -mr-2 flex min-h-0 flex-col overflow-x-hidden pr-2 lg:flex-1 lg:overflow-visible lg:pb-1">
            <article class="skill-map">
                <div v-for="(group, index) in currentGroups" :key="group.key"
                    class="skill-map-row" :data-accent="skillAccent(index)">
                    <div class="skill-map-meta">
                        <span class="skill-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-950">
                            <span aria-hidden="true" class="material-symbols-outlined text-[1.125rem]!">{{ group.icon }}</span>
                        </span>
                        <div class="min-w-0">
                            <h3 class="skill-map-title">{{ group.title }}</h3>
                            <p class="skill-map-description">{{ group.description }}</p>
                        </div>
                    </div>

                    <ul class="skill-map-list" :aria-label="group.title">
                        <li v-for="item in group.items" :key="item.name"
                            class="skill-item inline-flex w-fit max-w-full items-center gap-1.5 text-xs font-semibold text-stone-800"
                            :class="skillItemClass(item.source)">
                            <span class="skill-dot h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                            <span class="min-w-0 leading-4">{{ item.name }}</span>
                            <span class="skill-source-label ml-auto shrink-0 rounded-[3px] px-1 py-0.5 text-[0.5rem] font-bold">
                                {{ sourceLabel(item.source) }}
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="skill-map-row skill-map-language-row" data-accent="green">
                    <div class="skill-map-meta">
                        <span class="skill-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-950">
                            <span aria-hidden="true" class="material-symbols-outlined text-[1.125rem]!">translate</span>
                        </span>
                        <div class="min-w-0">
                            <h3 class="skill-map-title">{{ currentHeader.languagesTitle }}</h3>
                        </div>
                    </div>

                    <ul class="skill-map-list" :aria-label="currentHeader.languagesTitle">
                        <li v-for="language in currentLanguages" :key="language.key"
                            class="skill-language-item inline-flex w-fit max-w-full items-center gap-1.5">
                            <span class="skill-language-dot h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                            <span class="skill-language-name text-xs font-extrabold text-stone-950">
                                {{ language.name }}
                            </span>
                            <span class="skill-language-credential rounded-full px-1.5 py-0.5 text-[0.5rem] font-extrabold">
                                {{ language.credential }}
                            </span>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { languageSkills } from '~/data/site'
import { skillGroups, skillHeader, type SkillSource } from '~/data/skills'

const { locale } = useLocale()

const currentHeader = computed(() => skillHeader[locale.value])
const currentGroups = computed(() => skillGroups[locale.value])
const currentLanguages = computed(() => {
    return languageSkills.map((item) => ({
        key: item.key,
        ...item[locale.value],
    }))
})

const sourceLabel = (source: SkillSource) => {
    const labels: Record<SkillSource, string> = {
        core: currentHeader.value.coreLabel,
        petnido: currentHeader.value.projectLabel,
        portfolio: currentHeader.value.portfolioLabel,
        supporting: currentHeader.value.supportingLabel,
    }
    return labels[source]
}

const skillItemClass = (source: SkillSource) => `skill-item-${source}`
const skillAccent = (index: number) => ['yellow', 'pink', 'blue', 'purple', 'green'][index] ?? 'yellow'
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

.skill-legend-petnido {
    border-color: #65428c;
    background: #8460b9;
}

.skill-legend-portfolio {
    border-color: #8561b0;
    background: #bba1e3;
}

.skill-legend-supporting {
    border-color: #8c8174;
    background: #b9b0a4;
}

.skill-icon {
    border: 1.5px solid #5a3d8a;
}

.skill-map {
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

.skill-map-row {
    display: grid;
    min-height: 0;
    flex: 1 1 0;
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
    align-items: flex-start;
    gap: 0.75rem;
}

.skill-map-language-row .skill-map-meta {
    align-items: center;
}

.skill-map-language-row .skill-map-title {
    margin-top: 0;
}

.skill-map-title {
    margin-top: 0.15rem;
    color: #1f1a16;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.01em;
    line-height: 1.35;
}

.skill-map-description {
    margin-top: 0.35rem;
    color: #655d53;
    font-size: 0.6875rem;
    line-height: 1.5;
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

.skill-item-petnido .skill-dot {
    border-color: #65428c;
    background: #8460b9;
}

.skill-item-portfolio .skill-dot {
    border-color: #8561b0;
    background: #bba1e3;
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

.skill-item-petnido .skill-source-label {
    color: #5a3d8a;
    background: #f1ebf8;
}

.skill-item-portfolio .skill-source-label {
    color: #6d4a9e;
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

    .skill-map-description {
        max-width: 42rem;
    }
}
</style>

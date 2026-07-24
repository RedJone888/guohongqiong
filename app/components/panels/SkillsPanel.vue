<template>
    <div
        class="skills-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-y-auto lg:pb-6 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="skills-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[15px] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div class="grid gap-4 md:grid-cols-2 lg:gap-5">
            <article v-for="(group, index) in currentGroups" :key="group.key" class="skill-card flex min-w-0 flex-col p-4 lg:p-5"
                :data-accent="skillAccent(index)">
                <header class="flex items-start gap-3 border-b border-dashed border-stone-400 pb-4">
                    <span class="skill-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-stone-950">
                        <span aria-hidden="true" class="material-symbols-outlined text-[20px]!">{{ group.icon }}</span>
                    </span>
                    <div class="min-w-0 flex-1">
                        <p class="skill-kicker">{{ currentHeader.categoryLabel }}</p>
                        <h3 class="mt-1 text-lg font-extrabold leading-6 text-stone-950 lg:text-xl">
                            {{ group.title }}
                        </h3>
                    </div>
                    <span class="skill-number shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold text-stone-950">
                        {{ String(index + 1).padStart(2, '0') }}
                    </span>
                </header>

                <p class="mt-4 min-h-[3rem] text-xs leading-5 text-stone-600 lg:text-[13px]">
                    {{ group.description }}
                </p>

                <ul class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" :aria-label="group.title">
                    <li v-for="item in group.items" :key="item.name"
                        class="skill-item flex min-w-0 items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-bold text-stone-800"
                        :class="item.core ? 'skill-item-core' : ''">
                        <span class="skill-dot h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                        <span class="min-w-0 leading-4">{{ item.name }}</span>
                        <span v-if="item.core" class="skill-core ml-auto shrink-0 text-[8px] font-extrabold">
                            {{ currentHeader.coreLabel }}
                        </span>
                    </li>
                </ul>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { skillGroups, skillHeader } from '~/data/skills'

const { locale } = useLocale()

const currentHeader = computed(() => skillHeader[locale.value])
const currentGroups = computed(() => skillGroups[locale.value])
const skillAccent = (index: number) => ['yellow', 'pink', 'blue', 'purple'][index] ?? 'yellow'
</script>

<style scoped>
.skills-page {
    --skill-paper: #fffdf7;
    --skill-ink: #26201a;
    --skill-yellow: #ffdc5d;
    --skill-pink: #efb0c6;
    --skill-blue: #9fd0f3;
    --skill-purple: #e2d1f8;
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

.skill-card {
    border: 2px solid var(--skill-ink);
    border-radius: 14px;
    background: var(--skill-paper);
    box-shadow: 4px 4px 0 var(--skill-ink);
}

.skill-icon,
.skill-number,
.skill-item {
    border: 1.5px solid var(--skill-ink);
}

.skill-icon,
.skill-number {
    box-shadow: 1.5px 1.5px 0 var(--skill-ink);
}

.skill-card[data-accent="yellow"] .skill-icon,
.skill-card[data-accent="yellow"] .skill-number,
.skill-card[data-accent="yellow"] .skill-item-core {
    background: var(--skill-yellow);
}

.skill-card[data-accent="pink"] .skill-icon,
.skill-card[data-accent="pink"] .skill-number,
.skill-card[data-accent="pink"] .skill-item-core {
    background: var(--skill-pink);
}

.skill-card[data-accent="blue"] .skill-icon,
.skill-card[data-accent="blue"] .skill-number,
.skill-card[data-accent="blue"] .skill-item-core {
    background: var(--skill-blue);
}

.skill-card[data-accent="purple"] .skill-icon,
.skill-card[data-accent="purple"] .skill-number,
.skill-card[data-accent="purple"] .skill-item-core {
    background: var(--skill-purple);
}

.skill-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.17em;
    line-height: 1.3;
    color: #655d53;
}

.skill-item {
    background: #fff;
}

.skill-dot {
    background: #8c8174;
}

.skill-item-core .skill-dot {
    background: var(--skill-ink);
}

.skill-core {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    letter-spacing: 0.08em;
    color: #544b42;
}

@media (max-width: 767px) {
    .skill-card {
        box-shadow: 3px 3px 0 var(--skill-ink);
    }
}
</style>

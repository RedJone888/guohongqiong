<template>
    <div
        class="projects-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-y-auto lg:pb-6 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="projects-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[15px] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div class="grid gap-5">
            <article v-for="(project, index) in currentProjects" :key="project.key"
                class="project-card" :data-accent="projectAccent(index)">
                <div class="project-content">
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="project-status project-status-live">
                            <span class="project-live-dot h-2 w-2 rounded-full" aria-hidden="true" />
                            {{ currentHeader.liveLabel }}
                        </span>
                        <span class="project-status project-status-repository">
                            <span aria-hidden="true" class="material-symbols-outlined text-[14px]!">code</span>
                            {{ currentHeader.repositoryLabel }}
                        </span>
                        <span class="project-type">{{ project.projectType }}</span>
                    </div>

                    <div class="mt-4">
                        <p class="project-kicker">{{ project.category }}</p>
                        <h3 class="mt-1.5 text-[1.65rem] font-extrabold leading-tight tracking-[-0.035em] text-stone-950 lg:text-[1.8rem]">
                            {{ project.title }}
                        </h3>
                    </div>

                    <div class="project-role mt-3 flex items-start gap-2.5 rounded-lg px-3 py-2.5">
                        <span aria-hidden="true" class="material-symbols-outlined mt-0.5 text-[17px]!">developer_mode_tv</span>
                        <div>
                            <p class="project-kicker">{{ currentHeader.roleLabel }}</p>
                            <p class="mt-1 text-xs font-bold leading-5 text-stone-800">{{ project.role }}</p>
                        </div>
                    </div>

                    <p class="mt-4 text-sm leading-6 text-stone-600">
                        {{ project.summary }}
                    </p>

                    <section class="mt-4 border-t border-dashed border-stone-400 pt-4">
                        <div class="mb-2.5 flex items-center gap-2">
                            <span aria-hidden="true" class="material-symbols-outlined text-[16px]!">task_alt</span>
                            <h4 class="project-subheading">{{ currentHeader.highlightLabel }}</h4>
                        </div>
                        <ul class="space-y-2">
                            <li v-for="highlight in project.highlights" :key="highlight"
                                class="project-highlight flex gap-2.5 text-xs leading-5 text-stone-600">
                                <span class="project-highlight-mark mt-1.5 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                                <span>{{ highlight }}</span>
                            </li>
                        </ul>
                    </section>

                    <div class="mt-4 border-t border-dashed border-stone-400 pt-4">
                        <p class="project-kicker mb-2">{{ currentHeader.stackLabel }}</p>
                        <ul class="flex flex-wrap gap-2" aria-label="Tech stack">
                            <li v-for="tech in project.stack" :key="tech"
                                class="project-tech rounded-full px-2.5 py-1 text-[10px] font-extrabold text-stone-700">
                                {{ tech }}
                            </li>
                        </ul>
                    </div>

                    <div class="mt-5 flex flex-wrap gap-2.5">
                        <a :href="project.url" target="_blank" rel="noopener noreferrer"
                            class="project-action project-action-primary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-xs font-extrabold text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                            {{ currentHeader.visitLabel }}
                            <span aria-hidden="true" class="material-symbols-outlined text-[16px]!">north_east</span>
                        </a>
                        <a :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer"
                            class="project-action project-action-secondary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-xs font-extrabold text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                            <span aria-hidden="true" class="material-symbols-outlined text-[16px]!">code</span>
                            {{ currentHeader.sourceLabel }}
                        </a>
                    </div>
                </div>

                <figure class="project-preview">
                    <figcaption class="project-preview-label">{{ project.previewLabel }}</figcaption>
                    <div class="project-preview-frame">
                        <img :src="project.image" :alt="project.imageAlt"
                            class="h-full w-full object-cover"
                            :style="{ objectPosition: project.imagePosition }">
                    </div>
                    <p class="project-preview-title" aria-hidden="true">{{ project.title }}</p>
                </figure>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { portfolioProjects, projectHeader } from '~/data/projects'

const { locale } = useLocale()

const currentHeader = computed(() => projectHeader[locale.value])
const currentProjects = computed(() => portfolioProjects[locale.value])
const projectAccent = (index: number) => index === 0 ? 'pink' : 'blue'
</script>

<style scoped>
.projects-page {
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

.project-card {
    display: grid;
    overflow: hidden;
    border: 2px solid var(--project-ink);
    border-radius: 14px;
    background: var(--project-paper);
    box-shadow: 4px 4px 0 var(--project-ink);
}

.project-content {
    min-width: 0;
    padding: 1.15rem;
}

.project-status,
.project-type {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.7rem;
    border: 1.5px solid var(--project-ink);
    border-radius: 999px;
    padding: 0.25rem 0.65rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.1em;
    line-height: 1;
    color: var(--project-ink);
}

.project-status {
    background: #fff;
}

.project-status-live {
    box-shadow: 1.5px 1.5px 0 var(--project-ink);
}

.project-status-repository {
    border-style: dashed;
}

.project-live-dot {
    background: var(--project-green);
    box-shadow: 0 0 0 3px rgba(93, 138, 98, 0.14);
}

.project-card[data-accent="pink"] .project-type,
.project-card[data-accent="pink"] .project-action-primary,
.project-card[data-accent="pink"] .project-highlight-mark {
    background: var(--project-pink);
}

.project-card[data-accent="blue"] .project-type,
.project-card[data-accent="blue"] .project-action-primary,
.project-card[data-accent="blue"] .project-highlight-mark {
    background: var(--project-blue);
}

.project-kicker,
.project-subheading,
.project-preview-label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    line-height: 1.35;
    color: #655d53;
}

.project-role {
    border: 1px solid #b8afa4;
    background: #f6f1e8;
}

.project-tech {
    border: 1.5px solid var(--project-ink);
    background: #fff;
}

.project-action {
    border: 1.5px solid var(--project-ink);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.project-action-primary {
    box-shadow: 1.5px 1.5px 0 var(--project-ink);
}

.project-action-secondary {
    background: #fff;
}

.project-action:hover {
    transform: translate(-1px, -1px);
    box-shadow: 2.5px 2.5px 0 var(--project-ink);
}

.project-action:active {
    transform: translate(1px, 1px);
    box-shadow: none;
}

.project-preview {
    position: relative;
    order: -1;
    min-width: 0;
    padding: 1rem;
    border-bottom: 2px solid var(--project-ink);
    background: #eee8dc;
}

.project-card[data-accent="pink"] .project-preview {
    background: #f8e7ed;
}

.project-card[data-accent="blue"] .project-preview {
    background: #e6f2f9;
}

.project-preview-label {
    display: inline-flex;
    margin-bottom: 0.65rem;
    border-bottom: 3px solid var(--project-yellow);
    color: var(--project-ink);
}

.project-preview-frame {
    height: 12rem;
    overflow: hidden;
    border: 1.5px solid var(--project-ink);
    border-radius: 10px;
    background: #fff;
    box-shadow: 3px 3px 0 var(--project-ink);
}

.project-preview-title {
    position: absolute;
    right: 1.15rem;
    bottom: 0.6rem;
    max-width: calc(100% - 2.3rem);
    overflow: hidden;
    color: rgba(38, 32, 26, 0.13);
    font-size: clamp(1.5rem, 7vw, 2.5rem);
    font-weight: 900;
    line-height: 0.8;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@media (min-width: 1024px) {
    .project-card {
        grid-template-columns: minmax(0, 1.55fr) minmax(17rem, 0.85fr);
    }

    .project-content {
        padding: 1.35rem 1.5rem;
    }

    .project-preview {
        order: initial;
        display: flex;
        min-height: 100%;
        flex-direction: column;
        justify-content: center;
        padding: 1.25rem;
        border-bottom: 0;
        border-left: 2px solid var(--project-ink);
    }

    .project-preview-frame {
        height: 16rem;
    }

    .project-card[data-accent="pink"] .project-preview-frame img {
        transform: scale(1.12);
    }

    .project-card[data-accent="blue"] .project-preview-frame img {
        object-fit: cover;
    }

    .project-preview-title {
        right: 1.35rem;
        bottom: 0.85rem;
        font-size: clamp(1.8rem, 2.4vw, 2.8rem);
    }
}

@media (max-width: 767px) {
    .project-card {
        box-shadow: 3px 3px 0 var(--project-ink);
    }

    .project-content {
        padding: 1rem;
    }

    .project-preview {
        order: initial;
        border-top: 2px solid var(--project-ink);
        border-bottom: 0;
    }

    .project-preview-frame {
        height: 10.5rem;
    }
}
</style>

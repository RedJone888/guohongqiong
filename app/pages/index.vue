<template>
    <div
        class="profile-page no-scrollbar flex min-h-full flex-col gap-4 p-3 lg:h-full lg:gap-4 lg:overflow-visible lg:pb-0 lg:pl-4 lg:pr-6 lg:pt-2">
        <div
            class="profile-scroll no-scrollbar -mr-2 flex min-h-0 flex-1 flex-col overflow-x-hidden pr-2 lg:overflow-visible lg:pb-0">
            <div class="profile-stack flex flex-col gap-4">
                <header class="profile-header">
                    <div class="profile-header-meta">
                        <div class="profile-availability">
                            <span aria-hidden="true" class="profile-availability-dot" />
                            <p>{{ copy.availability }}</p>
                        </div>
                    </div>

                    <h2 class="profile-headline">{{ copy.headline }}</h2>
                    <p class="profile-introduction">{{ copy.introduction }}</p>
                </header>

                <section class="profile-overview">
                    <div class="profile-overview-information">
                        <dl class="profile-information-list">
                            <div v-for="fact in copy.facts" :key="fact.key"
                                class="profile-information-item profile-fact" :data-fact-key="fact.key">
                                <dt>
                                    <NuxtLink class="profile-fact-link" :to="portfolioPaths[factSections[fact.key]]" :aria-label="`${fact.label}: ${fact.value}`">
                                        <span class="profile-fact-link-icon material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                                    </NuxtLink>
                                    <span aria-hidden="true" class="material-symbols-outlined profile-fact-icon">
                                        {{ fact.icon }}
                                    </span>
                                    <span>{{ fact.label }}</span>
                                </dt>
                                <dd v-if="fact.key === 'languages'"
                                    class="profile-language-value">
                                    <template v-for="(group, groupIndex) in splitLanguageGroups(fact.value)"
                                        :key="`${group.text}-${groupIndex}`">
                                        <span v-if="group.separator" class="profile-language-separator">{{ group.separator }}</span>
                                        <span class="profile-language-group">
                                        <template v-for="(part, partIndex) in splitParenthetical(group.text)"
                                            :key="`${part}-${partIndex}`">
                                            <span :class="isParenthetical(part) ? 'profile-language-qualifier' : undefined"
                                                v-text="part" />
                                        </template>
                                        </span>
                                    </template>
                                </dd>
                                <dd v-else>
                                    <span>{{ fact.value }}</span>
                                    <span v-if="fact.secondary" class="profile-secondary">{{ fact.secondary }}</span>
                                </dd>
                            </div>

                            <div v-for="item in copy.jobSearchItems" :key="item.key"
                                class="profile-information-item profile-job-search-item" :data-job-key="item.key">
                                <dt>
                                    <span aria-hidden="true" class="material-symbols-outlined profile-fact-icon">
                                        {{ item.icon }}
                                    </span>
                                    <span>{{ item.label }}</span>
                                </dt>
                                <dd class="profile-job-search-value">
                                    <span>{{ item.value }}</span>
                                    <span v-if="item.secondary" class="profile-secondary">{{ item.secondary }}</span>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div class="profile-overview-actions">
                        <div class="profile-contact" :aria-label="copy.contactLabel">
                            <div class="profile-contact-heading">
                                <span aria-hidden="true" class="material-symbols-outlined">contact_mail</span>
                                <span>{{ copy.contactLabel }}</span>
                            </div>
                            <div class="profile-contact-links">
                                <a :href="emailContact.href" class="profile-contact-card">
                                    <img :src="emailContact.icon" alt="" class="profile-contact-brand" />
                                    <span class="profile-contact-card-copy">
                                        <span class="profile-contact-card-label">{{ copy.emailLabel }}</span>
                                        <span class="profile-contact-card-value">{{ emailContact.text }}</span>
                                    </span>
                                </a>
                                <a :href="githubContact.href" target="_blank" rel="noopener noreferrer"
                                    class="profile-contact-card">
                                    <img :src="githubContact.icon" alt="" class="profile-contact-brand" />
                                    <span class="profile-contact-card-copy">
                                        <span class="profile-contact-card-label">{{ copy.githubLabel }}</span>
                                        <span class="profile-contact-card-value">{{ githubContact.text }}</span>
                                    </span>
                                </a>
                                <a :href="linkedinContact.href" target="_blank" rel="noopener noreferrer"
                                    class="profile-contact-card">
                                    <img :src="linkedinContact.icon" alt="" class="profile-contact-brand" />
                                    <span class="profile-contact-card-copy">
                                        <span class="profile-contact-card-label">LinkedIn</span>
                                        <span class="profile-contact-card-value">{{ linkedinContact.text }}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="profile-lower-grid">
                    <section class="profile-panel profile-focus-panel" aria-labelledby="profile-focus-title">
                        <div v-scroll-affordance
                            class="profile-panel-scroll scroll-affordance scroll-affordance-card-body no-scrollbar"
                            tabindex="0" :aria-label="copy.focusTitle">
                            <div class="profile-panel-heading">
                                <span aria-hidden="true" class="profile-panel-icon profile-panel-icon-yellow">
                                    <span class="material-symbols-outlined material-symbol-filled text-[1.15rem]!">target</span>
                                </span>
                                <div>
                                    <p class="profile-kicker">{{ copy.focusEyebrow }}</p>
                                    <h2 id="profile-focus-title" class="profile-panel-title">{{ copy.focusTitle }}</h2>
                                </div>
                            </div>

                            <ul class="profile-focus-list">
                                <li v-for="item in copy.focusItems" :key="item.title" class="profile-focus-item">
                                    <div class="min-w-0 profile-focus-copy">
                                        <div class="profile-focus-title-row">
                                            <h3>{{ item.title }}</h3>
                                            <div class="profile-focus-actions">
                                                <NuxtLink class="profile-focus-link" :to="portfolioPaths[item.section]">
                                                    <span class="profile-focus-link-content">
                                                        <span>{{ copy.focusDetailCta }}</span>
                                                        <span aria-hidden="true"
                                                            class="material-symbols-outlined text-[0.9rem]!">arrow_forward</span>
                                                    </span>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                        <p>{{ item.description }}</p>
                                        <a v-if="'externalHref' in item" :href="item.externalHref" target="_blank"
                                            rel="noopener noreferrer" class="profile-focus-external">
                                            {{ item.externalLabel }}
                                            <span aria-hidden="true" class="material-symbols-outlined text-[0.82rem]!">north_east</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="scroll-cue" aria-hidden="true">
                            <span class="material-symbols-outlined">expand_more</span>
                        </div>
                    </section>

                    <section class="profile-panel profile-workstyle-panel" aria-labelledby="profile-workstyle-title">
                        <div v-scroll-affordance
                            class="profile-panel-scroll scroll-affordance scroll-affordance-card-body no-scrollbar"
                            tabindex="0" :aria-label="copy.workStyleTitle">
                            <div class="profile-panel-heading">
                                <span aria-hidden="true" class="profile-panel-icon profile-panel-icon-purple">
                                    <span class="material-symbols-outlined material-symbol-filled text-[1.15rem]!">forum</span>
                                </span>
                                <div>
                                    <p class="profile-kicker">{{ copy.workStyleEyebrow }}</p>
                                    <h2 id="profile-workstyle-title" class="profile-panel-title">{{ copy.workStyleTitle }}</h2>
                                </div>
                            </div>

                            <p class="profile-workstyle-intro">{{ copy.workStyleIntro }}</p>

                            <div class="profile-quotes-context">
                                <p class="profile-notes-label">{{ copy.colleagueLabel }}</p>
                                <p class="profile-quotes-description">{{ copy.colleagueDescription }}</p>
                            </div>

                            <div class="profile-quotes" :aria-label="copy.colleagueLabel">
                                <blockquote v-for="quote in copy.quotes" :key="quote" class="profile-quote">
                                    {{ quote }}
                                </blockquote>
                            </div>

                            <div class="profile-notes-action">
                                <button type="button" class="profile-notes-button" @click="openNotes">
                                    <span aria-hidden="true" class="material-symbols-outlined text-[1rem]!">collections</span>
                                    {{ copy.notesButton }}
                                </button>
                            </div>
                        </div>
                        <div class="scroll-cue" aria-hidden="true">
                            <span class="material-symbols-outlined">expand_more</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="notesOpen" class="profile-notes-overlay" @click.self="closeNotes"
                @keydown.esc.window="closeNotes">
                <section ref="dialog" class="profile-notes-dialog" role="dialog" aria-modal="true"
                    :aria-label="copy.notesTitle" @keydown="onDialogKeydown">
                    <div v-scroll-affordance
                        class="profile-notes-dialog-scroll scroll-affordance no-scrollbar">
                        <header class="profile-notes-dialog-header">
                            <div class="min-w-0">
                                <h2 class="profile-notes-dialog-title">{{ copy.notesTitle }}</h2>
                            </div>
                            <button ref="closeButton" type="button" class="profile-notes-close" :aria-label="copy.notesClose"
                                @click="closeNotes">
                                <span aria-hidden="true" class="material-symbols-outlined text-[1.1rem]!">close</span>
                            </button>
                        </header>

                        <div class="profile-notes-grid">
                            <figure v-for="note in copy.notes" :key="note.src" class="profile-note-card">
                                <div class="profile-note-media">
                                    <img :src="note.src" :alt="note.alt" class="profile-note-image" loading="lazy" />
                                </div>
                                <figcaption>{{ note.label }}</figcaption>
                            </figure>
                        </div>

                        <p class="profile-notes-hint">{{ copy.notesHint }}</p>
                    </div>
                    <div class="scroll-cue" aria-hidden="true">
                        <span class="material-symbols-outlined">expand_more</span>
                    </div>
                </section>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { contactItems } from '~/data/contact'
import { profilePageCopy, type PortfolioSectionKey } from '~/data/site'
import { portfolioPaths } from '~/data/navigation'

usePortfolioPage('profile')

const { locale } = useLocale()
const copy = computed(() => {
    const localized = profilePageCopy[locale.value]
    return {
        ...localized,
        facts: localized.facts.map((fact) => ({
            key: fact.key,
            icon: fact.icon,
            label: fact.label,
            value: fact.value,
            secondary: 'secondary' in fact ? fact.secondary : undefined,
        })),
        jobSearchItems: localized.jobSearchItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            value: item.value,
            secondary: 'secondary' in item ? item.secondary : undefined,
        })),
    }
})
const emailContact = contactItems[0]!
const linkedinContact = contactItems[1]!
const githubContact = contactItems[2]!
const factSections: Record<typeof profilePageCopy.ja.facts[number]['key'], PortfolioSectionKey> = {
    experience: 'experience', independent: 'projects', education: 'education',
    languages: 'certificates', location: 'contact',
}
const notesOpen = ref(false)
const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)

const splitParenthetical = (value: string) => {
    return value.split(/([（(][^）)]*[）)])/g).filter(Boolean)
}

const isParenthetical = (value: string) => {
    return /^[（(].*[）)]$/.test(value)
}

const splitLanguageGroups = (value: string) => {
    const delimiter = value.includes('・') ? '・' : ' · '

    return value.split(delimiter).map((text, index) => ({
        separator: index === 0 ? '' : '|',
        text,
    }))
}

const openNotes = async () => {
    lastFocusedElement.value = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    notesOpen.value = true
    await nextTick()
    closeButton.value?.focus()
}

const closeNotes = async () => {
    if (!notesOpen.value) return

    notesOpen.value = false
    await nextTick()
    lastFocusedElement.value?.focus()
    lastFocusedElement.value = null
}

const onDialogKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab' || !dialog.value) return

    const focusable = Array.from(
        dialog.value.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    ).filter((element) => !element.hasAttribute('hidden'))

    if (focusable.length === 0) {
        event.preventDefault()
        return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
    }
}
</script>

<style scoped>
.profile-page {
    --profile-paper: #fffdf7;
    --profile-ink: #26201a;
    --profile-yellow: #ffdc5d;
    --profile-purple: #e2d1f8;
    --profile-blue: #9fd0f3;
    --profile-green: #c8e5d0;
}

.profile-scroll {
    scrollbar-width: none;
}

.profile-scroll::-webkit-scrollbar {
    display: none;
}

.profile-overview,
.profile-panel {
    border: 2px solid var(--profile-ink);
    border-radius: 16px;
    background: var(--profile-paper);
    box-shadow: 4px 4px 1px #6b6560;
}

.profile-header {
    flex: 0 0 auto;
}

.profile-header-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.profile-overview {
    display: grid;
    min-height: 0;
    flex: 0 0 auto;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 28%);
    overflow: hidden;
}

.profile-overview-information {
    min-width: 0;
    padding: 1.25rem 1.35rem 1.1rem;
}

.profile-overview-actions {
    min-width: 0;
    border-left: 1px dashed #b2a79a;
    padding: 1.25rem 1.35rem 1.1rem;
}

.profile-contact {
    min-width: 0;
}

.profile-contact-heading {
    display: flex;
    align-items: center;
    gap: 0.38rem;
    margin-bottom: 0.55rem;
    color: #655d53;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.04em;
}

.profile-contact-heading .material-symbols-outlined {
    color: #6f4ca0;
    font-size: 1rem;
}

.profile-contact-links {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.55rem;
}

.profile-contact-card {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 0.55rem;
    padding: 0.3rem 0;
    color: var(--profile-ink);
    transition: color 160ms ease, transform 160ms ease;
}

.profile-contact-card:hover {
    color: #5f3f8c;
    transform: translateY(-1px);
}

.profile-contact-brand {
    width: 1.7rem;
    height: 1.7rem;
    flex: 0 0 auto;
    object-fit: contain;
}

.profile-contact-card-copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 0.12rem;
}

.profile-contact-card-label {
    overflow: hidden;
    color: #655d53;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    line-height: 1.35;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
}

.profile-contact-card-value {
    color: var(--profile-ink);
    font-size: 0.75rem;
    font-weight: 800;
    line-height: 1.35;
    overflow-wrap: anywhere;
}

.profile-availability,
.profile-panel-heading {
    display: flex;
    align-items: center;
}

.profile-availability {
    gap: 0.55rem;
    color: #5f3f8c;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
}

.profile-availability-dot {
    width: 0.5rem;
    height: 0.5rem;
    flex: 0 0 auto;
    border: 1.5px solid #5a3d8a;
    border-radius: 999px;
    background: var(--profile-yellow);
}

.profile-headline {
    margin-top: 0.65rem;
    width: 100%;
    max-width: none;
    color: var(--profile-ink);
    font-size: clamp(1.85rem, 2.35vw, 2.45rem);
    font-weight: 800;
    letter-spacing: -0.045em;
    line-height: 1.08;
    text-wrap: wrap;
}

.profile-introduction {
    max-width: 64rem;
    margin-top: 0.75rem;
    color: #655d53;
    font-size: 1rem;
    line-height: 1.6;
}

/* The entire fact is a native link, including its label and value. */
.profile-fact { position: relative; }
.profile-fact-link { position: absolute; inset: -0.35rem; border-radius: 0.45rem; z-index: 1; }
.profile-fact-link:hover { background: rgb(111 76 160 / 0.06); }
.profile-fact-link:focus-visible { outline: 2px solid #6f4ca0; outline-offset: 2px; }
.profile-fact-link-icon { position: absolute; top: 0.25rem; right: 0.3rem; color: #6f4ca0; font-size: 0.85rem; opacity: 0; }
.profile-fact-link:hover .profile-fact-link-icon,
.profile-fact-link:focus-visible .profile-fact-link-icon { opacity: 1; }

.profile-notes-button {
    display: inline-flex;
    min-height: 2.75rem;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-radius: 999px;
    padding: 0.55rem 0.85rem;
    font-size: 0.8125rem;
    font-weight: 800;
    line-height: 1.2;
    transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

.profile-notes-button:hover {
    transform: translateY(-1px);
}

.profile-kicker,
.profile-notes-label {
    color: #655d53;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    line-height: 1.4;
}

.profile-information-list {
    display: grid;
    grid-template-columns: minmax(0, 2.5fr) minmax(0, 4fr) minmax(0, 3.5fr);
    align-items: start;
    gap: 1.15rem 1.5rem;
}

.profile-information-item {
    grid-column: auto;
    min-width: 0;
    max-width: 100%;
}

.profile-fact[data-fact-key="experience"] { grid-area: 1 / 1; }
.profile-fact[data-fact-key="independent"] { grid-area: 1 / 2; }
.profile-fact[data-fact-key="education"] { grid-area: 1 / 3; }
.profile-job-search-item[data-job-key="preferences"] { grid-area: 2 / 1; }
.profile-job-search-item[data-job-key="start"] { grid-area: 3 / 2 / 4 / 4; }
.profile-fact[data-fact-key="languages"] { grid-area: 2 / 3; }
.profile-job-search-item[data-job-key="status"] { grid-area: 3 / 1; }
.profile-fact[data-fact-key="location"] { grid-area: 2 / 2; }

.profile-fact dt,
.profile-job-search-item dt {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 0.32rem;
    color: #655d53;
    font-size: 0.6875rem;
    font-weight: 800;
}

.profile-fact dt > span:last-child,
.profile-job-search-item dt > span:last-child {
    min-width: 0;
    overflow-wrap: anywhere;
}

.profile-fact-icon {
    color: #6f4ca0;
    font-size: 1rem;
}

.profile-fact dd {
    min-width: 0;
    margin-top: 0.2rem;
    color: var(--profile-ink);
    font-size: 0.875rem;
    font-weight: 800;
    line-height: 1.45;
    overflow-wrap: anywhere;
    white-space: normal;
}

.profile-secondary {
    margin-left: 0.45rem;
    color: #8b8176;
    font-size: 0.7rem;
    font-weight: 650;
    line-height: 1.35;
    overflow-wrap: anywhere;
    white-space: normal;
}

.profile-language-value {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.16rem;
    white-space: normal;
}

.profile-language-group {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    overflow-wrap: anywhere;
    white-space: normal;
}

.profile-language-separator {
    margin: 0;
    color: #9b9185;
    font-size: 0.7rem;
    font-weight: 600;
}

.profile-language-qualifier {
    margin-left: 0.22rem;
    color: #5f3f8c;
    font-size: 0.6875rem;
    font-weight: 800;
    line-height: 1.35;
}

.profile-job-search-item dd {
    min-width: 0;
    display: block;
    margin-top: 0.08rem;
    color: var(--profile-ink);
    font-size: 0.8125rem;
    font-weight: 800;
    line-height: 1.4;
    overflow-wrap: anywhere;
    white-space: normal;
}

.profile-lower-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
    align-items: start;
    gap: 1rem;
}

.profile-panel {
    --scroll-affordance-surface: var(--profile-paper);
    --scroll-affordance-color: #6d4a9e;
    min-width: 0;
    overflow: hidden;
}

.profile-panel-scroll {
    min-height: 0;
    padding: 1.25rem 1.35rem;
}

.profile-panel-scroll:focus-visible {
    border-radius: 12px;
    outline: 2px solid #6d4a9e;
    outline-offset: -4px;
}

.profile-focus-panel,
.profile-workstyle-panel {
    display: flex;
    flex-direction: column;
}

.profile-panel-heading {
    gap: 0.7rem;
}

.profile-panel-icon {
    display: inline-flex;
    width: 2.4rem;
    height: 2.4rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #5a3d8a;
    border-radius: 999px;
    color: var(--profile-ink);
}

.profile-panel-icon-yellow {
    background: var(--profile-yellow);
}

.profile-panel-icon-purple {
    background: var(--profile-purple);
}

.profile-panel-title {
    margin-top: 0.18rem;
    color: var(--profile-ink);
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.2;
}

.profile-focus-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    margin-top: 1.1rem;
}

.profile-focus-item {
    display: flex;
    min-height: 0;
    flex-direction: column;
    padding: 1rem 0;
    border-top: 1px dashed #b2a79a;
}

.profile-focus-item:first-child {
    border-top: 0;
    padding-top: 0;
}

.profile-focus-item:last-child {
    padding-bottom: 0;
}

.profile-focus-item h3 {
    color: var(--profile-ink);
    font-size: 0.9375rem;
    font-weight: 800;
    line-height: 1.35;
}

.profile-focus-item p {
    margin-top: 0.35rem;
    color: #655d53;
    font-size: 0.8125rem;
    line-height: 1.55;
}

.profile-focus-copy {
    flex: 1;
}

.profile-focus-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
}

.profile-focus-title-row h3 {
    min-width: 0;
    flex: 1;
}

.profile-focus-actions {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 0.4rem;
}

.profile-focus-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    border: 0;
    padding: 0.2rem 0;
    background: transparent;
    color: #5f3f8c;
    font-size: 0.7rem;
    font-weight: 800;
    transition: color 160ms ease, transform 160ms ease;
}

.profile-focus-link:hover {
    color: #3f2867;
    transform: translateY(-1px);
}

.profile-focus-link-content {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    border-bottom: 1px solid transparent;
    transition: border-color 160ms ease;
}

.profile-focus-link:hover .profile-focus-link-content {
    border-bottom-color: currentColor;
}

.profile-focus-external {
    display: inline-flex;
    min-height: 0;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border: 1px solid #8e6ab7;
    border-radius: 0.45rem;
    padding: 0.3rem 0.55rem;
    background: #f8f3ff;
    color: #5f3f8c;
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    transition: transform 160ms ease, background-color 160ms ease;
}

.profile-focus-copy > .profile-focus-external {
    margin-top: 0.55rem;
    font-size: 0.625rem;
    padding: 0.24rem 0.48rem;
}

.profile-focus-external:hover {
    background: var(--profile-purple);
    transform: translateY(-1px);
}

.profile-workstyle-intro {
    max-width: 70rem;
    margin-top: 0.8rem;
    color: #655d53;
    font-size: 0.8125rem;
    line-height: 1.55;
}

.profile-quotes {
    display: grid;
    max-width: 70rem;
    gap: 0.2rem;
    margin-top: 0.45rem;
}

.profile-quotes-context {
    max-width: 70rem;
    margin-top: 0.8rem;
}

.profile-quotes-description {
    margin-top: 0.2rem;
    color: #655d53;
    font-size: 0.75rem;
    line-height: 1.5;
}

.profile-quote {
    border-left: 2px solid var(--profile-yellow);
    padding: 0.35rem 0.55rem;
    color: var(--profile-ink);
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.4;
}

.profile-notes-action {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-top: 0.45rem;
}

.profile-notes-button {
    flex: 0 0 auto;
    border: 1.5px solid #5a3d8a;
    background: var(--profile-purple);
    color: var(--profile-ink);
    box-shadow: 2px 2px 1px #6b6560;
}

.profile-notes-button:hover {
    box-shadow: 3px 3px 1px #6b6560;
}

.profile-notes-overlay {
    --profile-paper: #fffdf7;
    --profile-ink: #26201a;
    position: fixed;
    z-index: 999;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    padding: 1rem;
    background: rgba(38, 32, 26, 0.58);
    backdrop-filter: blur(2px);
}

.profile-notes-dialog {
    --scroll-affordance-surface: var(--profile-paper);
    --scroll-affordance-color: #6d4a9e;
    display: flex;
    flex-direction: column;
    width: min(40rem, 100%);
    max-height: calc(100dvh - 2rem);
    overflow: hidden;
    border: 2px solid var(--profile-ink);
    border-radius: 16px;
    background: var(--profile-paper);
    box-shadow: 8px 8px 1px #6b6560;
}

.profile-notes-dialog-scroll {
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
}

.profile-notes-dialog-header {
    position: sticky;
    z-index: 1;
    top: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.2rem;
    border-bottom: 2px solid var(--profile-ink);
    background: var(--profile-paper);
}

.profile-notes-dialog-title {
    color: var(--profile-ink);
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.25;
}

.profile-notes-close {
    display: inline-flex;
    width: 2.2rem;
    height: 2.2rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--profile-ink);
    border-radius: 999px;
    background: #fff;
    color: var(--profile-ink);
    box-shadow: 2px 2px 1px #6b6560;
    transition: transform 160ms ease, background-color 160ms ease, color 160ms ease;
}

.profile-notes-close:hover {
    background: #5a3d8a;
    color: #fffdf7;
    transform: translateY(-1px);
}

.profile-notes-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
    padding: 1rem 1.2rem;
}

.profile-note-card {
    min-width: 0;
    overflow: hidden;
    border: 1.5px solid #8c8174;
    border-radius: 12px;
    background: #fff;
}

.profile-note-media {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: auto;
    padding: 0.75rem;
    background: #fff;
}

.profile-note-image {
    display: block;
    width: auto;
    max-width: none;
    height: clamp(2.5rem, 2.5vw, 3.5rem);
    flex: 0 0 auto;
    object-fit: contain;
}

.profile-note-card:first-child .profile-note-image {
    height: clamp(12.5rem, 12.5vw, 17.5rem);
}

.profile-note-card figcaption {
    padding: 0.65rem 0.8rem;
    border-top: 1px dashed #b2a79a;
    color: #655d53;
    font-size: 0.75rem;
    font-weight: 800;
}

.profile-notes-hint {
    padding: 0 1.2rem 1rem;
    color: #655d53;
    font-size: 0.75rem;
    line-height: 1.5;
}

@media (min-width: 1024px) {
    .profile-page { min-height: 0; height: 100%; overflow: hidden; }
    .profile-page .profile-scroll { min-height: 0; overflow: hidden; }
    .profile-stack { height: 100%; min-height: 0; }
    .profile-lower-grid { min-height: 0; flex: 1 1 0; align-items: stretch; }
    .profile-lower-grid .profile-panel { height: 100%; min-height: 0; overflow: hidden; }
    .profile-lower-grid .profile-panel-scroll {
        flex: 1 1 0; min-height: 0; overflow-y: auto;
        overscroll-behavior: contain; scrollbar-width: none;
    }
    .profile-job-search-item[data-job-key="start"] dd { white-space: nowrap; }
    .profile-job-search-item[data-job-key="start"] .profile-secondary { white-space: nowrap; }
}

@media (max-width: 1279px) {
    .profile-overview {
        grid-template-columns: minmax(0, 1fr);
    }

    .profile-overview-information {
        border-bottom: 1px dashed #b2a79a;
    }

    .profile-overview-actions {
        border-left: 0;
    }

    .profile-contact-links {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 1023px) {
    .profile-lower-grid {
        grid-template-columns: minmax(0, 1fr);
    }

}

@media (max-width: 639px) {
    .profile-header-meta {
        align-items: flex-start;
        flex-wrap: wrap;
    }


    .profile-overview-information,
    .profile-overview-actions,
    .profile-panel-scroll {
        padding: 1rem;
    }

    .profile-contact-links {
        grid-template-columns: minmax(0, 1fr);
    }

    .profile-headline {
        font-size: 1.75rem;
    }

    .profile-notes-grid {
        grid-template-columns: minmax(0, 1fr);
    }

    .profile-information-list {
        grid-template-columns: minmax(0, 1fr);
        gap: 1rem;
    }

    .profile-information-item {
        grid-area: auto !important;
    }

.profile-language-value {
    flex-wrap: wrap;
    white-space: normal;
}

    .profile-focus-title-row {
        align-items: flex-start;
        flex-direction: row;
        gap: 0.75rem;
    }

    .profile-notes-action {
        align-items: flex-start;
        flex-direction: column;
    }

    .profile-notes-button {
        width: 100%;
    }

    .profile-notes-overlay {
        align-items: center;
        padding: 0.5rem;
    }

    .profile-notes-dialog {
        max-height: calc(100dvh - 1rem);
    }

    .profile-note-media {
        justify-content: center;
        overflow-x: hidden;
    }

    .profile-note-image,
    .profile-note-card:first-child .profile-note-image {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .profile-contact-card,
    .profile-focus-link,
    .profile-focus-external,
    .profile-notes-button,
    .profile-notes-close {
        transition-duration: 1ms;
    }
}
</style>

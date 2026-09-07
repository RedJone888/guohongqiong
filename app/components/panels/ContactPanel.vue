<template>
    <div
        class="contact-page no-scrollbar flex min-h-full flex-col gap-5 p-3 lg:h-full lg:gap-4 lg:overflow-hidden lg:pb-0 lg:pl-4 lg:pr-6 lg:pt-2">
        <header class="shrink-0">
            <h2
                class="contact-section-title relative text-2xl font-extrabold leading-tight tracking-[0.05em] text-stone-950 lg:text-[2rem]">
                {{ currentHeader.title }}
            </h2>
            <p class="mt-3 max-w-5xl text-sm leading-6 text-stone-600 lg:text-[0.9375rem] lg:leading-6">
                {{ currentHeader.description }}
            </p>
        </header>

        <div class="scroll-affordance-frame contact-scroll-frame min-h-0 flex-1">
            <div v-scroll-affordance
                class="contact-scroll scroll-affordance no-scrollbar min-h-0 flex-1 overflow-x-hidden -mr-2 pr-2 lg:overflow-y-auto">
                <div class="grid gap-4 lg:grid-cols-12 lg:items-stretch lg:gap-5">
                    <section class="contact-location order-2 overflow-hidden lg:order-1 lg:col-span-7">
                        <div class="flex items-start gap-3 border-b border-dashed border-stone-400 p-4 lg:p-5">
                            <span aria-hidden="true"
                                class="contact-location-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                                <span
                                    class="material-symbols-outlined material-symbol-filled text-[1.1875rem]!">location_on</span>
                            </span>
                            <div class="min-w-0 flex-1">
                                <p class="contact-kicker">{{ copy.locationLabel }}</p>
                                <div class="contact-location-line">
                                    <h3 class="contact-location-name text-lg font-extrabold text-stone-950">
                                        {{ currentHeader.location }}
                                    </h3>
                                    <p class="contact-location-relocation text-xs leading-5 text-stone-600">
                                        {{ currentHeader.relocation }}
                                    </p>
                                </div>
                            </div>
                            <span class="contact-place-code hidden shrink-0 rounded-full px-3 py-1 text-[0.625rem] font-extrabold text-stone-950 sm:inline-flex">
                                OSAKA · JP
                            </span>
                        </div>

                        <div class="contact-map-wrap relative min-h-[270px] lg:min-h-[345px]">
                            <iframe title="Osaka location map" :src="mapSrc" class="absolute inset-0 h-full w-full border-0"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>

                    <section class="contact-directory order-1 flex flex-col p-4 lg:order-2 lg:col-span-5 lg:p-5">
                        <div class="flex items-center gap-3 border-b border-dashed border-stone-400 pb-4">
                            <div class="min-w-0">
                                <p class="contact-kicker">{{ copy.channelsEyebrow }}</p>
                                <h3 class="mt-1 text-lg font-extrabold text-stone-950">{{ copy.channelsTitle }}</h3>
                            </div>
                        </div>

                        <div class="mt-4 flex flex-1 flex-col justify-center gap-3">
                            <div class="contact-channel contact-channel-email flex min-w-0 items-center gap-3 rounded-xl p-4">
                                <img :src="primaryContact.icon" alt="" class="h-8 w-8 shrink-0 object-contain" loading="lazy">
                                <a :href="primaryContact.href"
                                    class="min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                    <span class="block text-sm font-extrabold text-stone-950">{{ primaryContact.label }}</span>
                                    <span class="mt-0.5 block truncate text-xs text-stone-600">{{ primaryContact.text }}</span>
                                </a>
                                <button type="button"
                                    class="contact-copy inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-extrabold text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
                                    :aria-label="copied ? copy.copied : copy.copy" :title="copied ? copy.copied : copy.copy"
                                    @click="copyEmail">
                                    <span aria-hidden="true" class="material-symbols-outlined text-[1.0625rem]!">
                                        {{ copied ? 'check' : 'content_copy' }}
                                    </span>
                                    <span class="hidden sm:inline">{{ copied ? copy.copied : copy.copy }}</span>
                                </button>
                            </div>

                            <a v-for="item in contactItems.slice(1)" :key="item.label" :href="item.href" target="_blank"
                                rel="noopener noreferrer"
                                class="contact-channel group flex min-w-0 items-center gap-3 rounded-xl p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950">
                                <img :src="item.icon" alt="" class="h-8 w-8 shrink-0 object-contain" loading="lazy">
                                <span class="min-w-0 flex-1">
                                    <span class="block text-sm font-extrabold text-stone-950">{{ item.label }}</span>
                                    <span class="mt-0.5 block truncate text-xs text-stone-600">{{ item.text }}</span>
                                </span>
                                <span aria-hidden="true"
                                    class="material-symbols-outlined shrink-0 text-[1.0625rem]! text-stone-500 transition-transform duration-200 group-hover:translate-x-0.5">north_east</span>
                            </a>
                        </div>

                    </section>
                </div>
            </div>
            <div class="scroll-cue" aria-hidden="true">
                <span class="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { contactHeader, contactItems } from '~/data/contact'

const { locale } = useLocale()
const primaryContact = contactItems[0]!
const copied = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

const currentHeader = computed(() => contactHeader[locale.value])

const copy = computed(() => locale.value === 'ja'
    ? {
        locationLabel: 'BASED IN',
        channelsEyebrow: 'CONTACT CHANNELS',
        channelsTitle: '連絡方法',
        copy: 'コピー',
        copied: 'コピー済み'
    }
    : {
        locationLabel: 'BASED IN',
        channelsEyebrow: 'CONTACT CHANNELS',
        channelsTitle: 'Ways to connect',
        copy: 'Copy',
        copied: 'Copied'
    })

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(primaryContact.text)
        copied.value = true
        if (copiedTimer) clearTimeout(copiedTimer)
        copiedTimer = setTimeout(() => {
            copied.value = false
        }, 1800)
    } catch {
        copied.value = false
    }
}

const mapSrc =
    'https://www.openstreetmap.org/export/embed.html?bbox=135.35%2C34.55%2C135.65%2C34.80&layer=mapnik&marker=34.6937%2C135.5023'
</script>

<style scoped>
.contact-page {
    --scroll-affordance-surface: var(--contact-paper);
    --scroll-affordance-color: #6d4a9e;
    --contact-paper: #fffdf7;
    --contact-ink: #26201a;
    --contact-yellow: #ffdc5d;
    --contact-blue: #9fd0f3;
    --contact-purple: #e2d1f8;
}

.contact-section-title::after {
    content: "";
    display: block;
    width: 7rem;
    height: 4px;
    margin-top: 0.55rem;
    border-radius: 999px;
    background: var(--contact-yellow);
}

.contact-location,
.contact-directory {
    border: 2px solid var(--contact-ink);
    border-radius: 14px;
    background: var(--contact-paper);
    box-shadow: 4px 4px 1px #6b6560;
}

.contact-kicker {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.5625rem;
    font-weight: 800;
    letter-spacing: 0.17em;
    line-height: 1.3;
    color: #655d53;
}

.contact-location-line {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 0.65rem;
    row-gap: 0.2rem;
    margin-top: 0.25rem;
}

.contact-location-name,
.contact-location-relocation {
    min-width: 0;
}

.contact-location-name {
    flex: 0 1 auto;
}

.contact-location-relocation {
    flex: 1 1 auto;
}

.contact-location-icon,
.contact-place-code {
    border: 1.5px solid #5a3d8a;
}

.contact-location-icon {
    background: var(--contact-blue);
}

.contact-place-code {
    background: var(--contact-purple);
}

.contact-map-wrap {
    background: #ece7dc;
}

.contact-map-wrap iframe {
    filter: saturate(0.72) contrast(0.92);
}

.contact-channel {
    border: 1.5px solid var(--contact-ink);
    background: #fff;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.contact-channel:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 1px #6b6560;
}

.contact-copy {
    border: 1.5px solid var(--contact-ink);
    background: var(--contact-yellow);
    box-shadow: 1.5px 1.5px 1px #6b6560;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.contact-copy:hover {
    transform: translate(-1px, -1px);
    box-shadow: 2.5px 2.5px 1px #6b6560;
}

.contact-copy:active {
    transform: translate(1px, 1px);
    box-shadow: none;
}

@media (max-width: 767px) {
    .contact-location,
    .contact-directory {
        box-shadow: 3px 3px 1px #6b6560;
    }
}
</style>

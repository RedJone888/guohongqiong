<template>
    <figure class="project-screenshot-slot" :class="{ 'project-screenshot-slot-compact': compact }">
        <div class="project-screenshot-media">
            <button v-if="shot.src" type="button" class="project-screenshot-trigger"
                :aria-label="`${zoomAriaLabel}: ${shot.title}`" @click="openLightbox">
                <img :src="shot.src" :alt="shot.alt" loading="lazy">
                <span class="project-screenshot-zoom" aria-hidden="true">
                    <span class="material-symbols-outlined">zoom_in</span>
                </span>
            </button>
            <div v-else class="project-screenshot-empty" role="img" :aria-label="shot.alt">
                <span aria-hidden="true" class="material-symbols-outlined">add_photo_alternate</span>
                <strong>{{ placeholderLabel }}</strong>
                <small>{{ shot.label }}</small>
            </div>
        </div>

        <figcaption>
            <p v-if="!shot.hideLabel">{{ shot.label }}</p>
            <h5>{{ shot.title }}</h5>
            <span v-if="shot.description">{{ shot.description }}</span>
        </figcaption>
    </figure>

    <Teleport to="body">
        <Transition name="screenshot-lightbox">
            <div v-if="isLightboxOpen" class="screenshot-lightbox-backdrop" @click.self="closeLightbox">
                <section ref="lightboxRef" class="screenshot-lightbox" role="dialog" aria-modal="true"
                    :aria-labelledby="lightboxTitleId" tabindex="-1">
                    <header class="screenshot-lightbox-header">
                        <div class="min-w-0">
                            <p class="screenshot-lightbox-label">{{ shot.label }}</p>
                            <h2 :id="lightboxTitleId">{{ shot.title }}</h2>
                        </div>
                        <button ref="lightboxCloseButtonRef" type="button" class="screenshot-lightbox-close"
                            :aria-label="closeAriaLabel" @click="closeLightbox">
                            <span class="material-symbols-outlined" aria-hidden="true">close</span>
                        </button>
                    </header>
                    <div class="screenshot-lightbox-body">
                        <img :src="shot.src" :alt="shot.alt">
                    </div>
                </section>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import type { PetnidoScreenshot } from '~/data/projects'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
    shot: PetnidoScreenshot
    placeholderLabel: string
    compact?: boolean
}>(), {
    compact: false,
})

const { locale } = useLocale()
const isLightboxOpen = ref(false)
const lightboxRef = ref<HTMLElement | null>(null)
const lightboxCloseButtonRef = ref<HTMLButtonElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)
const lightboxTitleId = useId()

const zoomAriaLabel = computed(() => locale.value === 'ja' ? '画像を拡大表示' : 'View screenshot full size')
const closeAriaLabel = computed(() => locale.value === 'ja' ? '拡大画像を閉じる' : 'Close enlarged screenshot')

const openLightbox = async () => {
    if (!props.shot.src) return

    lastFocusedElement.value = document.activeElement instanceof HTMLElement ? document.activeElement : null
    isLightboxOpen.value = true

    await nextTick()
    lightboxCloseButtonRef.value?.focus()
}

const closeLightbox = async () => {
    if (!isLightboxOpen.value) return

    isLightboxOpen.value = false

    await nextTick()
    lastFocusedElement.value?.focus()
    lastFocusedElement.value = null
}

const focusableSelector = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

const handleKeydown = (event: KeyboardEvent) => {
    if (!isLightboxOpen.value) return

    if (event.key === 'Escape') {
        event.preventDefault()
        closeLightbox()
        return
    }

    if (event.key !== 'Tab' || !lightboxRef.value) return

    const focusableElements = Array.from(
        lightboxRef.value.querySelectorAll<HTMLElement>(focusableSelector)
    )

    if (focusableElements.length === 0) {
        event.preventDefault()
        lightboxRef.value.focus()
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
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.project-screenshot-slot {
    overflow: hidden;
    border: 2px solid #26201a;
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 1px #6b6560;
}

.project-screenshot-media {
    aspect-ratio: 16 / 7;
    border-bottom: 1.5px dashed #8c8174;
    background:
        linear-gradient(135deg, rgba(239, 176, 198, 0.18), rgba(159, 208, 243, 0.2)),
        #fffdf7;
}

.project-screenshot-slot-compact .project-screenshot-media {
    /* Evidence montages are exported at 16:7; keep the full frame in dialogs. */
    aspect-ratio: 16 / 7;
}

.project-screenshot-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project-screenshot-trigger {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: zoom-in;
    text-align: left;
}

.project-screenshot-trigger:focus-visible {
    outline: 3px solid #6d4a9e;
    outline-offset: -4px;
}

.project-screenshot-zoom {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #26201a;
    border-radius: 999px;
    background: rgba(255, 253, 247, 0.94);
    box-shadow: 2px 2px 0 #6b6560;
    color: #5a3d8a;
    pointer-events: none;
    transition: transform 0.18s ease, background-color 0.18s ease;
}

.project-screenshot-trigger:hover .project-screenshot-zoom {
    transform: scale(1.08);
    background: #fff;
}

.project-screenshot-zoom .material-symbols-outlined {
    font-size: 1.1rem;
}

.project-screenshot-empty {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 8rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;
    padding: 1rem;
    text-align: center;
    color: #5a3d8a;
}

.project-screenshot-empty .material-symbols-outlined {
    font-size: 2rem;
}

.project-screenshot-empty strong,
.project-screenshot-empty small,
figcaption p {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-weight: 800;
    letter-spacing: 0.08em;
}

.project-screenshot-empty strong {
    font-size: 0.6875rem;
}

.project-screenshot-empty small {
    font-size: 0.5625rem;
    color: #766b62;
}

figcaption {
    padding: 0.8rem 0.9rem 0.9rem;
}

figcaption p {
    font-size: 0.5625rem;
    color: #766b62;
}

figcaption h5 {
    margin-top: 0.25rem;
    font-size: 0.8125rem;
    font-weight: 850;
    line-height: 1.4;
    color: #26201a;
}

figcaption span {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.75rem;
    line-height: 1.6;
    color: #57534e;
}

.screenshot-lightbox-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(1rem, 3vw, 3rem);
    background: rgba(28, 23, 19, 0.8);
    backdrop-filter: blur(3px);
}

.screenshot-lightbox {
    display: flex;
    width: min(96vw, 120rem);
    max-height: 94dvh;
    flex-direction: column;
    overflow: hidden;
    border: 2px solid #26201a;
    border-radius: 16px;
    background: #fffdf7;
    box-shadow: 8px 8px 0 rgba(28, 23, 19, 0.35);
    outline: none;
}

.screenshot-lightbox-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.8rem 1rem;
    border-bottom: 1.5px dashed #8c8174;
}

.screenshot-lightbox-label {
    overflow: hidden;
    color: #766b62;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.625rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
}

.screenshot-lightbox-header h2 {
    margin-top: 0.2rem;
    overflow: hidden;
    color: #26201a;
    font-size: clamp(0.95rem, 1.5vw, 1.25rem);
    font-weight: 850;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.screenshot-lightbox-close {
    display: inline-flex;
    width: 2.75rem;
    height: 2.75rem;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border: 2px solid #26201a;
    border-radius: 999px;
    background: #fff;
    color: #26201a;
    cursor: pointer;
    box-shadow: 3px 3px 0 #6b6560;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.screenshot-lightbox-close:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 #6b6560;
}

.screenshot-lightbox-close:focus-visible {
    outline: 3px solid #6d4a9e;
    outline-offset: 3px;
}

.screenshot-lightbox-body {
    display: flex;
    min-height: 0;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: clamp(0.75rem, 2vw, 1.5rem);
}

.screenshot-lightbox-body img {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: calc(94dvh - 7.5rem);
    object-fit: contain;
}

.screenshot-lightbox-enter-active,
.screenshot-lightbox-leave-active {
    transition: opacity 0.2s ease;
}

.screenshot-lightbox-enter-active .screenshot-lightbox,
.screenshot-lightbox-leave-active .screenshot-lightbox {
    transition: transform 0.2s ease;
}

.screenshot-lightbox-enter-from,
.screenshot-lightbox-leave-to {
    opacity: 0;
}

.screenshot-lightbox-enter-from .screenshot-lightbox,
.screenshot-lightbox-leave-to .screenshot-lightbox {
    transform: scale(0.98);
}

@media (max-width: 640px) {
    .screenshot-lightbox-backdrop {
        padding: 0.75rem;
    }

    .screenshot-lightbox {
        max-height: 96dvh;
    }

    .screenshot-lightbox-body img {
        max-height: calc(96dvh - 7.5rem);
    }
}
</style>

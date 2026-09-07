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
                    :aria-labelledby="lightboxTitleId" tabindex="-1" @click="dismissMobileLightbox">
                    <header class="screenshot-lightbox-header">
                        <div class="min-w-0">
                            <p class="screenshot-lightbox-label">{{ shot.label }}</p>
                            <h2 :id="lightboxTitleId">{{ shot.title }}</h2>
                        </div>
                        <div class="screenshot-lightbox-actions">
                            <button type="button" class="screenshot-lightbox-rotate-btn"
                                :class="{ 'is-active': isLandscape }"
                                :aria-label="landscapeAriaLabel"
                                :title="landscapeAriaLabel"
                                @click.stop="toggleLandscape">
                                <span class="material-symbols-outlined" aria-hidden="true">screen_rotation</span>
                                <span class="screenshot-lightbox-btn-text">{{ landscapeButtonText }}</span>
                            </button>
                            <button ref="lightboxCloseButtonRef" type="button" class="screenshot-lightbox-close"
                                :aria-label="closeAriaLabel" :title="closeAriaLabel" @click.stop="closeLightbox">
                                <span class="material-symbols-outlined" aria-hidden="true">close</span>
                            </button>
                        </div>
                    </header>
                    <div ref="lightboxBodyRef" class="screenshot-lightbox-body">
                        <img ref="lightboxImageRef" :src="shot.src" :alt="shot.alt"
                            :class="{ 'is-landscape': isLandscape, 'is-touching': isTouching }"
                            :style="mobileImageStyle"
                            @touchstart="handleImageTouchStart" @touchmove="handleImageTouchMove"
                            @touchend="handleImageTouchEnd" @touchcancel="handleImageTouchEnd">
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
const isLandscape = ref(false)
const isTouching = ref(false)
const lightboxRef = ref<HTMLElement | null>(null)
const lightboxBodyRef = ref<HTMLElement | null>(null)
const lightboxImageRef = ref<HTMLImageElement | null>(null)
const lightboxCloseButtonRef = ref<HTMLButtonElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)
const lightboxTitleId = useId()
const mobileImageScale = ref(1)
const mobileImageOffsetX = ref(0)
const mobileImageOffsetY = ref(0)
const pinchStartDistance = ref<number | null>(null)
const pinchStartScale = ref(1)
const panStartX = ref<number | null>(null)
const panStartY = ref<number | null>(null)
const panStartOffsetX = ref(0)
const panStartOffsetY = ref(0)
const lastMobileGestureAt = ref(0)

const zoomAriaLabel = computed(() => locale.value === 'ja' ? '画像を拡大表示' : 'View screenshot full size')
const closeAriaLabel = computed(() => locale.value === 'ja' ? '拡大画像を閉じる' : 'Close enlarged screenshot')
const landscapeAriaLabel = computed(() => {
    if (isLandscape.value) {
        return locale.value === 'ja' ? '縦向きに戻す' : 'Switch to portrait orientation'
    }
    return locale.value === 'ja' ? '横向きに回転' : 'Switch to landscape orientation'
})
const landscapeButtonText = computed(() => {
    if (isLandscape.value) {
        return locale.value === 'ja' ? '縦向き' : 'Portrait'
    }
    return locale.value === 'ja' ? '横向き' : 'Landscape'
})

const isMobileViewport = () => {
    return typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches
}

const mobileImageStyle = computed(() => {
    if (!isMobileViewport()) return undefined

    if (isLandscape.value) {
        return {
            transform: `translate3d(${mobileImageOffsetX.value}px, ${mobileImageOffsetY.value}px, 0) rotate(90deg) scale(${mobileImageScale.value})`,
        }
    }
    return {
        transform: `translate3d(${mobileImageOffsetX.value}px, ${mobileImageOffsetY.value}px, 0) scale(${mobileImageScale.value})`,
    }
})

const toggleLandscape = () => {
    isLandscape.value = !isLandscape.value
    mobileImageScale.value = 1
    mobileImageOffsetX.value = 0
    mobileImageOffsetY.value = 0
    pinchStartDistance.value = null
    panStartX.value = null
    panStartY.value = null
    lastMobileGestureAt.value = Date.now()
}

const dismissMobileLightbox = () => {
    if (isMobileViewport() && Date.now() - lastMobileGestureAt.value > 450) {
        closeLightbox()
    }
}

const touchDistance = (touches: TouchList) => {
    const first = touches.item(0)
    const second = touches.item(1)
    if (!first || !second) return 0

    return Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY)
}

const clampImageOffset = (offset: number, axis: 'x' | 'y') => {
    const body = lightboxBodyRef.value
    const image = lightboxImageRef.value
    if (!body || !image) return offset

    const bodyStyles = window.getComputedStyle(body)
    const paddingStart = Number.parseFloat(axis === 'x' ? bodyStyles.paddingLeft : bodyStyles.paddingTop) || 0
    const paddingEnd = Number.parseFloat(axis === 'x' ? bodyStyles.paddingRight : bodyStyles.paddingBottom) || 0
    const availableSize = (axis === 'x' ? body.clientWidth : body.clientHeight) - paddingStart - paddingEnd
    const imageSize = axis === 'x' ? image.getBoundingClientRect().width : image.getBoundingClientRect().height
    const maxOffset = Math.max(0, (imageSize - availableSize) / 2)

    return Math.min(maxOffset, Math.max(-maxOffset, offset))
}

const setPanStart = (touch: Touch) => {
    panStartX.value = touch.clientX
    panStartY.value = touch.clientY
    panStartOffsetX.value = mobileImageOffsetX.value
    panStartOffsetY.value = mobileImageOffsetY.value
}

const handleImageTouchStart = (event: TouchEvent) => {
    if (!isMobileViewport()) return
    isTouching.value = true

    if (event.touches.length === 1 && mobileImageScale.value > 1) {
        const touch = event.touches.item(0)
        if (touch) setPanStart(touch)
        return
    }

    if (event.touches.length < 2) return

    const distance = touchDistance(event.touches)
    if (distance <= 0) return

    pinchStartDistance.value = distance
    pinchStartScale.value = mobileImageScale.value
    panStartX.value = null
    panStartY.value = null
}

const handleImageTouchMove = (event: TouchEvent) => {
    if (!isMobileViewport()) return

    if (event.touches.length === 1 && mobileImageScale.value > 1 && panStartX.value !== null && panStartY.value !== null) {
        const touch = event.touches.item(0)
        if (!touch) return

        event.preventDefault()
        mobileImageOffsetX.value = clampImageOffset(
            panStartOffsetX.value + touch.clientX - panStartX.value,
            'x',
        )
        mobileImageOffsetY.value = clampImageOffset(
            panStartOffsetY.value + touch.clientY - panStartY.value,
            'y',
        )
        lastMobileGestureAt.value = Date.now()
        return
    }

    if (event.touches.length < 2 || !pinchStartDistance.value) return

    const distance = touchDistance(event.touches)
    if (distance <= 0) return

    event.preventDefault()
    const nextScale = Math.min(
        4,
        Math.max(1, pinchStartScale.value * (distance / pinchStartDistance.value)),
    )
    mobileImageScale.value = nextScale
    if (nextScale <= 1) {
        mobileImageOffsetX.value = 0
        mobileImageOffsetY.value = 0
    }
    mobileImageOffsetX.value = clampImageOffset(mobileImageOffsetX.value, 'x')
    mobileImageOffsetY.value = clampImageOffset(mobileImageOffsetY.value, 'y')
    lastMobileGestureAt.value = Date.now()
}

const handleImageTouchEnd = (event: TouchEvent) => {
    if (event.touches.length < 2) {
        pinchStartDistance.value = null
    }

    if (event.touches.length === 1 && mobileImageScale.value > 1) {
        const touch = event.touches.item(0)
        if (touch) setPanStart(touch)
    } else if (event.touches.length === 0) {
        isTouching.value = false
        panStartX.value = null
        panStartY.value = null
    }
}

const openLightbox = async () => {
    if (!props.shot.src) return

    lastFocusedElement.value = document.activeElement instanceof HTMLElement ? document.activeElement : null
    isLandscape.value = false
    isTouching.value = false
    mobileImageScale.value = 1
    mobileImageOffsetX.value = 0
    mobileImageOffsetY.value = 0
    pinchStartDistance.value = null
    panStartX.value = null
    panStartY.value = null
    lastMobileGestureAt.value = 0
    isLightboxOpen.value = true

    await nextTick()
    lightboxCloseButtonRef.value?.focus()
}

const closeLightbox = async () => {
    if (!isLightboxOpen.value) return

    isLightboxOpen.value = false
    isLandscape.value = false
    isTouching.value = false
    mobileImageScale.value = 1
    mobileImageOffsetX.value = 0
    mobileImageOffsetY.value = 0
    pinchStartDistance.value = null
    panStartX.value = null
    panStartY.value = null

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

.screenshot-lightbox-actions {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
}

.screenshot-lightbox-rotate-btn {
    display: none;
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

@media (max-width: 1023px) {
    .screenshot-lightbox-backdrop {
        padding: 0;
    }

    .screenshot-lightbox {
        position: relative;
        width: 100%;
        height: 100%;
        max-height: none;
        border: 0;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
    }

    .screenshot-lightbox-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: max(0.875rem, env(safe-area-inset-top, 0.875rem)) max(0.875rem, env(safe-area-inset-right, 0.875rem)) 0.875rem max(0.875rem, env(safe-area-inset-left, 0.875rem));
        background: linear-gradient(180deg, rgba(20, 16, 13, 0.88) 0%, rgba(20, 16, 13, 0.45) 70%, transparent 100%);
        border-bottom: 0;
        pointer-events: none;
    }

    .screenshot-lightbox-header > * {
        pointer-events: auto;
    }

    .screenshot-lightbox-label {
        color: #d6cfc7;
    }

    .screenshot-lightbox-header h2 {
        color: #fffdf7;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .screenshot-lightbox-actions {
        gap: 0.5rem;
    }

    .screenshot-lightbox-rotate-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        height: 2.375rem;
        padding: 0 0.75rem;
        border: 2px solid #26201a;
        border-radius: 999px;
        background: #fff;
        color: #26201a;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.6875rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
        transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease, color 0.15s ease;
        user-select: none;
        -webkit-user-select: none;
    }

    .screenshot-lightbox-rotate-btn:hover {
        transform: translate(1px, 1px);
        box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    }

    .screenshot-lightbox-rotate-btn.is-active {
        background: #6d4a9e;
        color: #fffdf7;
        border-color: #26201a;
        box-shadow: 2px 2px 0 #26201a;
    }

    .screenshot-lightbox-rotate-btn:focus-visible {
        outline: 3px solid #6d4a9e;
        outline-offset: 3px;
    }

    .screenshot-lightbox-rotate-btn .material-symbols-outlined {
        font-size: 1.125rem;
        transition: transform 0.25s ease;
    }

    .screenshot-lightbox-rotate-btn.is-active .material-symbols-outlined {
        transform: rotate(90deg);
    }

    .screenshot-lightbox-close {
        width: 2.375rem;
        height: 2.375rem;
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    }

    .screenshot-lightbox-close .material-symbols-outlined {
        font-size: 1.125rem;
    }

    .screenshot-lightbox-body {
        width: 100%;
        height: 100%;
        max-height: none;
        padding: 0.75rem;
        overscroll-behavior: contain;
        touch-action: none;
        cursor: zoom-out;
    }

    .screenshot-lightbox-body img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-drag: none;
        will-change: transform;
        transform-origin: center center;
        transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1);
    }

    .screenshot-lightbox-body img.is-touching {
        transition: none !important;
    }

    .screenshot-lightbox-body img.is-landscape {
        max-width: calc(100vh - 2rem);
        max-width: calc(100dvh - 2rem);
        max-height: calc(100vw - 2rem);
        max-height: calc(100dvw - 2rem);
        flex-shrink: 0;
    }
}
</style>

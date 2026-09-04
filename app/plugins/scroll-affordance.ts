import type { ObjectDirective } from 'vue'

type ScrollAffordanceState = {
    onScroll: () => void
    onResize: () => void
    onLoad: () => void
    resizeObserver?: ResizeObserver
    mutationObserver?: MutationObserver
    frameId?: number
    timeoutIds: number[]
}

const states = new WeakMap<HTMLElement, ScrollAffordanceState>()

const updateScrollAffordance = (element: HTMLElement) => {
    const hasOverflow = element.scrollHeight - element.clientHeight > 1
    const isAtStart = !hasOverflow || element.scrollTop <= 1
    const isAtEnd = !hasOverflow || element.scrollTop + element.clientHeight >= element.scrollHeight - 1

    element.classList.toggle('scroll-affordance-active', hasOverflow)
    element.classList.toggle('scroll-affordance-at-start', isAtStart)
    element.classList.toggle('scroll-affordance-at-end', isAtEnd)
}

const mountScrollAffordance = (element: HTMLElement) => {
    element.classList.add('scroll-affordance')

    const onScroll = () => updateScrollAffordance(element)
    const onResize = () => updateScrollAffordance(element)
    const onLoad = () => updateScrollAffordance(element)
    const resizeObserver = typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(() => updateScrollAffordance(element))
    const mutationObserver = typeof MutationObserver === 'undefined'
        ? undefined
        : new MutationObserver(() => updateScrollAffordance(element))

    element.addEventListener('scroll', onScroll, { passive: true })
    element.addEventListener('load', onLoad, true)
    window.addEventListener('resize', onResize)
    resizeObserver?.observe(element)
    mutationObserver?.observe(element, {
        childList: true,
        characterData: true,
        subtree: true,
    })

    const frameId = window.requestAnimationFrame(() => updateScrollAffordance(element))
    const timeoutIds = [
        window.setTimeout(() => updateScrollAffordance(element), 0),
        window.setTimeout(() => updateScrollAffordance(element), 200),
    ]

    states.set(element, { onScroll, onResize, onLoad, resizeObserver, mutationObserver, frameId, timeoutIds })
    updateScrollAffordance(element)
}

const unmountScrollAffordance = (element: HTMLElement) => {
    const state = states.get(element)
    if (!state) return

    element.removeEventListener('scroll', state.onScroll)
    element.removeEventListener('load', state.onLoad, true)
    window.removeEventListener('resize', state.onResize)
    if (state.frameId !== undefined) window.cancelAnimationFrame(state.frameId)
    state.timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId))
    state.resizeObserver?.disconnect()
    state.mutationObserver?.disconnect()
    states.delete(element)
}

const scrollAffordanceDirective: ObjectDirective<HTMLElement> = {
    getSSRProps: () => ({}),
    mounted: mountScrollAffordance,
    updated: updateScrollAffordance,
    unmounted: unmountScrollAffordance,
}

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive('scroll-affordance', scrollAffordanceDirective)
})

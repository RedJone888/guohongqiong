import { flushPromises, mount } from '@vue/test-utils'
import { nextTick, reactive, ref } from 'vue'
import { createMemoryHistory, createRouter, RouterLink } from 'vue-router'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ProjectScreenshotSlot from '../app/components/projects/ProjectScreenshotSlot.vue'
import PortfolioShell from '../app/components/PortfolioShell.vue'
import ProfilePage from '../app/pages/index.vue'
import { portfolioPaths } from '../app/data/navigation'

const setupRouter = async (path = '/') => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: Object.values(portfolioPaths).map(path => ({ path, component: { template: '<div />' } })),
  })
  await router.push(path)
  await router.isReady()
  vi.stubGlobal('useRoute', () => reactive({ get path() { return router.currentRoute.value.path } }))
  return router
}

const mountShell = async (path = '/') => {
  const router = await setupRouter(path)
  const locale = ref<'ja' | 'en'>('ja')
  const useHead = vi.fn()
  vi.stubGlobal('useLocale', () => ({ locale, setLocale: (value: 'ja' | 'en') => { locale.value = value } }))
  vi.stubGlobal('useState', () => locale)
  vi.stubGlobal('useHead', useHead)
  const wrapper = mount(PortfolioShell, {
    global: { plugins: [router], components: { NuxtLink: RouterLink }, directives: { 'scroll-affordance': {} } },
  })
  return { wrapper, router, locale, useHead }
}

afterEach(() => { vi.unstubAllGlobals() })

describe('portfolio navigation and locale', () => {
  it('switches languages without changing the current route', async () => {
    const { wrapper, router, locale, useHead } = await mountShell('/education')
    await wrapper.get('.desktop-language-switch button:nth-of-type(2)').trigger('click')
    expect(locale.value).toBe('en')
    expect(wrapper.get('.desktop-language-switch button:nth-of-type(2)').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('a[aria-label="Projects"]').attributes('href')).toBe('/projects')
    expect(router.currentRoute.value.path).toBe('/education')
    await wrapper.get('.desktop-language-switch button:nth-of-type(1)').trigger('click')
    expect(locale.value).toBe('ja')
    expect(wrapper.get('.desktop-language-switch button:nth-of-type(1)').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('a[aria-label="プロジェクト"]').attributes('href')).toBe('/projects')
    wrapper.unmount()

    const { useLocale } = await import('../app/composables/useLocale')
    const state = useLocale()
    state.setLocale('en')
    await nextTick()
    const headFactory = useHead.mock.calls.at(-1)?.[0] as (() => { htmlAttrs: { lang: string } })
    expect(headFactory().htmlAttrs.lang).toBe('en')
    state.setLocale('ja')
    await nextTick()
    expect(headFactory().htmlAttrs.lang).toBe('ja')
  })

  it('selects education immediately when opened by its path', async () => {
    const { wrapper } = await mountShell('/education')
    expect(wrapper.get('main > section').attributes('id')).toBe('education')
    expect(wrapper.get('a[aria-label="学歴"]').attributes('aria-current')).toBe('page')
    expect(wrapper.get('.credential-mobile-nav a[href="/education"]').attributes('aria-current')).toBe('page')
    expect(wrapper.get('.mobile-bottom-nav a[href="/education"]').attributes('aria-current')).toBe('page')
    wrapper.unmount()
  })

  it('keeps the selected section in sync with navigation, back, and forward', async () => {
    const { wrapper, router } = await mountShell()
    await wrapper.get('a[aria-label="プロジェクト"]').trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.fullPath).toBe('/projects')
    expect(wrapper.get('main > section').attributes('id')).toBe('projects')
    expect(wrapper.get('a[aria-label="プロジェクト"]').attributes('aria-current')).toBe('page')
    await wrapper.get('a[aria-label="学歴"]').trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.fullPath).toBe('/education')
    router.back()
    await flushPromises()
    expect(wrapper.get('main > section').attributes('id')).toBe('projects')
    router.forward()
    await flushPromises()
    expect(wrapper.get('main > section').attributes('id')).toBe('education')
    wrapper.unmount()
  })

  it('returns to the last credential route from mobile navigation', async () => {
    const { wrapper, router } = await mountShell('/education')
    await wrapper.get('.mobile-bottom-nav a[href="/projects"]').trigger('click')
    await flushPromises()
    expect(wrapper.find('.credential-mobile-nav').exists()).toBe(false)
    await wrapper.get('.mobile-bottom-nav a[href="/education"]').trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.path).toBe('/education')
    await wrapper.get('.credential-mobile-nav a[href="/skills"]').trigger('click')
    await flushPromises()
    expect(router.currentRoute.value.path).toBe('/skills')
    expect(wrapper.get('.mobile-bottom-nav a[href="/skills"]').attributes('aria-current')).toBe('page')
    wrapper.unmount()
  })
})

describe('screenshot lightbox', () => {
  it('focuses the close button and restores the trigger focus on Escape', async () => {
    vi.stubGlobal('useLocale', () => ({ locale: ref<'ja' | 'en'>('ja') }))
    vi.stubGlobal('useId', () => 'lightbox-title')

    const wrapper = mount(ProjectScreenshotSlot, {
      attachTo: document.body,
      props: {
        shot: {
          label: 'SCREEN 01',
          title: 'Example screen',
          description: '',
          alt: 'Example screen',
          src: '/example.png',
        },
        placeholderLabel: 'Screenshot placeholder',
      },
    })

    const trigger = wrapper.get('.project-screenshot-trigger').element as HTMLButtonElement
    trigger.focus()
    await wrapper.get('.project-screenshot-trigger').trigger('click')
    await nextTick()

    expect(document.activeElement?.getAttribute('aria-label')).toBe('拡大画像を閉じる')
    const lightbox = document.querySelector('[role="dialog"]') as HTMLElement
    const focusable = lightbox.querySelectorAll<HTMLButtonElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
    const lastFocusable = focusable[focusable.length - 1]
    lastFocusable?.focus()
    lastFocusable?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }))
    await nextTick()
    expect(document.activeElement?.getAttribute('aria-label')).toBe('横向きに回転')
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', cancelable: true }))
    await nextTick()

    expect(document.querySelector('[role="dialog"]')).toBeNull()
    expect(document.activeElement).toBe(trigger)
    wrapper.unmount()
  })
})

describe('profile information links', () => {
  it('navigates to the corresponding route from each information item', async () => {
    const router = await setupRouter()
    vi.stubGlobal('useLocale', () => ({ locale: ref<'ja' | 'en'>('ja') }))
    vi.stubGlobal('usePortfolioPage', vi.fn())
    const wrapper = mount(ProfilePage, {
      global: { plugins: [router], components: { NuxtLink: RouterLink }, directives: { 'scroll-affordance': {} } },
    })
    const destinations = {
      experience: '/experience', independent: '/projects', education: '/education',
      languages: '/certificates', location: '/contact',
    }
    for (const [key, path] of Object.entries(destinations)) {
      const link = wrapper.get(`[data-fact-key="${key}"] a`)
      expect(link.attributes('href')).toBe(path)
      expect(link.attributes('aria-label')).toBeTruthy()
      await link.trigger('click')
      await flushPromises()
      expect(router.currentRoute.value.fullPath).toBe(path)
    }
    wrapper.unmount()
  })
})

import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import ProjectScreenshotSlot from '../app/components/projects/ProjectScreenshotSlot.vue'
import PortfolioShell from '../app/components/PortfolioShell.vue'
import ProfilePanel from '../app/components/panels/ProfilePanel.vue'

describe('portfolio navigation and locale', () => {
  it('switches the mounted shell between Japanese and English', async () => {
    const locale = ref<'ja' | 'en'>('ja')
    const useHead = vi.fn()
    const setLocale = (value: 'ja' | 'en') => { locale.value = value }
    vi.stubGlobal('useLocale', () => ({ locale, setLocale }))
    vi.stubGlobal('useState', () => locale)
    vi.stubGlobal('useHead', useHead)
    const wrapper = mount(PortfolioShell, { global: { stubs: { NuxtLink: true }, directives: { 'scroll-affordance': {} } } })
    await wrapper.get('.desktop-language-switch button:nth-of-type(2)').trigger('click')
    await nextTick()
    expect(locale.value).toBe('en')
    expect(wrapper.get('.desktop-language-switch button:nth-of-type(2)').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('button[aria-label="Projects"]').exists()).toBe(true)
    await wrapper.get('.desktop-language-switch button:nth-of-type(1)').trigger('click')
    await nextTick()
    expect(locale.value).toBe('ja')
    expect(wrapper.get('.desktop-language-switch button:nth-of-type(1)').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('button[aria-label="プロジェクト"]').exists()).toBe(true)
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

  it('moves the shell navigation to the selected section and URL hash', async () => {
    const locale = ref<'ja' | 'en'>('ja')
    vi.stubGlobal('useLocale', () => ({ locale, setLocale: (value: 'ja' | 'en') => { locale.value = value } }))
    vi.stubGlobal('useState', () => locale)
    vi.stubGlobal('useHead', vi.fn())
    vi.stubGlobal('useId', () => 'shell-title')
    const wrapper = mount(PortfolioShell, { global: { stubs: { 'NuxtLink': true }, directives: { 'scroll-affordance': {} } } })
    await wrapper.get('button[aria-label="プロジェクト"]').trigger('click')
    expect(window.location.hash).toBe('#projects')
    expect(wrapper.get('button[aria-label="プロジェクト"]').attributes('aria-current')).toBe('page')
    wrapper.unmount()
  })
})


describe('profile information links', () => {
  it('opens the corresponding section from each information item', async () => {
    vi.stubGlobal('useLocale', () => ({ locale: ref<'ja' | 'en'>('ja') }))
    const wrapper = mount(ProfilePanel, { global: { directives: { 'scroll-affordance': {} } } })
    const destinations = {
      experience: 'experience', independent: 'projects', education: 'education',
      languages: 'certificates', location: 'contact',
    }
    for (const [key, section] of Object.entries(destinations)) {
      const link = wrapper.get(`[data-fact-key="${key}"] a`)
      expect(link.attributes('href')).toBe(`#${section}`)
      expect(link.attributes('aria-label')).toBeTruthy()
      await link.trigger('click')
      expect(wrapper.emitted('navigate')?.at(-1)).toEqual([section])
    }
    wrapper.unmount()
  })
})

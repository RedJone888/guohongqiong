<template>
    <div
        class="portfolio-shell relative flex h-dvh w-full flex-col overflow-hidden bg-[var(--bg)] text-stone-950 lg:w-screen lg:flex-row lg:items-center lg:justify-center">
        <div class="pointer-events-none fixed inset-0">
            <div class="absolute left-[38%] top-[-18%] h-[36rem] w-[36rem] rounded-full bg-indigo-100/20 blur-3xl" />
            <div class="absolute right-[-16rem] top-[12%] h-[34rem] w-[34rem] rounded-full bg-stone-200/70 blur-3xl" />
            <div class="absolute bottom-[-20rem] left-[18%] h-[42rem] w-[42rem] rounded-full bg-slate-100 blur-3xl" />
        </div>
        <!-- 桌面端语言切换 -->
        <div class="desktop-language-switch fixed top-6 z-50 hidden items-center justify-center gap-2 text-xs lg:flex">
            <button type="button" class="font-semibold" :class="locale === 'ja' ? 'text-stone-950' : 'text-stone-400'"
                :aria-pressed="locale === 'ja'" @click="setLocale('ja')">
                JA
            </button>
            <span class="text-stone-300">/</span>
            <button type="button" class="font-semibold" :class="locale === 'en' ? 'text-stone-950' : 'text-stone-400'"
                :aria-pressed="locale === 'en'" @click="setLocale('en')">
                EN
            </button>
        </div>

        <!-- 移动端顶部 -->
        <header
            class="mobile-topbar relative z-40 flex h-[calc(4rem+env(safe-area-inset-top))] shrink-0 items-center justify-between px-4 pt-[env(safe-area-inset-top)] lg:hidden">
            <button type="button" class="flex min-w-0 items-center gap-3 text-left" aria-label="Profile"
                @click="setActiveSection('profile')">
                <span
                    class="mobile-avatar flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                    <img v-if="profile.photoUrl" :src="profile.photoUrl" :alt="profile.nameRomaji"
                        class="h-full w-full object-cover object-center" />
                    <span v-else class="text-sm font-bold text-stone-900">{{ initial }}</span>
                </span>
                <span class="min-w-0">
                    <span class="block truncate text-sm font-bold text-stone-950">
                        {{ profile.nameKanji }}<span class="text-xs font-normal text-stone-600">{{ mobileSubName }}</span>
                    </span>
                    <span class="block truncate text-[0.6875rem] font-semibold text-stone-600">{{ profile.role }}</span>
                </span>
            </button>

            <div class="mobile-language-switch flex items-center rounded-full p-1 text-xs">
                <button type="button" class="mobile-language-option flex h-8 min-w-9 items-center justify-center rounded-full font-extrabold"
                    :class="locale === 'ja' ? 'mobile-language-active text-stone-950' : 'text-stone-500'"
                    :aria-pressed="locale === 'ja'" @click="setLocale('ja')">
                    JA
                </button>
                <button type="button" class="mobile-language-option flex h-8 min-w-9 items-center justify-center rounded-full font-extrabold"
                    :class="locale === 'en' ? 'mobile-language-active text-stone-950' : 'text-stone-500'"
                    :aria-pressed="locale === 'en'" @click="setLocale('en')">
                    EN
                </button>
            </div>
        </header>

        <!-- 桌面端左侧导航栏 -->
        <div class="relative hidden shrink-0 p-6 pr-4 lg:block">
            <nav aria-label="Portfolio sections"
                class="glass-panel flex h-[calc(100dvh-48px)] w-64 flex-col rounded-[2rem] border border-white/80 px-5 py-7">
                <div class="mb-4 flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-stone-100 avatar">
                        <img v-if="profile.photoUrl" :src="profile.photoUrl" :alt="profile.nameRomaji"
                            class="h-full w-full object-cover object-center" loading="lazy" />
                        <span v-else class="text-2xl font-bold text-stone-900">
                            {{ initial }}
                        </span>
                    </div>

                    <h1 class="text-xl font-bold leading-tight tracking-tight text-stone-950">
                        {{ profile.nameKanji }}
                    </h1>

                    <p class="mt-2 text-xs font-medium leading-5 text-stone-500">
                        {{ profile.nameRomaji }}<br />
                        {{ profile.nameKana }}
                    </p>

                    <p class="mt-3 text-sm font-semibold text-green-900">
                        {{ profile.role }}
                    </p>
                </div>

                <div class="scroll-affordance-frame min-h-0 flex-1">
                    <div v-scroll-affordance class="min-h-0 flex-1 overflow-y-auto no-scrollbar p-2">
                        <ul class="flex flex-col gap-2">
                            <li v-for="section in localizedSections" :key="section.key">
                                <button type="button"
                                    class="group flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
                                    :class="activeSection === section.key
                                        ? 'nav-depth-active font-bold text-stone-950'
                                        : 'text-stone-500 opacity-75 hover:bg-[#ebe3f6]/40 hover:text-stone-950 hover:opacity-100'
                                        " :aria-label="section.label"
                                    :aria-current="activeSection === section.key ? 'page' : undefined"
                                    @click="setActiveSection(section.key)">
                                    <span aria-hidden="true"
                                        class="nav-depth-icon relative material-symbols-outlined text-xl transition-colors"
                                        :class="activeSection === section.key ? 'material-symbol-filled' : ''">
                                        {{ section.icon }}
                                    </span>
                                    <span class="nav-depth-label relative tracking-[0.05em]">
                                        {{ section.label }}
                                    </span>
                                </button>

                            </li>
                        </ul>
                    </div>
                    <div class="scroll-cue" aria-hidden="true">
                        <span class="material-symbols-outlined">expand_more</span>
                    </div>
                </div>

                <div class="mt-auto border-t border-stone-200 pt-5 px-2">
                    <a :href="profile.resumeUrl"
                        class="subscript-action download flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold">
                        <span class="material-symbols-outlined text-sm download-icon">download</span>
                        {{ localizedProfile.resumeLabel }}
                    </a>
                </div>
            </nav>
        </div>

        <div
            class="portfolio-main-column relative flex min-h-0 w-full flex-1 flex-col lg:h-full lg:min-h-0 lg:px-0 lg:py-6">
            <div class="scroll-affordance-frame min-h-0 w-full flex-1">
                <main ref="mainScrollRef" v-scroll-affordance
                    class="scroll-affordance-page min-h-0 w-full flex-1 overflow-y-auto overflow-x-hidden py-3 no-scrollbar lg:h-auto lg:min-h-0 lg:max-w-[88rem] lg:overflow-visible lg:pb-0">
                    <section :id="activeSection" class="min-h-full w-full lg:h-full lg:min-h-0">
                        <div class="min-h-full w-full lg:h-full lg:min-h-0">
                            <ProfilePanel v-if="activeSection === 'profile'" @navigate="setActiveSection" />
                            <component :is="activeComponent" v-else />
                        </div>
                    </section>
                </main>
                <div class="scroll-cue" aria-hidden="true">
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>
        </div>

        <!-- 移动端合并菜单的子菜单 -->
        <nav v-if="isCredentialSection" aria-label="Portfolio and credentials sections"
            class="credential-mobile-nav relative z-50 grid h-14 shrink-0 grid-cols-3 gap-1 px-3 py-2 lg:hidden">
            <button v-for="item in credentialNavItems" :key="item.key" type="button"
                class="credential-mobile-tab relative flex min-w-0 items-center justify-center gap-1 rounded-xl px-1 text-[0.6875rem] font-bold transition"
                :class="activeSection === item.key ? 'credential-mobile-tab-active text-stone-950' : 'text-stone-500'"
                :data-accent="item.accent"
                :aria-current="activeSection === item.key ? 'page' : undefined" @click="setActiveSection(item.key)">
                <span class="credential-mobile-tab-icon material-symbols-outlined text-[1.0625rem]!"
                    :class="activeSection === item.key ? 'material-symbol-filled' : ''">{{ item.icon }}</span>
                <span class="truncate">{{ item.label }}</span>
            </button>
        </nav>

        <!-- 移动端底部 -->
        <nav aria-label="Primary navigation"
            class="mobile-bottom-nav relative z-40 grid h-[calc(4.25rem+env(safe-area-inset-bottom))] shrink-0 grid-cols-5 px-1 pb-[env(safe-area-inset-bottom)] lg:hidden">
            <button v-for="item in mobileNavItems" :key="item.key" type="button"
                class="mobile-nav-item flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[0.625rem] font-semibold transition"
                :class="isMobileNavActive(item.key) ? 'font-extrabold text-stone-950' : 'text-stone-500'"
                :aria-current="isMobileNavActive(item.key) ? 'page' : undefined" @click="setMobileSection(item.key)">
                <span class="mobile-nav-icon material-symbols-outlined text-[1.1875rem]!"
                    :class="isMobileNavActive(item.key) ? 'mobile-nav-icon-active material-symbol-filled' : ''">
                    {{ item.icon }}
                </span>
                <span class="max-w-full truncate">{{ item.label }}</span>
            </button>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import {
    portfolioSections,
    profile,
    type PortfolioSectionKey
} from '~/data/site'

import ProfilePanel from '~/components/panels/ProfilePanel.vue'
import ExperiencePanel from '~/components/panels/ExperiencePanel.vue'
import ProjectsPanel from '~/components/panels/ProjectsPanel.vue'
import EducationPanel from '~/components/panels/EducationPanel.vue'
import CertificatesPanel from '~/components/panels/CertificatesPanel.vue'
import SkillsPanel from '~/components/panels/SkillsPanel.vue'
import ContactPanel from '~/components/panels/ContactPanel.vue'

const { locale, setLocale } = useLocale()

const activeSection = ref<PortfolioSectionKey>('profile')
const lastCredentialSection = ref<PortfolioSectionKey>('certificates')
const mainScrollRef = ref<HTMLElement | null>(null)

type MobileSectionKey = PortfolioSectionKey | 'credentials'

const credentialKeys: PortfolioSectionKey[] = ['certificates', 'skills', 'education']

const localizedProfile = computed(() => {
    return profile[locale.value]
})

const mobileSubName = computed(() => {
    return locale.value === 'ja' ? '（グオ ホンチョン）' : '（guohongqiong）'
})

const navIconMap: Record<PortfolioSectionKey, string> = {
    profile: 'person',
    experience: 'work',
    projects: 'dashboard',
    education: 'school',
    certificates: 'verified',
    skills: 'psychology',
    contact: 'mail'
}

const localizedSections = computed(() => {
    return portfolioSections.map((section) => ({
        key: section.key,
        icon: navIconMap[section.key],
        ...section[locale.value]
    }))
})

const isCredentialSection = computed(() => {
    return credentialKeys.includes(activeSection.value)
})

const credentialNavItems = computed(() => {
    const keys: PortfolioSectionKey[] = ['certificates', 'skills', 'education']
    const accentMap: Partial<Record<PortfolioSectionKey, 'yellow' | 'pink' | 'blue'>> = {
        certificates: 'yellow',
        skills: 'pink',
        education: 'blue'
    }
    return keys.map((key) => {
        const section = localizedSections.value.find((item) => item.key === key)!
        return {
            key,
            icon: navIconMap[key],
            accent: accentMap[key],
            label: section.label
        }
    })
})

const mobileNavItems = computed(() => {
    const isJa = locale.value === 'ja'
    return [
        { key: 'profile' as const, icon: 'person', label: isJa ? 'プロフィール' : 'Profile' },
        { key: 'experience' as const, icon: 'work', label: isJa ? '実務経験' : 'Experience' },
        { key: 'projects' as const, icon: 'dashboard', label: isJa ? 'プロジェクト' : 'Projects' },
        { key: 'credentials' as const, icon: 'verified', label: isJa ? '実績・資格' : 'Portfolio' },
        { key: 'contact' as const, icon: 'mail', label: isJa ? '連絡先' : 'Contact' }
    ]
})

const componentMap = {
    profile: ProfilePanel,
    experience: ExperiencePanel,
    projects: ProjectsPanel,
    education: EducationPanel,
    certificates: CertificatesPanel,
    skills: SkillsPanel,
    contact: ContactPanel
}

const activeComponent = computed(() => {
    return componentMap[activeSection.value]
})

const resetMainScroll = () => {
    mainScrollRef.value?.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

const setActiveSection = (section: PortfolioSectionKey) => {
    activeSection.value = section
    if (credentialKeys.includes(section)) {
        lastCredentialSection.value = section
    }
    window.history.replaceState(null, '', `#${section}`)
    void nextTick(resetMainScroll)
}

const setMobileSection = (section: MobileSectionKey) => {
    setActiveSection(section === 'credentials' ? lastCredentialSection.value : section)
}

const isMobileNavActive = (section: MobileSectionKey) => {
    return section === 'credentials'
        ? credentialKeys.includes(activeSection.value)
        : activeSection.value === section
}

const initial = computed(() => {
    return profile.nameRomaji
        .split(/\s+/)
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
})

const isImageViewerTarget = (target: EventTarget | null) => {
    return target instanceof Element && Boolean(target.closest('.screenshot-lightbox-body'))
}

const preventPagePinchZoom = (event: TouchEvent) => {
    if (event.touches.length > 1 && !isImageViewerTarget(event.target)) {
        event.preventDefault()
    }
}

const preventPageGestureZoom = (event: Event) => {
    if (!isImageViewerTarget(event.target)) {
        event.preventDefault()
    }
}

const preventPageWheelZoom = (event: WheelEvent) => {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
    }
}

const preventPageKeyboardZoom = (event: KeyboardEvent) => {
    if (!(event.ctrlKey || event.metaKey)) return

    if (['+', '-', '=', '_', '0'].includes(event.key)) {
        event.preventDefault()
    }
}

onMounted(() => {
    const hash = window.location.hash.replace('#', '') as PortfolioSectionKey

    if (portfolioSections.some((section) => section.key === hash)) {
        activeSection.value = hash
        if (credentialKeys.includes(hash)) {
            lastCredentialSection.value = hash
        }
    }

    document.addEventListener('touchstart', preventPagePinchZoom, { capture: true, passive: false })
    document.addEventListener('touchmove', preventPagePinchZoom, { capture: true, passive: false })
    document.addEventListener('gesturestart', preventPageGestureZoom, { capture: true, passive: false })
    document.addEventListener('gesturechange', preventPageGestureZoom, { capture: true, passive: false })
    document.addEventListener('gestureend', preventPageGestureZoom, { capture: true, passive: false })
    document.addEventListener('wheel', preventPageWheelZoom, { capture: true, passive: false })
    document.addEventListener('keydown', preventPageKeyboardZoom, true)
})

onBeforeUnmount(() => {
    document.removeEventListener('touchstart', preventPagePinchZoom, true)
    document.removeEventListener('touchmove', preventPagePinchZoom, true)
    document.removeEventListener('gesturestart', preventPageGestureZoom, true)
    document.removeEventListener('gesturechange', preventPageGestureZoom, true)
    document.removeEventListener('gestureend', preventPageGestureZoom, true)
    document.removeEventListener('wheel', preventPageWheelZoom, true)
    document.removeEventListener('keydown', preventPageKeyboardZoom, true)
})
</script>

<style scoped>
.mobile-topbar,
.mobile-bottom-nav {
    --mobile-paper: #fffdf7;
    --mobile-ink: #26201a;
    background: var(--mobile-paper);
}

.mobile-topbar {
    border-bottom: 2px solid var(--mobile-ink);
}

.mobile-avatar {
    border: 1.5px solid var(--mobile-ink);
    box-shadow: 2px 2px 1px #6b6560;
}

.mobile-language-switch {
    border: 1.5px solid var(--mobile-ink);
    background: #fff;
}

.mobile-language-option {
    transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.mobile-language-active {
    border: 1.5px solid var(--mobile-ink);
    background: #ffeb9f;
    box-shadow: 1.5px 1.5px 1px #6b6560;
    transform: translate(-1px, -1px);
}

.mobile-bottom-nav {
    border-top: 2px solid var(--mobile-ink);
}

.mobile-nav-icon {
    display: inline-flex;
    min-width: 2rem;
    height: 1.55rem;
    align-items: center;
    justify-content: center;
    border: 1.5px solid transparent;
    border-radius: 999px;
    transition: background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}

.mobile-nav-icon-active {
    border-color: var(--mobile-ink);
    background: #ffeb9f;
    box-shadow: 1.5px 1.5px 1px #6b6560;
    transform: translate(-1px, -1px);
}

.mobile-nav-item:active .mobile-nav-icon {
    transform: translate(0, 0);
    box-shadow: none;
}

.credential-mobile-nav {
    border-top: 2px solid var(--mobile-ink, #26201a);
    background: #fffdf7;
}

.credential-mobile-nav::after {
    content: "";
    position: absolute;
    z-index: 2;
    bottom: -0.65rem;
    left: 70%;
    width: 2.5rem;
    height: 0.75rem;
    border-right: 2px solid var(--mobile-ink, #26201a);
    border-left: 2px solid var(--mobile-ink, #26201a);
    background: #fffdf7;
    transform: translateX(-50%);
}

.credential-mobile-tab {
    border: 0;
}

.credential-mobile-tab-active {
    background: #f4efe6;
}

.credential-mobile-tab-active[data-accent="yellow"] {
    background: color-mix(in srgb, #ffdc5d 32%, #fffdf7);
}

.credential-mobile-tab-active[data-accent="pink"] {
    background: color-mix(in srgb, #efb0c6 32%, #fffdf7);
}

.credential-mobile-tab-active[data-accent="blue"] {
    background: color-mix(in srgb, #9fd0f3 32%, #fffdf7);
}

.credential-mobile-tab:active {
    background: #eee7dc;
}
</style>

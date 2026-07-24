<template>
  <header class="site-header">
    <NuxtLink class="brand" to="/" aria-label="Go to home">
      <span class="brand-mark">TY</span>
      <span class="brand-text">{{ profile.name }}</span>
    </NuxtLink>

    <nav class="nav" aria-label="Primary navigation">
      <a v-for="link in localizedNavLinks" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
      <a class="nav-cta" :href="`mailto:${profile.email}`">Contact</a>
    </nav>
    <div class="flex items-center gap-2 text-sm">
      <button class="font-semibold" :class="locale === 'ja' ? 'text-stone-950' : 'text-stone-400'"
        @click="setLocale('ja')">
        日本語
      </button>

      <span class="text-stone-300">/</span>

      <button class="font-semibold" :class="locale === 'en' ? 'text-stone-950' : 'text-stone-400'"
        @click="setLocale('en')">
        English
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { profile, navLinks } from '~/data/site'
const { locale, setLocale } = useLocale()
const localizedNavLinks = computed(() => {
  return navLinks.map((link) => ({
    href: link.href,
    label: link[locale.value].label
  }))
})
</script>

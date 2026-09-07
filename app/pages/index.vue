<template>
  <PortfolioShell />
</template>

<script setup lang="ts">
import { profile } from '~/data/site'

useHead({
  title: `${profile.name} — ${profile.title}`,
  meta: [
    { name: 'description', content: profile.ja.summary },
    { property: 'og:title', content: `${profile.name} — ${profile.title}` },
    { property: 'og:description', content: profile.ja.summary },
  ],
})
</script>

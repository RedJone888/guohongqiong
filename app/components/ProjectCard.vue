<template>
  <article class="project-card">
    <div>
      <p class="project-subtitle">{{ project.subtitle }}</p>
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>
    </div>

    <ul class="tag-list" aria-label="Tech stack">
      <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
    </ul>

    <div class="project-links">
      <NuxtLink
        v-for="link in project.links"
        :key="link.label"
        :to="link.href"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/data/site'

defineProps<{
  project: Project
}>()
</script>

<template>
  <main class="project-detail">
    <div class="back-row">
      <NuxtLink class="inline-link" to="/">← Back to home</NuxtLink>
    </div>

    <template v-if="project">
      <p class="eyebrow">Project case study</p>
      <h1>{{ project.title }}</h1>
      <p class="hero-title">{{ project.subtitle }}</p>
      <p class="hero-intro">{{ project.summary }}</p>

      <ul class="tag-list" aria-label="Tech stack">
        <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
      </ul>

      <section class="detail-panel">
        <h2>Role</h2>
        <p>{{ project.role }}</p>
      </section>

      <section class="detail-panel">
        <h2>Highlights</h2>
        <ul>
          <li v-for="item in project.highlights" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="detail-panel">
        <h2>Outcome</h2>
        <p>{{ project.outcome }}</p>
      </section>
    </template>

    <template v-else>
      <p class="eyebrow">Not found</p>
      <h1>Project not found</h1>
      <p class="hero-intro">The project slug does not match the current placeholder data.</p>
      <NuxtLink class="button primary" to="/">Go home</NuxtLink>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '~/data/site'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const project = computed(() => projects.find((item) => item.slug === slug.value))

useHead(() => ({
  title: project.value ? project.value.title : 'Project not found',
  meta: [
    {
      name: 'description',
      content: project.value ? project.value.summary : 'Project not found'
    }
  ]
}))
</script>

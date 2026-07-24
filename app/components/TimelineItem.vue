<template>
  <article class="timeline-item">
    <div class="timeline-meta">
      <p>{{ period }}</p>
      <span>{{ location }}</span>
    </div>
    <div class="timeline-body">
      <h3>{{ role }}</h3>
      <p class="muted">{{ company }}</p>
      <ul>
        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}>()
</script>

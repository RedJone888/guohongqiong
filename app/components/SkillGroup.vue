<template>
  <article class="skill-card">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: string[]
}>()
</script>

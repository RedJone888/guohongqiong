<template>
  <section class="section" :id="id">
    <div class="section-heading">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description" class="section-description">{{ description }}</p>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

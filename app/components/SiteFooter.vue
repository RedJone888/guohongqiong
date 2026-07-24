<template>
  <footer class="site-footer">
    <p>© {{ new Date().getFullYear() }} {{ profile.name }}. Built with Nuxt.</p>
    <div class="footer-links">
      <a :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
      <a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
      <a :href="`mailto:${profile.email}`">Email</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '~/data/site'
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
</script>

<template>
  <footer class="border-t">
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div class="text-center md:text-left">
          <RouterLink to="/" class="text-sm font-medium">André Franceschini</RouterLink>
          <p class="mt-1 text-sm text-muted-foreground">Analista de Sistemas • Portfolio</p>
        </div>
        <div class="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/andrefranceschini" target="_blank" rel="noopener" class="text-sm text-muted-foreground hover:text-foreground">LinkedIn</a>
          <span class="text-muted-foreground">•</span>
          <a href="https://github.com/andrefranceschini" target="_blank" rel="noopener" class="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
          <span class="text-muted-foreground">•</span>
          <a :href="`mailto:${profile.email}`" class="text-sm text-muted-foreground hover:text-foreground">E-mail</a>
        </div>
      </div>
      <div class="mt-6 text-center text-xs text-muted-foreground">© {{ new Date().getFullYear() }} André Franceschini</div>
    </div>
  </footer>
</template>

<style scoped>
</style>


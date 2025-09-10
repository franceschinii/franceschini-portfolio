<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const route = useRoute()
const project = computed(() => projects.find(p => p.slug === String(route.params.slug)))
</script>

<template>
  <section class="container mx-auto px-4 py-12 md:py-16">
    <div v-if="project">
      <RouterLink to="/projects" class="text-sm text-muted-foreground hover:text-foreground">← Voltar</RouterLink>
      <h1 class="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{{ project.title }}</h1>
      <p class="mt-2 text-muted-foreground max-w-3xl">{{ project.description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <Badge v-for="t in project.tags" :key="t" variant="secondary">{{ t }}</Badge>
      </div>

      <div v-if="project.embedUrl" class="mt-8">
        <p class="mb-2 text-sm text-muted-foreground">Pré‑visualização (iframe; pode não carregar se o site bloquear embeds).</p>
        <div class="rounded-lg border">
          <iframe :src="project.embedUrl" class="h-[600px] w-full rounded-lg" />
        </div>
        <div class="mt-3">
          <a :href="project.embedUrl" target="_blank" rel="noopener"><Button variant="secondary">Abrir site</Button></a>
        </div>
      </div>

      <div v-if="project.instagram" class="mt-8">
        <p class="mb-2 text-sm text-muted-foreground">Conteúdo relacionado no Instagram.</p>
        <a :href="project.instagram" target="_blank" rel="noopener"><Button variant="secondary">Abrir Instagram</Button></a>
      </div>

      
    </div>
    <div v-else>
      <h1 class="text-2xl font-semibold">Projeto não encontrado</h1>
      <RouterLink to="/projects" class="mt-2 inline-block text-primary hover:underline">Voltar para projetos</RouterLink>
    </div>
  </section>
</template>

<style scoped>
</style>

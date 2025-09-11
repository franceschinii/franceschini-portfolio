<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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

      <!-- Seção de Cards com Sistemas -->
      <div v-if="project.cards && project.cards.length > 0" class="mt-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-6">Sistemas e Recursos</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card v-for="card in project.cards" :key="card.title" class="h-full">
            <CardHeader>
              <CardTitle class="text-lg">{{ card.title }}</CardTitle>
              <CardDescription class="text-sm">{{ card.description }}</CardDescription>
            </CardHeader>
            <CardContent class="flex-1">
              <div class="space-y-4">
                <div v-if="card.features && card.features.length > 0">
                  <h4 class="text-sm font-medium mb-2 text-muted-foreground">Principais recursos:</h4>
                  <ul class="space-y-1 text-sm">
                    <li v-for="feature in card.features" :key="feature" class="flex items-start gap-2">
                      <span class="text-primary">•</span>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                <div v-if="card.techDetails && card.techDetails.length > 0" class="pt-2 border-t">
                  <h4 class="text-sm font-medium mb-2 text-muted-foreground">Detalhes técnicos:</h4>
                  <ul class="space-y-1 text-xs text-muted-foreground">
                    <li v-for="detail in card.techDetails" :key="detail" class="font-mono bg-muted px-2 py-1 rounded">
                      {{ detail }}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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

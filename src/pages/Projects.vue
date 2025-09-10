<script setup lang="ts">
import { projects } from '@/data/projects'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="container mx-auto px-4 py-12 md:py-16">
    <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Projetos</h1>
    <p class="mt-3 text-muted-foreground">Alguns trabalhos e experimentos recentes.</p>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card v-for="p in projects" :key="p.slug" class="flex flex-col">
        <CardHeader>
          <CardTitle class="text-base">{{ p.title }}</CardTitle>
          <CardDescription>{{ p.description }}</CardDescription>
        </CardHeader>
        <CardContent class="mt-auto">
          <div class="flex flex-wrap gap-2">
            <Badge v-for="t in p.tags" :key="t" variant="secondary">{{ t }}</Badge>
          </div>
          <RouterLink :to="`/projects/${p.slug}`" class="mt-4 inline-block text-sm text-primary hover:underline">Ver detalhes</RouterLink>
        </CardContent>
      </Card>
    </div>
  </section>
  
</template>

<style scoped>
</style>

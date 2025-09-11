<script setup lang="ts">
import { computed } from 'vue'
import { reflections } from '@/data/reflections'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

// Deterministic reflection of the day
const todayIndex = computed(() => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = Number(now) - Number(start)
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  return day % reflections.length
})
const r = computed(() => reflections[todayIndex.value])
</script>

<template>
  <section class="container mx-auto px-4 pb-10">
    <Card>
      <CardHeader>
        <CardTitle>Reflexão filosófica do dia</CardTitle>
        <CardDescription>Uma citação para inspirar a jornada.</CardDescription>
      </CardHeader>
      <CardContent>
        <figure class="text-sm md:text-base">
          <blockquote class="italic">{{ r.text }}</blockquote>
          <figcaption class="mt-1 text-xs text-muted-foreground">{{ r.source }}</figcaption>
        </figure>
      </CardContent>
    </Card>
  </section>
</template>

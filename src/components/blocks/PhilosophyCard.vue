<script setup lang="ts">
import { computed } from 'vue'
import { quotes } from '@/data/quotes'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

// Deterministic quote of the day
const todayIndex = computed(() => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = Number(now) - Number(start)
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  return day % quotes.length
})
const q = computed(() => quotes[todayIndex.value])
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
          <blockquote class="italic">“{{ q.text }}”</blockquote>
          <figcaption class="mt-1 text-xs text-muted-foreground">— {{ q.author }}</figcaption>
        </figure>
      </CardContent>
    </Card>
  </section>
</template>


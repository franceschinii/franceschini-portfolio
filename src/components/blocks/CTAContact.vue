<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const scheduleUrl = import.meta.env.VITE_SCHEDULE_URL as string | undefined
const scheduleHref = scheduleUrl && scheduleUrl.length > 0
  ? scheduleUrl
  : `mailto:${profile.email}?subject=${encodeURIComponent('Agendar call')}`
</script>

<template>
  <section class="container mx-auto px-4 pb-20">
    <div class="rounded-2xl border p-8 text-center">
      <h2 class="text-2xl font-semibold">Vamos conversar?</h2>
      <p class="mt-2 text-muted-foreground">Conte sobre seu projeto de automação, IoT ou produto web.</p>
      <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
        <RouterLink to="/contact"><Button>Entrar em contato</Button></RouterLink>
        <a href="/cv.pdf" target="_blank" rel="noopener"><Button variant="secondary">Ver CV</Button></a>
        <a :href="scheduleHref" target="_blank" rel="noopener"><Button variant="secondary">Agendar call</Button></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="container mx-auto px-4 pb-14">
    <div class="rounded-2xl border p-6">
      <p class="text-center text-sm text-muted-foreground">Tecnologias e ferramentas</p>
      <div class="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
        <div class="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
          <Icon icon="logos:vue" width="36" height="36" />
        </div>
        <div class="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
          <Icon icon="logos:typescript-icon" width="36" height="36" />
        </div>
        <div class="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
          <Icon icon="logos:tailwindcss-icon" width="38" height="38" />
        </div>
        <div class="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
          <Icon icon="simple-icons:shadcnui" width="32" height="32" />
        </div>
        <div class="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
          <Icon icon="logos:arduino" width="38" height="38" />
        </div>
        <div class="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition">
          <Icon icon="logos:bootstrap" width="36" height="36" />
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
        <span class="text-xs text-muted-foreground">Empresas:</span>
        <span class="rounded-full border px-3 py-1 text-xs">Matsuko Indústria</span>
        <span class="rounded-full border px-3 py-1 text-xs">iPrime Sorocaba</span>
        <span class="rounded-full border px-3 py-1 text-xs">Colégio Maranata</span>
        <span class="rounded-full border px-3 py-1 text-xs">Grupo Piovezani</span>
        <span class="rounded-full border px-3 py-1 text-xs">Valter Franceschini Advocacia</span>
      </div>
    </div>
  </section>
</template>


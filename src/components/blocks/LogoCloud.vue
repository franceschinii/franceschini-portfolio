<script setup lang="ts">
import { Icon } from '@iconify/vue'

const technologies = [
  { icon: 'logos:vue', width: 36, height: 36, name: 'Vue.js' },
  { icon: 'logos:typescript-icon', width: 36, height: 36, name: 'TypeScript' },
  { icon: 'logos:react', width: 36, height: 36, name: 'React' },
  { icon: 'logos:nextjs-icon', width: 36, height: 36, name: 'Next.js' },
  { icon: 'logos:tailwindcss-icon', width: 38, height: 38, name: 'Tailwind' },
  { icon: 'simple-icons:shadcnui', width: 32, height: 32, name: 'Shadcn/UI' },
  { icon: 'logos:arduino', width: 38, height: 38, name: 'Arduino' },
  { icon: 'logos:bootstrap', width: 36, height: 36, name: 'Bootstrap' },
  { icon: 'logos:javascript', width: 36, height: 36, name: 'JavaScript' },
  { icon: 'logos:nodejs-icon', width: 36, height: 36, name: 'Node.js' },
]

// Duplicar array para efeito infinito
const duplicatedTechs = [...technologies, ...technologies]
</script>

<template>
  <section class="container mx-auto px-4 pb-14">
    <div class="rounded-2xl border p-6">
      <p class="text-center text-sm text-muted-foreground">Tecnologias e ferramentas</p>
      <div class="mt-6 relative overflow-hidden h-[120px] sm:h-[100px] flex items-center">
        <div class="flex animate-scroll">
          <div
            v-for="(tech, index) in duplicatedTechs"
            :key="`${tech.icon}-${index}`"
            class="flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] mx-2 sm:mx-4 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <Icon
              :icon="tech.icon"
              :width="tech.width"
              :height="tech.height"
              class="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
            />
            <span class="mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground text-center font-medium leading-tight">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span class="text-xs text-muted-foreground">Empresas:</span>
        <span class="rounded-full border px-2 sm:px-3 py-1 text-[10px] sm:text-xs">Matsuko Indústria</span>
        <span class="rounded-full border px-2 sm:px-3 py-1 text-[10px] sm:text-xs">iPrime Sorocaba</span>
        <span class="rounded-full border px-2 sm:px-3 py-1 text-[10px] sm:text-xs">Colégio Maranata</span>
        <span class="rounded-full border px-2 sm:px-3 py-1 text-[10px] sm:text-xs">Grupo Piovezani</span>
        <span class="rounded-full border px-2 sm:px-3 py-1 text-[10px] sm:text-xs">Valter Franceschini Advocacia</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  will-change: transform;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>


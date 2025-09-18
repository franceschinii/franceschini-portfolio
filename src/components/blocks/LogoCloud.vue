<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

const currentIndex = ref(0)
let carouselTimer: number | undefined

const getVisibleTechs = () => {
  const result = []
  for (let i = 0; i < 6; i++) {
    const index = (currentIndex.value + i) % technologies.length
    result.push(technologies[index])
  }
  return result
}

onMounted(() => {
  const rotateTechnologies = () => {
    carouselTimer = window.setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % technologies.length
      rotateTechnologies()
    }, 7000) as unknown as number
  }
  rotateTechnologies()
})

onBeforeUnmount(() => {
  if (carouselTimer) window.clearTimeout(carouselTimer)
})
</script>

<template>
  <section class="container mx-auto px-4 pb-14">
    <div class="rounded-2xl border p-6">
      <p class="text-center text-sm text-muted-foreground">Tecnologias e ferramentas</p>
      <div class="mt-6 relative overflow-hidden h-[120px] flex items-center">
        <div class="w-full px-4 tech-carousel">
          <div
            v-for="(tech, index) in getVisibleTechs()"
            :key="`${tech.icon}-${currentIndex}-${index}`"
            class="flex flex-col items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 tech-item"
            :style="{ '--delay': index * 0.2 + 's' }"
          >
            <Icon :icon="tech.icon" :width="tech.width" :height="tech.height" />
            <span class="mt-2 text-xs text-muted-foreground text-center font-medium">{{ tech.name }}</span>
          </div>
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

<style scoped>
@keyframes techFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  100% {
    opacity: 0.7;
    transform: translateY(0) scale(1);
  }
}

.tech-item {
  animation: techFadeIn 1.5s ease-out var(--delay) both;
}

.tech-carousel {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;
}

@media (max-width: 768px) {
  .tech-carousel {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .tech-carousel {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>


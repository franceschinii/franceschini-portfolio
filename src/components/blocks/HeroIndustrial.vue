<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'
// typing effect for value propositions
import CvDialog from '@/components/modals/CvDialog.vue'
import SilkBackground from '@/components/ui/SilkBackground.vue'
import FrostedCard from '@/components/ui/frosted-card.vue'
import ContainerScroll from '@/components/ui/ContainerScroll.vue'
import TextGenerateEffect from '@/components/ui/TextGenerateEffect.vue'

const phrases = [
  'Plataformas SaaS sob medida',
  'Automação de processos ponta a ponta',
  'Integrações com máquinas e IoT',
]

const technologies = [
  'logos:javascript',
  'logos:typescript-icon',
  'logos:react',
  'logos:vue',
  'logos:nextjs-icon',
  'logos:tailwindcss-icon',
  'simple-icons:shadcnui',
  'logos:bootstrap',
  'logos:arduino'
]

const idx = ref(0)
const typed = ref('')
const currentTechIndex = ref(0)
let t: number | undefined
let typingTimer: number | undefined
let techCarouselTimer: number | undefined
onMounted(() => {
  const typePhrase = () => {
    const phrase = phrases[idx.value]
    typed.value = ''
    let ci = 0
    const step = () => {
      typed.value = phrase.slice(0, ci)
      ci++
      if (ci <= phrase.length) {
        typingTimer = window.setTimeout(step, 50) as unknown as number
      } else {
        // hold for longer
        typingTimer = window.setTimeout(() => {
          idx.value = (idx.value + 1) % phrases.length
          typePhrase()
        }, 2200) as unknown as number
      }
    }
    step()
  }
  typePhrase()

  // Tech carousel
  const rotateTechnologies = () => {
    techCarouselTimer = window.setTimeout(() => {
      currentTechIndex.value = (currentTechIndex.value + 1) % technologies.length
      rotateTechnologies()
    }, 1500) as unknown as number
  }
  rotateTechnologies()
})
onBeforeUnmount(() => {
  if (t) window.clearInterval(t);
  if (typingTimer) window.clearTimeout(typingTimer);
  if (techCarouselTimer) window.clearTimeout(techCarouselTimer);
})
</script>

<template>
  <!-- Container Scroll with Code Preview -->
  <ContainerScroll>
    <template #title>
      <div class="mb-32 md:mb-48">
        <TextGenerateEffect
          words="Transformando ideias em soluções digitais reais"
          class="text-3xl font-bold text-center text-white md:text-5xl mb-6"
          :delay="500"
        />
        <TextGenerateEffect
          words="Cada linha de código é pensada para resolver problemas complexos e automatizar processos"
          class="text-lg text-center text-blue-200 max-w-2xl mx-auto"
          :delay="1000"
        />
      </div>
    </template>
    <template #card>
      <div class="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
        <!-- VS Code Mockup -->
        <div class="relative z-10 bg-gray-800 h-8 flex items-center px-4 border-b border-gray-700">
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div class="ml-6 text-sm text-gray-300">HeroIndustrial.vue</div>
        </div>
        <!-- Code Content -->
        <div class="relative z-10 p-4 text-sm font-mono overflow-auto h-[calc(100%-2rem)]">
          <div class="text-gray-400">1</div>
          <div class="text-gray-400">2</div>
          <div><span class="text-gray-400">3</span><span class="text-blue-400">&lt;template&gt;</span></div>
          <div><span class="text-gray-400">4</span><span class="text-white">  &lt;</span><span class="text-red-400">section</span><span class="text-yellow-400"> class</span><span class="text-white">=</span><span class="text-green-400">"container mx-auto px-4 py-16 md:py-24"</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">5</span><span class="text-white">    &lt;</span><span class="text-red-400">div</span><span class="text-yellow-400"> class</span><span class="text-white">=</span><span class="text-green-400">"grid items-center gap-12 md:grid-cols-2"</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">6</span><span class="text-white">      &lt;</span><span class="text-red-400">motion.div</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">7</span><span class="text-white">        &lt;</span><span class="text-red-400">h1</span><span class="text-yellow-400"> class</span><span class="text-white">=</span><span class="text-green-400">"text-3xl font-bold tracking-tight md:text-5xl"</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">8</span><span class="text-white">          Olá, eu sou &lt;</span><span class="text-red-400">span</span><span class="text-yellow-400"> class</span><span class="text-white">=</span><span class="text-green-400">"shimmer"</span><span class="text-white">&gt;{{ profile.name }}&lt;/</span><span class="text-red-400">span</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">9</span><span class="text-white">        &lt;/</span><span class="text-red-400">h1</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">10</span><span class="text-white">        &lt;</span><span class="text-red-400">p</span><span class="text-yellow-400"> class</span><span class="text-white">=</span><span class="text-green-400">"mt-4 text-base text-muted-foreground"</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">11</span><span class="text-white">          Crio &lt;</span><span class="text-red-400">strong</span><span class="text-white">&gt;plataformas web (SaaS)&lt;/</span><span class="text-red-400">strong</span><span class="text-white">&gt; para automatizar</span></div>
          <div><span class="text-gray-400">12</span><span class="text-white">        &lt;/</span><span class="text-red-400">p</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">13</span><span class="text-white">      &lt;/</span><span class="text-red-400">motion.div</span><span class="text-white">&gt;</span></div>
          <div><span class="text-gray-400">14</span><span class="text-blue-400">&lt;/template&gt;</span></div>
          <div class="text-gray-400">15</div>
          <div><span class="text-gray-400">16</span><span class="text-blue-400">&lt;script</span><span class="text-yellow-400"> setup</span><span class="text-yellow-400"> lang</span><span class="text-white">=</span><span class="text-green-400">"ts"</span><span class="text-blue-400">&gt;</span></div>
          <div><span class="text-gray-400">17</span><span class="text-purple-400">import</span><span class="text-white"> { </span><span class="text-blue-300">ref</span><span class="text-white">, </span><span class="text-blue-300">onMounted</span><span class="text-white"> } </span><span class="text-purple-400">from</span><span class="text-green-400"> 'vue'</span></div>
          <div><span class="text-gray-400">18</span><span class="text-purple-400">import</span><span class="text-white"> { </span><span class="text-blue-300">Button</span><span class="text-white"> } </span><span class="text-purple-400">from</span><span class="text-green-400"> '@/components/ui/button'</span></div>
          <div class="text-gray-400">19</div>
          <div><span class="text-gray-400">20</span><span class="text-purple-400">const</span><span class="text-blue-300"> phrases</span><span class="text-white"> = [</span></div>
          <div><span class="text-gray-400">21</span><span class="text-white">  </span><span class="text-green-400">'Plataformas SaaS sob medida'</span><span class="text-white">,</span></div>
          <div><span class="text-gray-400">22</span><span class="text-white">  </span><span class="text-green-400">'Automação de processos ponta a ponta'</span><span class="text-white">,</span></div>
          <div><span class="text-gray-400">23</span><span class="text-white">]</span></div>
          <div><span class="text-blue-400">&lt;/script&gt;</span></div>
        </div>
      </div>
    </template>
  </ContainerScroll>

  <section class="container mx-auto px-4 py-16 md:py-24">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }">
        <h1 class="text-3xl font-bold tracking-tight md:text-5xl">
          Olá, eu sou <span class="shimmer">{{ profile.name }}</span>
        </h1>
        <p class="mt-4 text-base text-muted-foreground md:text-lg max-w-[65ch]">
          Crio <strong class="font-semibold text-foreground">plataformas web (SaaS)</strong> para automatizar processos e integrar operações.
          Também atuo com modernização e automação industrial, conectando sistemas a máquinas e IoT. ERPs apenas em escopos
          mais simples ou modulares.
        </p>
        <div class="relative mt-3 min-h-6 overflow-hidden text-sm text-muted-foreground">
          <span class="typing">{{ typed }}</span>
        </div>
        <div class="mt-7 flex flex-wrap items-center justify-start gap-3">
          <RouterLink to="/projects"><Button size="lg">Ver projetos</Button></RouterLink>
          <RouterLink to="/contact"><Button size="lg" variant="secondary">Solicitar proposta</Button></RouterLink>
          <CvDialog />
          <a href="/cv.pdf" target="_blank" rel="noopener">
            <Button variant="outline" size="sm">Baixar CV</Button>
          </a>
          <a href="/contact" aria-label="Instagram" rel="noopener">
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Icon icon="mdi:instagram" class="h-5 w-5" />
            </Button>
          </a>
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-start gap-2 text-xs text-muted-foreground">
          <span class="rounded-full border px-3 py-1">SaaS / ERP</span>
          <span class="rounded-full border px-3 py-1">Automação de Processos</span>
          <span class="rounded-full border px-3 py-1">Integrações</span>
          <span class="rounded-full border px-3 py-1">IoT</span>
        </div>
      </motion.div>
      <motion.div class="relative" :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6, delay: 0.15 }">
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
          <SilkBackground class="absolute inset-0" />
          <div class="absolute inset-0 flex items-center justify-center z-10">
            <FrostedCard class="p-3 sm:p-4">
              <div class="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <Icon icon="logos:javascript" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                <Icon icon="logos:typescript-icon" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                <Icon icon="logos:react" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                <Icon icon="logos:vue" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                <Icon icon="logos:nextjs-icon" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                <Icon icon="logos:tailwindcss-icon" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                <Icon icon="simple-icons:shadcnui" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 filter drop-shadow-lg" />
                <Icon icon="logos:bootstrap" class="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 filter drop-shadow-lg" />
                <Icon icon="logos:arduino" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
              </div>
            </FrostedCard>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.shimmer {
  background: linear-gradient(90deg, var(--color-foreground) 0%, var(--color-primary) 50%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% 100%;
  animation: shimmer 6s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.typing::after {
  content: '▌';
  margin-left: 2px;
  color: currentColor;
  animation: caret 1s steps(1, end) infinite;
}
@keyframes caret { 50% { opacity: 0; } }

.fade-up-enter-active, .fade-up-leave-active { transition: all .35s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(6px); }
.fade-up-leave-to { opacity: 0; transform: translateY(-6px); }
.fade-up-leave-active { position: absolute; }

.tech-fade-enter-active, .tech-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.tech-fade-enter-from {
  opacity: 0;
  transform: scale(0.8) rotate(-10deg);
}
.tech-fade-leave-to {
  opacity: 0;
  transform: scale(1.1) rotate(10deg);
}
</style>

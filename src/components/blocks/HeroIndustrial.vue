<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'
import { Icon } from '@iconify/vue'
// typing effect for value propositions
import CvDialog from '@/components/modals/CvDialog.vue'
import LiquidBackground from '@/components/ui/liquid-background.vue'
import FrostedCard from '@/components/ui/frosted-card.vue'

const phrases = [
  'Plataformas SaaS sob medida',
  'Automação de processos ponta a ponta',
  'Integrações com máquinas e IoT',
]
const idx = ref(0)
const typed = ref('')
let t: number | undefined
let typingTimer: number | undefined
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
})
onBeforeUnmount(() => { if (t) window.clearInterval(t); if (typingTimer) window.clearTimeout(typingTimer) })
</script>

<template>
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
          <LiquidBackground class="absolute inset-0">
            <div class="absolute inset-0 flex items-center justify-center z-10">
              <FrostedCard class="p-3 sm:p-4">
                <div class="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <Icon icon="logos:vue" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                  <Icon icon="logos:typescript-icon" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                  <Icon icon="logos:tailwindcss-icon" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                  <Icon icon="simple-icons:shadcnui" class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 filter drop-shadow-lg" />
                  <Icon icon="logos:arduino" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 filter drop-shadow-lg" />
                  <Icon icon="logos:bootstrap" class="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 filter drop-shadow-lg" />
                </div>
              </FrostedCard>
            </div>
          </LiquidBackground>
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
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import ThemeToggle from '@/components/layout/ThemeToggle.vue'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { site } from '@/config/site'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'

const open = ref(false)
const route = useRoute()

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }
})

const links = site.nav
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <RouterLink to="/" class="flex items-center gap-2 text-base font-semibold">
        <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">A</span>
        <span>{{ profile.name }}</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="text-muted-foreground hover:text-foreground transition-colors"
          :class="{ 'text-foreground font-medium': route.path === l.to }"
        >
          {{ l.label }}
        </RouterLink>

        <div class="ml-2 flex items-center gap-2">
          <ThemeToggle />
          <a href="/cv.pdf" target="_blank" rel="noopener" class="hidden lg:block">
            <Button size="sm" variant="secondary">Baixar CV</Button>
          </a>
        </div>
      </nav>

      <!-- Mobile -->
      <div class="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Sheet v-model:open="open">
          <SheetTrigger as-child>
            <Button size="icon" variant="secondary" aria-label="Abrir menu">
              <Bars3Icon class="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" class="w-72">
            <SheetHeader>
              <SheetTitle>Navegação</SheetTitle>
              <SheetDescription>Selecione uma seção</SheetDescription>
            </SheetHeader>
            <nav class="mt-4 grid gap-1">
              <SheetClose as-child v-for="l in links" :key="l.to">
                <RouterLink :to="l.to" class="rounded-md px-3 py-2 text-sm hover:bg-muted">
                  {{ l.label }}
                </RouterLink>
              </SheetClose>
            </nav>
            <div class="mt-6">
              <a href="/cv.pdf" target="_blank" rel="noopener">
                <Button class="w-full" variant="secondary">Baixar CV</Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>

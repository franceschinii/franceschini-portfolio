<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { Button } from '@/components/ui/button'

const stored = (typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null) as
  | 'light'
  | 'dark'
  | 'system'
  | null
const mode = ref<'light' | 'dark' | 'system'>(stored ?? 'system')

const apply = () => {
  const root = document.documentElement
  const systemDark = typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
  const isDark = mode.value === 'dark' || (mode.value === 'system' && systemDark)
  root.classList.toggle('dark', isDark)
}

watchEffect(() => {
  if (mode.value === 'system') localStorage.removeItem('theme')
  else localStorage.setItem('theme', mode.value)
  apply()
})

const toggle = () => {
  mode.value = (mode.value === 'dark') ? 'light' : 'dark'
}
</script>

<template>
  <div class="relative inline-flex items-center">
    <Button size="icon" variant="ghost" aria-label="Alternar tema" @click="toggle">
      <SunIcon class="h-5 w-5 hidden dark:block" />
      <MoonIcon class="h-5 w-5 dark:hidden" />
    </Button>
  </div>
  
</template>

<style scoped>
</style>

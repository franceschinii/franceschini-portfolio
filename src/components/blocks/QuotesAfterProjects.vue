<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { quotes } from '@/data/quotes'

const i = ref(0)
let t: number | undefined
onMounted(() => {
  t = window.setInterval(() => { i.value = (i.value + 1) % quotes.length }, 12000)
})
onBeforeUnmount(() => { if (t) window.clearInterval(t) })
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <h2 class="text-xl font-semibold">Reflexões</h2>
    <div class="relative mt-4 min-h-16 overflow-hidden">
      <Transition name="fade-up" mode="out-in">
        <figure :key="i" class="text-sm text-muted-foreground">
          <blockquote class="italic">“{{ quotes[i].text }}”</blockquote>
          <figcaption class="mt-1 text-xs text-muted-foreground/80">— {{ quotes[i].author }}</figcaption>
        </figure>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.fade-up-enter-active, .fade-up-leave-active { transition: all .35s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(6px); }
.fade-up-leave-to { opacity: 0; transform: translateY(-6px); }
.fade-up-leave-active { position: absolute; }
</style>


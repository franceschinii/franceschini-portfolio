<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col bg-background text-foreground">
    <SiteHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <SiteFooter />
    <FloatingWhatsApp />
  </div>
</template>

<style scoped>
.router-link-active { font-weight: 600; }
</style>

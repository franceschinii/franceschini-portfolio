<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { profile } from '@/data/profile'

const envPhone = (import.meta.env.VITE_WHATSAPP as string | undefined)?.replace(/\D/g, '')
const profilePhone = (profile.phone || '').replace(/\D/g, '')
const phone = envPhone && envPhone.length > 6 ? envPhone : (profilePhone || '5515997284932')
const text = encodeURIComponent('Olá André, vi seu portfólio e gostaria de conversar sobre um projeto.')
const href = `https://wa.me/${phone}?text=${text}`
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" aria-label="WhatsApp"
     class="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg ring-1 ring-black/5 hover:bg-green-600">
    <Icon icon="ri:whatsapp-fill" class="h-6 w-6" />
  </a>
</template>

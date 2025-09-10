<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import QuotesAfterProjects from '@/components/blocks/QuotesAfterProjects.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const website = ref('') // honeypot
const sending = ref(false)
const status = ref<'idle'|'ok'|'error'>('idle')
const errorMsg = ref('')

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact.php'

async function submit() {
  status.value = 'idle'
  errorMsg.value = ''
  if (!name.value || !email.value || !message.value) {
    errorMsg.value = 'Preencha todos os campos.'
    status.value = 'error'
    return
  }
  sending.value = true
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ name: name.value, email: email.value, message: message.value, website: website.value }).toString(),
    })
    if (!res.ok) throw new Error((await res.json()).error || 'Erro ao enviar')
    status.value = 'ok'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (e: unknown) {
    status.value = 'error'
    errorMsg.value = (e instanceof Error ? e.message : String(e)) || 'Erro inesperado'
    // fallback em dev
    if (import.meta.env.DEV) {
      const subject = encodeURIComponent(`[Portfolio] Contato de ${name.value}`)
      const body = encodeURIComponent(`${message.value}\n\nNome: ${name.value}\nEmail: ${email.value}`)
      const to = profile.email || 'andre@example.com'
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    }
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="container mx-auto px-4 py-12 md:py-16">
    <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Contato</h1>
    <p class="mt-3 text-muted-foreground">Vamos conversar sobre projetos e oportunidades.</p>

    <div class="mt-8 grid gap-8 md:grid-cols-3">
      <form class="grid gap-4 md:col-span-2" @submit.prevent="submit" novalidate>
        <input v-model="website" type="text" class="hidden" tabindex="-1" autocomplete="off" />
        <div class="grid gap-2">
          <Label for="name">Nome</Label>
          <Input id="name" v-model="name" placeholder="Seu nome" required :disabled="sending" />
        </div>
        <div class="grid gap-2">
          <Label for="email">E-mail</Label>
          <Input id="email" type="email" v-model="email" placeholder="voce@exemplo.com" required :disabled="sending" />
        </div>
        <div class="grid gap-2">
          <Label for="message">Mensagem</Label>
          <Textarea id="message" v-model="message" rows="5" placeholder="Como posso ajudar?" required :disabled="sending" />
        </div>
        <div class="flex items-center gap-3">
          <Button type="submit" :disabled="sending">{{ sending ? 'Enviando...' : 'Enviar' }}</Button>
          <a href="https://www.linkedin.com/in/andrefranceschini" target="_blank" rel="noopener" class="text-sm text-muted-foreground hover:text-foreground">ou fale pelo LinkedIn</a>
        </div>
        <p v-if="status==='ok'" class="text-sm text-green-600">Mensagem enviada com sucesso!</p>
        <p v-if="status==='error'" class="text-sm text-red-600">{{ errorMsg }}</p>
      </form>

      <aside class="md:col-span-1">
        <QuotesAfterProjects />
      </aside>
    </div>
  </section>
</template>

<style scoped>
</style>

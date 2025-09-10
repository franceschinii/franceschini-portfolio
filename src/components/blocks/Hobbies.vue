<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog'
import { Icon } from '@iconify/vue'

const openSkoob = ref(false)
const openLinktree = ref(false)
</script>

<template>
  <section class="container mx-auto px-4 pb-16">
    <h2 class="text-xl font-semibold">Hobbies & Interesses</h2>
    <p class="mt-2 text-sm text-muted-foreground max-w-[70ch]">
      Gosto de livros e filosofia, jogos (card games, de tabuleiro e videogames) e tecnologia em geral.
    </p>

    <div class="mt-6 grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <div class="flex items-center gap-2">
            <Icon icon="mdi:book-open-variant" class="h-5 w-5" />
            <CardTitle>Livros & Filosofia</CardTitle>
          </div>
          <CardDescription>Perfil no Skoob</CardDescription>
        </CardHeader>
        <CardContent class="flex items-center gap-3">
          <a href="https://www.skoob.com.br/usuario/10987573" target="_blank" rel="noopener"><Button variant="secondary">Abrir Skoob</Button></a>
          <Dialog v-model:open="openSkoob">
            <DialogTrigger as-child><Button>Ver aqui</Button></DialogTrigger>
            <DialogContent class="max-w-5xl p-0">
              <DialogHeader class="px-6 pt-6">
                <DialogTitle>Skoob</DialogTitle>
                <DialogDescription>Perfil público (pode não carregar se o site bloquear embeds).</DialogDescription>
              </DialogHeader>
              <div class="h-[80vh] w-full p-4 pt-0">
                <iframe src="https://www.skoob.com.br/usuario/10987573" class="h-full w-full rounded-md border" />
              </div>
              <div class="flex items-center justify-end gap-3 px-6 pb-4">
                <DialogClose as-child><Button>Fechar</Button></DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div class="flex items-center gap-2">
            <Icon icon="mdi:link-variant" class="h-5 w-5" />
            <CardTitle>Linktree</CardTitle>
          </div>
          <CardDescription>Hub de links</CardDescription>
        </CardHeader>
        <CardContent class="flex items-center gap-3">
          <a href="https://linktr.ee/franceschini" target="_blank" rel="noopener"><Button variant="secondary">Abrir Linktree</Button></a>
          <Dialog v-model:open="openLinktree">
            <DialogTrigger as-child><Button>Ver aqui</Button></DialogTrigger>
            <DialogContent class="max-w-3xl p-0">
              <DialogHeader class="px-6 pt-6">
                <DialogTitle>Linktree</DialogTitle>
                <DialogDescription>Perfil com links principais.</DialogDescription>
              </DialogHeader>
              <div class="h-[70vh] w-full p-4 pt-0">
                <iframe src="https://linktr.ee/franceschini" class="h-full w-full rounded-md border" />
              </div>
              <div class="flex items-center justify-end gap-3 px-6 pb-4">
                <DialogClose as-child><Button>Fechar</Button></DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div class="flex items-center gap-2">
            <Icon icon="mdi:controller-classic" class="h-5 w-5" />
            <CardTitle>Jogos & Tecnologia</CardTitle>
          </div>
          <CardDescription>Perfil na Steam</CardDescription>
        </CardHeader>
        <CardContent>
          <a href="https://steamcommunity.com/id/franceschinii_/" target="_blank" rel="noopener"><Button variant="secondary">Abrir Steam</Button></a>
        </CardContent>
      </Card>
    </div>
  </section>
</template>


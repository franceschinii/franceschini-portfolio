<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button variant="secondary">Ver CV</Button>
    </DialogTrigger>
    <DialogContent class="max-w-5xl p-0">
      <DialogHeader class="px-6 pt-6">
        <DialogTitle>Currículo</DialogTitle>
        <DialogDescription>Visualize o PDF do meu currículo abaixo.</DialogDescription>
      </DialogHeader>
      <div class="h-[80vh] w-full p-4 pt-0">
        <iframe src="/cv.pdf" title="CV" class="h-full w-full rounded-md border" />
      </div>
      <div class="flex items-center justify-end gap-3 px-6 pb-4">
        <a href="/cv.pdf" download><Button variant="secondary">Baixar PDF</Button></a>
        <DialogClose as-child>
          <Button>Fechar</Button>
        </DialogClose>
      </div>
    </DialogContent>
  </Dialog>
</template>


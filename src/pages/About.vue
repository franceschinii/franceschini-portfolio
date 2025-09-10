<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { profile } from '@/data/profile'
</script>

<template>
  <section class="container mx-auto px-4 py-12 md:py-16">
    <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Sobre</h1>
    <p class="mt-3 text-muted-foreground max-w-4xl">{{ profile.summary }}</p>

    <div class="mt-8 grid gap-6 lg:grid-cols-3">
      <!-- Coluna principal: Experiência -->
      <div class="lg:col-span-2 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Experiência</CardTitle>
            <CardDescription>Últimas experiências profissionais</CardDescription>
          </CardHeader>
          <CardContent class="grid gap-6">
            <div v-for="exp in profile.experience" :key="exp.company + exp.role" class="grid gap-2">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <p class="font-medium">{{ exp.role }} • {{ exp.company }}</p>
                <p class="text-xs text-muted-foreground">{{ exp.period }}</p>
              </div>
              <ul class="list-disc pl-5 text-sm text-muted-foreground">
                <li v-for="b in exp.bullets" :key="b">{{ b }}</li>
              </ul>
              <Separator />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formação</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div v-for="ed in profile.education" :key="ed.institution + ed.degree" class="flex items-start justify-between">
              <div>
                <p class="font-medium">{{ ed.degree }}</p>
                <p class="text-sm text-muted-foreground">{{ ed.institution }}</p>
              </div>
              <p class="text-xs text-muted-foreground">{{ ed.period }}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Coluna lateral: Contatos, Habilidades, Idiomas, Certificações -->
      <div class="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Contato</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-2 text-sm">
            <a v-if="profile.email" :href="`mailto:${profile.email}`" class="text-primary hover:underline">{{ profile.email }}</a>
            <p v-if="profile.phone" class="text-muted-foreground">{{ profile.phone }}</p>
            <div class="mt-2 flex flex-wrap gap-3">
              <a v-for="l in profile.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground">
                {{ l.label }}
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Habilidades</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-4">
            <div v-for="g in profile.skills" :key="g.title">
              <p class="text-sm font-medium">{{ g.title }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <Badge v-for="s in g.skills" :key="s" variant="secondary">{{ s }}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Idiomas</CardTitle>
          </CardHeader>
          <CardContent class="flex flex-wrap gap-2">
            <Badge v-for="lang in profile.languages" :key="lang.name" variant="secondary">{{ lang.name }} • {{ lang.level }}</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certificações</CardTitle>
          </CardHeader>
          <CardContent class="grid gap-2 text-sm text-muted-foreground">
            <div v-for="c in profile.certifications" :key="c.name + c.date" class="flex items-center justify-between">
              <span>{{ c.name }} — {{ c.issuer }}</span>
              <span class="text-xs">{{ c.date }}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/Home.vue'), meta: { title: 'Início · André Franceschini' } },
    { path: '/about', name: 'about', component: () => import('@/pages/About.vue'), meta: { title: 'Sobre · André Franceschini' } },
    { path: '/projects', name: 'projects', component: () => import('@/pages/Projects.vue'), meta: { title: 'Projetos · André Franceschini' } },
    { path: '/projects/:slug', name: 'project', component: () => import('@/pages/Project.vue'), meta: { title: 'Projeto · André Franceschini' } },
    { path: '/contact', name: 'contact', component: () => import('@/pages/Contact.vue'), meta: { title: 'Contato · André Franceschini' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/NotFound.vue'), meta: { title: 'Página não encontrada' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title as string | undefined
  if (title) document.title = title
})

export default router


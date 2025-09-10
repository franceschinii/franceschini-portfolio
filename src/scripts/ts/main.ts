import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

// Estilos globais
import '@/styles/css/main.css'

// Cria a aplicação
const app = createApp(App)

// Configura Pinia (gerenciamento de estado)
app.use(createPinia())

// Configura Vue Router
app.use(router)

// Monta a aplicação
app.mount('#app')

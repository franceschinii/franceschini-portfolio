<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  alert('Mensagem enviada com sucesso!')
}
</script>

<template>
  <div class="min-h-[calc(100vh-8rem)] py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 mb-4">Entre em Contato</h1>
        <p class="text-xl text-gray-600 mb-12">
          Vamos conversar sobre seu próximo projeto!
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Envie uma mensagem</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-800 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
              </button>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Informações de contato</h3>
              
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-lg">📧</span>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Email</p>
                    <p class="text-gray-900">contato@exemplo.com</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-lg">💬</span>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">WhatsApp</p>
                    <p class="text-gray-900">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-lg">💼</span>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">LinkedIn</p>
                    <p class="text-gray-900">linkedin.com/in/exemplo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Vamos trabalhar juntos!</h3>
              <p class="text-gray-600 mb-4">
                Estou sempre interessado em novos projetos e oportunidades de colaboração.
              </p>
              <p class="text-gray-600">
                Entre em contato e vamos discutir como posso ajudar a tornar sua ideia realidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
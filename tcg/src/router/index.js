import { createRouter, createWebHistory } from 'vue-router'
import home from '@/Vue/home.vue'
import pack from '@/Vue/pack.vue'
import index from '@/Vue/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name: 'home',
      component: home
    },
    {
      path : '/pack',
      name : 'pack',
      components : pack
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ],
})

export default router

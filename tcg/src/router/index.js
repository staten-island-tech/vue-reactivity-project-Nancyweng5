import { createRouter, createWebHistory } from 'vue-router'
import tcg from 'tcg.vue'
import index from '/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name: 'home',
      component: tcg
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    }
  ],
})

export default router

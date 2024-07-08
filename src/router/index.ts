import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pin-core',
      name: 'pin core',
      component: () => import('../components/Structure.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../components/Business.vue')
    }
  ]
})

export default router

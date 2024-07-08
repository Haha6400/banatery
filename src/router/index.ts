import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/introdution',
      name: 'introdution',
      component: () => import('../components/Introdution.vue')
    },
    {
      path: '/products',
      name: 'product',
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
      path: '/achievement',
      name: 'achievement',
      component: () => import('../views/Achievement.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../components/Feedback.vue')
    }
  ]
})

export default router

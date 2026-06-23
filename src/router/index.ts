import AccessoriesView from '@/views/AccessoriesView.vue'
import HomeView from '@/views/HomeView.vue'
import LocksView from '@/views/LocksView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/fechaduras',
      name: 'fechaduras',
      component: LocksView,
    },
    {
      path: '/fechaduras/:slug',
      name: 'lock-detail',
      component: () => import('@/views/LockDetailView.vue'),
    },
    {
      path: '/acessorios',
      name: 'acessorios',
      component: AccessoriesView,
    },
    {
      path: '/acessorios/:slug',
      name: 'accessory-detail',
      component: () => import('@/views/AccessoryDetailView.vue'),
    },
  ],
})

export default router

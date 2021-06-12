import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

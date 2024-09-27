import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/EvaluacionObjetivos',
    name: 'EvaluacionObjetivos',
    component: () => import('../views/EvaluacionObjetivos.vue')
  },
  {
    path: '/MenuPrincipal',
    name: 'MenuPrincipal',
    component: () => import('../views/MenuPrincipal.vue')
  },
  {
    path: '/Principal',
    name: 'Principal',
    component: () => import('../views/Principal.vue')
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
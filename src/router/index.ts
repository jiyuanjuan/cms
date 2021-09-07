import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/home/Home.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

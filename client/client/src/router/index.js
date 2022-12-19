import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ToDo',
    name: 'ToDo',
    component: () => import( '../views/ToDoView.vue')
  },
  {
    path: '/Team',
    name: 'team',
    component: () => import( '../views/OurTeam.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

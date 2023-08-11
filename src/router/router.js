import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue'

const list = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RainyDreams\'s Personal Website' }
  },
]
const router = new createRouter({
  //hash
  mode: 'hash',
  history: createWebHashHistory(),
  routes: list
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'RainyDreams'
  next()
})

export default router
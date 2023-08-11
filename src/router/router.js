import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue'

const list = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '我们的回忆' }
  },
]
const router = new createRouter({
  //hash
  mode: 'hash',
  history: createWebHashHistory(),
  routes: list
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '我们的回忆 | 赤峰六中2020级6班'
  next()
})

export default router
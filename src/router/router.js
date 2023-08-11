import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue'
import Code from '../pages/code.vue'

const list = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RainyDreams\'s Personal Website' }
  },
  {
    path: '/code',
    name: 'Code',
    component: Code,
    meta: { title: '加密解密' }
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
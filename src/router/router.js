import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue'
import Tools from '../pages/tools.vue'
import About from '../pages/about.vue'
import Introduce from '../pages/introduce.vue'
import Thanks from '../pages/thanks.vue'

import Code from '../pages/code.vue'
const list = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RainyDreams\'s Personal Website' }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    meta: { title: '加密解密' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '加密解密' }
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce,
    meta: { title: '加密解密' }
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
    meta: { title: '加密解密' }
  },

  {
    path: '/tools/code',
    name: 'Code',
    component: Code,
    meta: { title: '加密解密' }
  }
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
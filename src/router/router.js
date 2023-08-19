import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue'
import Tools from '../pages/tools.vue'
import About from '../pages/about.vue'
import Introduce from '../pages/introduce.vue'
import Thanks from '../pages/thanks.vue'
import License from '../pages/userlicenseagreement.vue'
import MessageList from '../pages/messageList.vue'

import ToolsCode from '../pages/tools/code.vue'
import ToolsCodeHelp from '../pages/tools/codehelp.vue'
const list = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RainyDreams\'s Personal Website' }
  },
  {
    path:"/userlicense",
    name: 'License',
    component: License,
    meta: { title: 'UserLicenseAgreement' }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    meta: { title: 'TOOLS' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '关于' }
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: Introduce,
    meta: { title: '简介' }
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
    meta: { title: '致谢' }
  },
  {
    path: '/messageList',
    name: 'MessageList',
    component: MessageList,
    meta: { title: '消息列表' }
  },

  {
    path: '/tools/code',
    name: 'Code',
    component: ToolsCode,
    meta: { title: '加密解密' }
  },
  {
    path: '/tools/codehelp',
    name: 'CodeHelp',
    component: ToolsCodeHelp,
    meta: { title: '帮助' }
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
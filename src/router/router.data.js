import Home from '../pages/home.vue'
import Tools from '../pages/tools.vue'
import About from '../pages/about.vue'
import Introduce from '../pages/introduce.vue'
import Thanks from '../pages/thanks.vue'
import MessageList from '../pages/messageList.vue'

import ERROR404 from '../pages/errors/404.vue'

import Document from '../pages/document.vue'

import License from '../pages/license/userlicenseagreement.vue'
import Cookie from '../pages/license/cookie.vue'


import ToolsCode from '../pages/tools/code.vue'
import ToolsCodeHelp from '../pages/tools/codehelp.vue'

import Maxims from '../pages/maxims/index.vue'
const _Tools = [
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
const _Maxims = [
  {
    path: '/maxims',
    name: 'Maxims',
    component: Maxims,
    meta: { title: 'MAXIMS' }
  }
]
const _License = [
  {
    path:"/userlicense",
    name: 'License',
    component: License,
    meta: { title: 'UserLicenseAgreement' }
  },
  {
    path:"/cookie",
    name: 'Cookie and Private',
    component: Cookie,
    meta: { title: 'Cookie & Private' }
  },
]
const _Errors = [
  {
    path: '/error/404/:to',
    name: 'ERROR404',
    component: ERROR404,
    meta: { title: '404 NOT FOUND' }
  },
]
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
    path: '/doc',
    name: 'documents',
    component: Document,
    meta: { title: '' }
  },
  
  ..._Errors,
  ..._License,
  ..._Tools,
  ..._Maxims
]



export default list
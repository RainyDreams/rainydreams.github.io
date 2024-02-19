import Home from '../pages/home.vue'
import Tools from '../pages/tools.vue'
import About from '../pages/about.vue'
import Introduction from '../pages/introduce.vue'
import Thanks from '../pages/thanks.vue'
import MessageList from '../pages/messageList.vue'

import ERROR404 from '../pages/errors/404.vue'

import Document from '../pages/document.vue'

import License from '../pages/license/userlicenseagreement.vue'
import Cookie from '../pages/license/cookie.vue'


import ToolsCode from '../pages/tools/code.vue'
import ToolsCodeHelp from '../pages/tools/codehelp.vue'

const _Tools = [
  {
    path: '/tools/code',
    name: 'Code',
    component: ToolsCode,
    meta: { title: '加密解密' }
  },
  {
    path: '/tools/codeHelp',
    name: 'CodeHelp',
    component: ToolsCodeHelp,
    meta: { title: '帮助' }
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
    meta: { title: 'About' }
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction,
    meta: { title: 'Introduction' }
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
    meta: { title: 'Thanks' }
  },
  {
    path: '/messageList',
    name: 'MessageList',
    component: MessageList,
    meta: { title: 'MessageList' }
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
]



export default list
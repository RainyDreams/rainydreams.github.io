import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress'


import Home from '../pages/home.vue'
import Tools from '../pages/tools.vue'
import About from '../pages/about.vue'
import Introduce from '../pages/introduce.vue'
import Thanks from '../pages/thanks.vue'
import MessageList from '../pages/messageList.vue'

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
  ..._License,
  ..._Tools,
  ..._Maxims
]


const router = new createRouter({
  //hash
  mode: 'hash',
  history: createWebHashHistory(),
  routes: list
})

NProgress.configure({  
  easing: 'ease-out', // 动画方式 
  speed: 500, // 递增进度条的速度 
  showSpinner: false, // 是否显示加载ico 
  trickleSpeed: 200, // 自动递增间隔 
  minimum: 0.1, // 初始化时的最小百分比
})


router.beforeEach((from, to, next) => {
  //进度条开始
  // console.log(from)
  document.title = to.meta.title || 'RainyDreams'
  NProgress.start();
  //随机增加进度
  NProgress.inc();
  next();
});
//后置路由
router.afterEach((...args) => {
  //关闭掉进度条
  NProgress.done();
  if([...args][1].name){
    setTimeout(() => {
      window.scrollTo({top:0,behavior: 'smooth'})
    }, 100)
  }
});

export default router
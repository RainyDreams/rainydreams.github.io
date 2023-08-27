import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress'

import list from './router.data.js';

const router = new createRouter({
  //hash
  mode: 'hash',
  history: createWebHashHistory(),
  routes: list
})

NProgress.configure({  
  easing: 'ease-out', // 动画方式 
  speed: 200, // 递增进度条的速度 
  showSpinner: false, // 是否显示加载ico 
  trickleSpeed: 200, // 自动递增间隔 
  minimum: 0.1, // 初始化时的最小百分比
})


router.beforeEach((to,from, next) => {
  //进度条开始
  // console.log(from)
  // console.log(to,from)
  if(to.matched.length === 0){
    next({name:'ERROR404',params:{to:encodeURIComponent(to.fullPath)}})
    return
  }
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
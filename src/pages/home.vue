<script setup>
import { ref, onMounted } from "vue";
import Feature from '../components/feature.vue'
import NewsView from '../components/newsView.vue'
import TypeIt from 'typeit'
const text = ref(null)
const originHtml = ref(null)
// function getString(){
//   return originHtml.value.innerHTML ?? 
//   `<h1 class="big">Hello,</h1>
//   <h2 class="big">My name is RainyDreams.</h2>
//   <p>I am a high school student, currently studying in <a href="http://cf2z.cn/">Chifeng No. 2 High School<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a>. I am a lover of information technology and also a beginner.</p>
//   <p>If you are an electronic enthusiast like me, please follow me on <a href="https://github.com/RainyDreams">GitHub.<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a></p>
//   <p>In addition to completing academic tasks and programming, I also like calligraphy, painting and classical music</p>
//   <p>If you want to know more about me, please move to the <router-link to="/introduce">Introduction Page</router-link></p>`;
// }
;;;
// onMounted(() => {
//   new TypeIt(text.value, {
//     strings: getString(),
//     cursorChar: "<em></em>",//用于光标的字符。HTML也可以
//     speed: 5,
//     lifeLike: false,// 使打字速度不规则
//     cursor: true,//在字符串末尾显示闪烁的光标
//     breakLines: true,// 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
//     loop: false,//是否循环
//   }).go()
// });
</script>

<template>
  <div class="home">
    <div class="homeBackground">
      <img src="../assets/background.svg" alt="">
    </div>
    <Feature></Feature>
    <div class="container content">
      <div ref="text"></div>
      <div ref="originHtml">
        <h1 class="big">Hello,</h1>
        <h2 class="big">My nickname is RainyDreams.</h2>
        <p>I am a high school student, currently studying in <a href="http://cf2z.cn/">No.2 Senior School of Chifeng<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a>. I am a lover of information technology and also a beginner.</p>
        <p>If you are an electronic enthusiast like me, please follow me on <a href="https://github.com/RainyDreams">GitHub<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a>.</p>
        <p>In addition to completing academic tasks and programming, I also like calligraphy, painting and classical music.</p>
        <p>If you want to know more about me, please move to the <router-link to="/introduce">Introduction Page</router-link>.</p>
        <p>If you want to know more about ChiziIngiin, please move to the <router-link to="/about">About Page</router-link>.</p>
      </div>
      <!-- <hr> -->
      <p>The author may not be able to update the website in a timely manner due to academic reasons</p>
      <!-- <hr/> -->
      <!-- <NewsView/> -->
      <hr/>
      <h1 class="big">PRODUCTIONS</h1>
      <p>Recently, I have developed a life software that records progress, goals, etc. I hope it can help you in your studies and work. Its chinese name is 《一个记录进度目标计数和专注的网页应用程序》</p>
      <p>Currently, this project is being hosted on GITEE</p>
      <p><a href="https://munox.gitee.io/">Go To Experience(Temporary page)<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a></p>
      <p><BR/></p>
      <h2 class="big">TOOLS</h2>
      <p>Here are some gadgets I made to practice my trivial technique</p>
      <p><router-link to="/tools">Go To Experience</router-link></p>
      <h2 class="big">Q&A</h2>
      <p><router-link to="">Did you make this website yourself?</router-link></p>
      <p><router-link to="">What are you doing recently?</router-link></p>
      <p><router-link to="">How did you learn to program?</router-link></p>
    </div>
  </div>
</template>

<style lang="scss">
body {
  --bd-indigo-rgb: 102, 16, 242;
}

.hidden{
  visibility: hidden;
  position: absolute;
}

.h-navbar::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  display: block;
  content: "";
  background-color: #fff9;
  background: #fff;
  /*background-image: linear-gradient(to bottom, rgba(var(--bd-indigo-rgb), 0.62), rgba(var(--bd-indigo-rgb), 0.55));*/
  backdrop-filter: blur(4px);
}
.home{
  position: relative;
}
.homeBackground{
  position: absolute;
  z-index: -1;
  width:100%;
  height:100%;
  top:0;
  left:0;
  overflow: hidden;
  img{
    min-width: 600px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  }
}

</style>
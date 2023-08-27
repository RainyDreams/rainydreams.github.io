<script setup>
import Feature from '../components/feature.vue'
</script>

<template>
  <div class="content">
    <Feature></Feature>
    <div class="container">
      <h1>Hello,</h1>
      <h2>My name is RainyDreams.</h2>
      <p>I am a high school student, currently studying in <a href="http://cf2z.cn/">Chifeng No. 2 Middle School<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a>. I am a lover of information technology and also a beginner.</p>
      <p>If you are an electronic enthusiast like me, please follow me on <a href="https://github.com/RainyDreams">GitHub.<icon-arrow-right-up theme="outline" size="16" fill="#646CFF"/></a></p>
      <p>In addition to completing academic tasks and programming, I also like calligraphy, painting and classical music</p>
      <p>If you want to know more about me, please move to the <router-link to="/introduce">Introduction Page</router-link></p>
      <hr>
      <p>注意：</p>
      <p>本网站的作者可能因为学业原因无法及时更新网站</p>
      <p>The author of this website may not be able to update the website in a timely manner due to LearingInSchool reasons</p>
      <hr>
      <!-- <h2>RECENTLY</h2>
      <p>《黄河大合唱》</p>
      <hr> -->
      <h2>TOOLS</h2>
      <p>Here are some gadgets I made to practice my trivial technique</p>
      <p><router-link to="/tools">Go To Experience</router-link></p>
      <h2>MAXIM</h2>
      <p>I often like to collect some Maxim to motivate myself to achieve my goals and use them as my own action guide</p>
      <p><router-link to="/maxims">Learn More</router-link></p>
      <h2>SOME QUESTIONS</h2>
      <p><router-link to="">Why is this page in English?</router-link></p>
      <p><router-link to="">Did you make this website yourself?</router-link></p>
      <p><router-link to="">What are you doing recently?</router-link></p>
      <p><router-link to="">How did you learn to program?</router-link></p>
    </div>
  </div>
</template>

<style>
body {
  --bd-indigo-rgb: 102, 16, 242;
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
</style>
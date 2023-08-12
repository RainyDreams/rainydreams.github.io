<template>
  <div class="content">
    <div class="container">
      <h1>Hello,</h1>
      <h2>My name is RainyDreams.</h2>
      <p>I am a high school student, currently studying in <a href="http://cf2z.cn/">Chifeng No. 2 Middle School</a>. I am a lover of information technology and a beginner.</p>
      <p>If you are an electronic enthusiast like me, please follow me on <a href="https://github.com/RainyDreams">GitHub.</a></p>
      <p>In addition to completing academic tasks and programming, I also like calligraphy, painting and classical music</p>
      <p>If you want to know more about me, please move to the <router-link to="/introduce">Introduction Page</router-link></p>
      <h2>TOOLS</h2>
      <p>Here are some gadgets I made to practice my trivial technique</p>
      <p><router-link to="/tools">Go To Experience</router-link></p>
    </div>
  </div>
</template>

<script>
</script>

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
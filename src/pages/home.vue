<template>
  <div>
    <h1>维护中（其实是没啥写的，</h1>
    <h2>此页面是如何运行的?</h2>
    <h2>纯手搓，没用任何第三方UI框架</h2>
    <a href="https://github.com/RainyDreams/RainyDreams">github.com/RainyDreams/RainyDreams</a>
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
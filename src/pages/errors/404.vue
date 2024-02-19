<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const to = ref(decodeURIComponent(route.params.to))
;;
</script>
<template>
  <div class="container">
    <h1 style="text-align: center;padding-top: 24vh;" big>404 NOT FOUND</h1>
    <h4 style="text-align: center;padding-top: 2vh;">您访问的页面<code>{{ to }}</code>不存在。</h4>
  </div>
</template>
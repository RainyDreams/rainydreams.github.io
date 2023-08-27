<script setup>
import MFooter from './components/footer.vue'
import MNavBar from './components/navbar.vue'
import RunCode from './components/silentRunCode.vue'
</script>
<template>
  <div>
    <MNavBar/>
    <router-view class="router-view"></router-view>
    <MFooter></MFooter>
    <RunCode/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
.router-view{
  min-height: calc(70vh - 70px);
}
</style>
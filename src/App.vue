<script setup>
import MFooter from './components/footer.vue'
import MNavBar from './components/navbar.vue'
import RunCode from './components/silentRunCode.vue'
</script>
<template>
  <div>
    <MNavBar/>
    <div class="appview">
      <Suspense>
        <router-view class="router-view"></router-view>
      </Suspense>
    </div>
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
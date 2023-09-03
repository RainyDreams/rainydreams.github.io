<script setup>
import {ref} from 'vue'
import MFooter from './components/footer.vue'
import MNavBar from './components/navbar.vue'
import RunCode from './components/silentRunCode.vue'
import { getDevice, throttle } from './utils/base'

const style = ref({})
let deviceType = getDevice()
if(deviceType == 'Windows' || deviceType == 'MacOS' || deviceType == 'Linux'){
  window.addEventListener('resize',throttle((e) => {
  if(e.target.innerWidth < 300){
    console.log(e.target.innerWidth)
    let winWidth = e.target.innerWidth
    style.value={
      "transform":"scale("+winWidth/300+")","transform-origin": "top left"
    }
  }
  }))
}
</script>
<template>
  <div id="_page" :style="style">
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
<script setup>
import { ref } from 'vue'
import Footer from './components/footer.vue'
const showMenu = ref(false)

</script>
<template>
  <div>
    <div class="navbar">
      <div class="nav">
        <div class="container">
          <div class="navLogo">
            <img src="./assets/logo_cn_en.svg" alt="赤子英金">
            <p>RainyDreams</p>
          </div>
          <div :class="{'mobileButton':true, show:showMenu}" @click="showMenu=!showMenu">
            <div class="box">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
          <div :class="{ 'mobile': true, show: showMenu }">
            <div class="navList">
              <div class="navItem">
                <router-link to="">首页</router-link>
              </div>
              <div class="navItem">
                <router-link to="">简介</router-link>
              </div>
              <div class="navItem">
                <router-link to="">致谢</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navBackground"></div>
    </div>
    <router-view class="router-view"></router-view>
    <Footer></Footer>
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
// 移动端
.navbar{
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  display: block;
}
.nav {
  position: relative;
  height: 56px;
  transition: border-color .5s,background-color .5s;
  z-index: 2;
  width:100%;
  border-bottom: 1px solid #e5e5e5;
  .container,.navList{
    display: flex;
    height:100%;
  }
  .container{
    padding:0 12px;
    justify-content: space-between;
    align-items: center;
  }
  .navLogo{
    display: flex;
    align-items: center;
    padding-right:16px;
    height:100%;
    p{
      padding-left:8px;
      font-size: 15px;
      font-weight: bold;
    }
    img{
      height:25px;
    }
  }
  .mobileButton{
    width:40px;
    height:40px;
  }
  .mobile{
    position: absolute;
    top:56px;
    left:0;
    width:100%;
    padding-top: 12px;
    height:calc(100vh - 56px);
    visibility: hidden;
    opacity: 0;
    transition: opacity .25s ease,visibility .25s ease;
    backdrop-filter: saturate(50%) blur(8px);
    background: rgba(255,255,255,.95);
  }
  .mobile.show{
    visibility: visible;
    opacity: 1;
  }
  .navList{
    flex-direction: column;
    align-items: stretch;
    padding-top: 24px;
  }
  .navItem{
    height:50px;
  }
  .navItem > *{
    height:100%;
    padding:0 36px;
    text-align: left;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ededed;
    color:#333;
  }
}
.navBackground{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  height:100%;
  width:100%;
  backdrop-filter: saturate(50%) blur(8px);
  background: rgba(255,255,255,.8);
}
//平板电脑
@media (min-width: 768px){
  .nav{
    padding: 0 32px;
    border-bottom:1px solid #ededed;
    .container{
      border:0;
      justify-content: space-between;
    }
    .mobileButton{
      display: none;
    }
    .mobile{
      position: relative;
      top:0;
      height:100%;
      padding:0;
      width:auto;
      visibility: visible;
      opacity: 1;
      transition: none;
      background: none;
    }
    .navList{
      padding: 0;
      flex-direction: row;
      border:0;
    }
    .navItem{
      padding:0;
      height:100%;
      border:0;
    }
    .navItem > *{
      padding:0 12px;
      text-align: center;
      display: flex;
      align-items: center;
      border:0;
    }
    .navLogo{
      display: flex;
      align-items: center;
      padding-right:16px;
      font-size:16px;
      p{
        padding-left:16px;
        font-size: 18px;
        font-weight: bold;
      }
      img{
        height:30px;
      }
    }
  }
}
//台式电脑
@media (min-width: 960px){
  .nav {
    height: 70px;
    display: flex;
    justify-content: center;
    .container,.navList{
      display: flex;
      height:100%;
    }
    .container{
      max-width: 1024px;
      width: 100%;
    }
    .navItem > *{
      height:100%;
      padding:0 16px;
    }
    .navLogo{
      p{
        padding-left:18px;
        font-size: 18px;
      }
      img{
        height:30px;
      }
    }
  }
}



// 动画类
.mobileButton{
  display: flex;
  flex-direction: column;
  padding:13px 12px;
  position: relative;
  .box{
    width:18px;
    height:14px;
    overflow: hidden;
    position: relative;
  }
  .line{
    position: absolute;
    width: 18px;
    height: 2px;
    background: #555;
    transition: top .25s,background-color .25s,transform .25s
    ,border .25s,opacity .25s;
  }
  .line:nth-child(1){
    top: 0;
    left: 0;
    transform: translate(4px);
  }
  .line:nth-child(2){
    top: 6px;
    left: 0;
    transform: translate(0);
    opacity: 1;
  }
  .line:nth-child(3){
    top: 12px;
    left: 0;
    transform: translate(4px);
  }
}
.mobileButton.show{
  .line:nth-child(1){
    top: 6px;
    transform: translate(0) rotate(225deg);
  }
  .line:nth-child(2){
    top: 6px;
    transform: translate(16px);
    opacity: 0;
  }
  .line:nth-child(3){
    top: 6px;
    transform: translate(0) rotate(135deg);
  }
}
</style>
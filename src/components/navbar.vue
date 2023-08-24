<script setup>
import { ref } from 'vue'

import {MessageForApp} from '../utils/message'
const showMenu = ref(false)
const showRed = ref(false)


window.addEventListener('changeMessage', () => {
  let num = parseInt(sessionStorage.getItem('msg_unread') || 0)
  if(num > 0){
    showRed.value = true
  } else {
    showRed.value = false
  }
})
</script>

<template>
  <div class="navbar">
    <div class="nav">
      <div class="container">
        <div class="navLogo">
          <img src="../assets/logo_cn_en.svg" alt="赤子英金" />
          <p>RainyDreams</p>
        </div>
        <div class="buttonList">
          <div
            :class="{ mobileButton: true, show: showMenu }"
            style="padding: 8px; justify-content: center; align-items: center"
            @click="openMessageList"
          >
            <router-link to="/messageList">
              <icon-remind theme="outline" size="19" fill="#444" />
              <div v-show="showRed" class="_red"></div>
            </router-link>
          </div>
          <div
            :class="{ mobileButton: true, show: showMenu }"
            style="padding: 13px 12px"
            @click="showMenu = !showMenu"
          >
            <div class="box">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div :class="{ mobile: true, show: showMenu }">
          <div class="navList">
            <div class="navItem">
              <router-link to="/">首页</router-link>
            </div>
            <div class="navItem">
              <router-link to="/introduce">简介</router-link>
            </div>
            <div class="navItem">
              <router-link to="/thanks">致谢</router-link>
            </div>
            <div
              :class="{ navItem: true, hide: !showMenu }"
            >
              <router-link to="/messageList">
                <!-- <icon-remind theme="outline" size="19" fill="#444" /> -->
                <span>通知</span>
                <div v-show="showRed" class="_red"></div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navBackground"></div>
  </div>
</template>

<style lang="scss" scoped>

.navbar{
  width: 100%;
  position: fixed;
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
  .navList,.container{
    display: flex;
    height:100%;
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
  .buttonList{
    display: flex;
    height:100%;
    align-items: center;
  }
  .mobileButton{
    width:40px;
    height:40px;
    font-size: 0;
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
    display: none;
    transition: all .25s ease;
    backdrop-filter: saturate(50%) blur(8px);
    background: rgba(255,255,255,.95);
    display: block;

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

._red{
  position: absolute;
  top:8px;
  right:8px;
  width:5px;
  height:5px;
  border-radius: 2.5px;
  background: red;
}



// 动画类
.mobileButton{
  display: flex;
  flex-direction: column;
  // padding:13px 12px;
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
    background: #444;
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
<script setup>
import { ref } from "vue";
const tool_list = ref([]);
const card = ref(null);
(async () => {
  tool_list.value = [
    {
      name: "code",
      title: "CRSA",
      desc: "将字符串按照指定规则加密解密",
      author: "Zhang",
      version: '4.2',
      updateTime: "2024-02-20",
      look:'none'
    },
  ];
})();

const XRange = [-5, 5];
const YRange = [-5, 5];
function getRotate(range, value, max) {
  return (value / max) * (range[1] - range[0]) + range[0];
}
//节流
function throttle(fn, t) {
  let timer = null;
  // return一个匿名函数
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn();
    }, t);
  };
}
function hoverEffect(e, i) {
  throttle(function () {
    console.log(e);
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = e.target;
    console.log(offsetWidth, offsetHeight);
    const ry = -getRotate(YRange, offsetX, offsetWidth);
    const rx = getRotate(XRange, offsetY, offsetHeight);
    tool_list.value[
      i
    ].rotate = `perspective(500px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    // console.log(tool_list.value[i])
  }, 50)();
}
function leaveEfect(i) {
  setTimeout(function () {
    tool_list.value[i].rotate =
      "perspective(500px) rotateX(0deg) rotateY(0deg)";
  }, 100);
}
// console.log(card)
</script>

<template>
  <div class="container content">
    <div class="section-header mt-0">
      <h2>TOOLS</h2>
      <h3>Some tools I made to pass my time, I hope they can help you</h3>
    </div>
    <div class="tools-view row">
      <template v-for="(item, i) in tool_list" :key="i">
        <div class="col-md-4 col-sm-6">
          <div class="pd-box">
            <div class="section">
              <div class="state" style="background-color: aquamarine">
                {{item.version}}
              </div>
              <div class="icon">
                <img :src="item.img?.src" :alt="item.img?.alt ?? ''" />
              </div>
              <h3 class="title">{{item.title}}</h3>
              <div class="content">
                <p>{{item.desc}}</p>
                <!-- <p>Update time:{{item.updateTime}}</p> -->
                <div class="ctbox">
                  <span class="ifm">
                    <span><icon-update-rotation theme="outline" size="12" fill="#333"/>{{item.updateTime}}</span>
                  </span>
                  <router-link :to="`/tools/${item.name}`" class="btn h-light">
                    <span>Try it</span>
                    <span class="mxicon h-showlr" mx-width="14px">&#xE941;</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
@import url(../styles/tools.scss);
.tools-item {
  display: block;
  background: #333;
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 1rem;
  position: relative;
  transition: 0.1s;
  .RangeCover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }
  .describe {
    font-size: 0.8rem;
    color: #999;
  }
  .background {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    .masking-out {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
    }
  }
  .background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  .author {
    font-size: 0.8rem;
    color: #999;
  }
  .update-time {
    font-size: 0.8rem;
    color: #999;
  }
  &:hover {
    box-shadow: 0 0 10px #9992;
  }
}
</style>
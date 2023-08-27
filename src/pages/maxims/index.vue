<script setup>
import { onMounted,ref } from "vue";
const maxims = ref([
  {
    title:'浪淘沙·北戴河',
    author:'毛泽东',
    time:'[近现代]',
    body:`大雨落幽燕，
    白浪滔天，
    秦皇岛外打鱼船。
    一片汪洋都不见，
    知向谁边？

    往事越千年，
    魏武挥鞭，
    东临碣石有遗篇。
    <b>萧瑟秋风今又是，
    换了人间。</b>
    `
  },
  {
    title:'满江红·和郭沫若同志',
    author:'毛泽东',
    time:'[近现代]',
    body:`小小寰球，有几个苍蝇碰壁。
    嗡嗡叫，几声凄厉，几声抽泣。
    蚂蚁缘槐夸大国，蚍蜉撼树谈何易。
    正西风落叶下长安，飞鸣镝。
    多少事，从来急；天地转，光阴迫。
    <b>一万年太久，只争朝夕。</b>
    <b>四海翻腾云水怒，五洲震荡风雷激。
    要扫除一切害人虫，全无敌。</b>`
  },
  {
    title:'我爱这土地',
    author:'艾青',
    time:'[近现代]',
    body:`假如我是一只鸟，
    我也应该用嘶哑的喉咙歌唱：
    这被暴风雨所打击着的土地，
    这永远汹涌着我们的悲愤的河流，
    这无止息地吹刮着的激怒的风，
    和那来自林间的无比温柔的黎明……
    ——然后我死了，
    连羽毛也腐烂在土地里面。
    <b>为什么我的眼里常含泪水？
    因为我对这土地爱得深沉……</b>`
  }
])

function html(e){
  return e
  .replace(new RegExp('\n','g'),'<br/>')
  .replace(new RegExp('\r','g'),'')
  .replace(new RegExp('<br/><br/>','g'),'')
}
</script>

<template>
  <div class="maxim">
    <div class="container content" >
      <div class="maxim-view" id="tabContainer">
        <div class="maxim-item" v-for="(item,i) in maxims" :key="i">
          <div class="title">{{item.title}}</div>
          <div class="author">{{item.author}} {{item.time}}</div>
          <div class="body" v-html="html(item.body)"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.maxim {
  background: #d4d2bc;
}
.maxim-view {
  position: relative;
  padding:1rem 0;
}
.maxim-item {
  height: auto;
  border-radius: 8px;
  background: #fff9;
  break-inside: avoid;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  padding:1rem;
  margin-bottom:2rem;
  .title{
    font-size:1.5rem;
    margin-bottom: 0.2rem;
    font-weight: 600;
  }
  .author{
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
  .body{
    font-size: 1.1rem;
    line-height: 2rem;
  }
}
</style>
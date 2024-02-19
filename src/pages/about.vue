<script setup>
import DocImage from '../components/docImage.vue';
import { RouterLink } from 'vue-router';
// import { onMounted, ref } from "vue";
// import { useRoute } from 'vue-router'
// const route = useRoute();
// const to = ref(route.query?.to);
// console.log(to.value,document.getElementById(to.value))
// onMounted(()=>{
//   setTimeout(()=>{
//     document.getElementById(to.value).scrollIntoView({behavior: "smooth"})
//   },100)
// })
</script>

<template>
  <div class="container content">
    <div class="document">
      <h1>关于我们</h1>
      <h2>赤子英金是谁？</h2>
      <p>赤子英金是一个由中学生组成的社会性集团，创办于2022年，旨在服务学生群体，分享技术内容，传播社会正能量。赤子英金社区是一个以赤子英金集团为主体面向学生的技术、影视、娱乐社区。目前由 @肖遥 运营。</p>
      <p>赤子英金诞生于美丽的英金河畔，怀着一颗赤子之心，为用户创造更好的产品。</p>
      <p><DocImage>
        <template #image>
          <img src="../assets/images/ingiinriver.jpg" alt="IngiinRiver">
        </template>
        <template #describe>
          <span>图 美丽的英金河畔 邬源摄</span>
        </template>
      </DocImage></p>
      <p style="text-align:center;font-size:14px;margin-top:-8px;font-family: Arial, Helvetica, sans-serif;"></p>
      <h2>管理人员</h2>
      <p>赤子英金创始人：<a href="">张新越 RainyDreams</a></p>
      <p>赤子英金监制：邬源（笔）</p>
      <h2 id="thanks">致谢</h2>
      <p style="text-align: center;">
        <router-link to="/thanks"></router-link>
      </p>
      <!-- <h3>为赤子英金的发展提供过帮助的组织</h3>
      <ul class="unorder_list">
      </ul> -->
      <h3>特殊致谢</h3>
      <ul class="unorder_list">
        <li>Github Co,Ltd</li>
        <li>深圳市奥思网络科技有限公司(Gitee)</li>
      </ul>
      <h2>写在后面</h2>
      <!-- <p style="padding:180px 0;line-height:40px;font-size:26px;letter-spacing:4px;font-style:italic;text-align:center;font-family:'Courier New', Courier, monospace">梦想只是开始，探索永不止步</p> -->
      <p class="noselect" style="padding:180px 0;
        font-style:italic;text-align:center;font-family:'Courier New', Courier, monospace">
        <img src="../assets/font.svg" style="height:30px;" alt="梦想只是开始，探索永不止步">
      </p>
      <p></p>
      <h2 id="Lianxiwomen">联系我们</h2>
      <!-- <p>本页面已开源在github:<a href="https://github.com/ChiziIngiin-Group/chiziingiin.github.io">ChiziIngiin-Group/chiziingiin.github.io</a></p> -->
      <p>赤子英金官方邮箱：<a href="mailto:chiziingiin@126.com">chiziingiin@126.com</a></p>
      <p>赤子英金负责人邮箱：<a href="mailto:cfzxycn@163.com">cfzxycn@163.com</a></p>
      <p style="text-align: center;margin:16px 0">赤子英金公众号</p>
      <p style="text-align: center;"><img src="../assets/qrcode_mp.jpg" style="height:180px;width:180px;border-radius: 19px;box-shadow: 0 0 9px rgba(0,0,0,0.11);box-sizing: content-box;padding:5px" alt=""></p>
    </div>
  </div>
</template>

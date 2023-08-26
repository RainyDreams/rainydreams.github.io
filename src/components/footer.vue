<script setup>
import {ref} from 'vue';
function _ChangeColor (e) {
  // console.dir(...e)
  console.log(e.currentTarget.dataset)
}
let color = ref([])
</script>

<template>
  <div>
    <div class="footer">
      <div class="_container">
        <div class="container">
          <!-- <div class="sitemap"></div>
          <div class="_footer">
            <div class="license"></div>
            <div class="copyright">© 2023 Zhang.</div>
            <div class="details">你正在浏览我的个人网站</div>
          </div> -->
          <div class="focus_me">
            <span class="_title">Focus Me</span>
            <ul class="focus_list">
              <!-- <li>Wechat</li>
              <li>GitHub</li>
              <li>Twitter(X)</li>
              <li></li> -->
              <li><icon-github-one size="24" :fill="color[0] ?? '#5f6464'" @mouseover="color[0]='#1f2328'" @mouseleave="color[0]=null"/></li>
              <li><icon-twitter size="24" :fill="color[1] ?? '#5f6464'" @mouseover="color[1]='#1da1f2'" @mouseleave="color[1]=null"/></li>
              <li><icon-wechat size="24" :fill="color[2] ?? '#5f6464'" @mouseover="color[2]='#1AAD19'" @mouseleave="color[2]=null"/></li>
              <li><icon-weibo size="24" :fill="color[3] ?? '#5f6464'" @mouseover="color[3]='#ff8200'" @mouseleave="color[3]=null"/></li>
            </ul>
          </div>
          <div class="privite">此页面使用Google Analytics和百度统计功能来分析用户行为，详见 <router-link to="/cookie">Cookie和隐私</router-link> </div>
          <div class="copyright">Copyright © 2021 - 2023 ChiziIngiin & Zhang.. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mfooter",
};
</script>

<style scoped lang="scss">
ul{
  list-style: none;
  display: flex;  
  align-items: flex-start;
  margin:0;
}
li {
  display: block;
  margin-right: 28px;
  cursor: pointer;
}
.footer{
  padding-bottom:34px;
}
._title {
  display: block;
  font-size: 20px;
  color: #5f6464;
  font-weight: normal;
}
.focus_me {
  width: 100%;
  border-bottom: 1px solid #dadde3;
  padding-top: 33px;
  box-sizing: content-box;
  display: flex;
  align-items: flex-start;
  padding-bottom: 33px;
}
.container > *{
  padding-top: 8px;
  font-size: 13px;
  color:#555;
}
</style>
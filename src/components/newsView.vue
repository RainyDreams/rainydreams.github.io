<script setup>
// import {ref} from 'vue'
// import {feature} from '../assets/feature.data'
// function getDate(){
//   let date = new Date();
//   let y=date.getFullYear();
//   let m=(date.getMonth()+1+'').padStart(2,"0")  
//   let d=(date.getDate()+'').padStart(2,"0")  
//   return new Number([y,m,d].join(""))
// }

// const today = ref(getDate())
// const FeatureList = ref([])
// for(let i in feature){
//   let t = feature[i];
//   if(t.startDate <= today.value && today.value <= t.endDate){
//     FeatureList.value.push(t.detail)
//   }
// }
import {ref,onMounted} from 'vue'

</script>

<template>
  <div class="newsView">
    <h2 class="big">FOCUS</h2>
    <p>To learn more about me, please follow me on WeChat: "ChiziingiinGroup"</p>
    <div class="content row " ref="swiper">
      <div class="col-sm-12 col-md-4">
        <div class="news-image"></div>
        <div class="news-title"></div>
        <div class="news-describe"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsView{
  // height:300px;
  padding: 20px 0;
}
@media screen and (max-width: 767px) {
  
}
@media screen and (min-width: 768px) {
  .content{
    display: -moz-box;
    display: flex;
    background: #fff;
    border-radius: 0;
    overflow: hidden;
  }
}
@media screen and (min-width: 960px) {
}
</style>
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
const swiper = ref()
const swiperWidth = ref(0)
const swiperHeight = ref(0)

onMounted(()=>{ 
  console.dir(swiper.value.offsetWidth);
  swiperWidth.value = (swiper.value.offsetWidth - 200)+'px';
  swiperHeight.value = (swiper.value.offsetWidth - 200)/2.35+'px';
})
</script>

<template>
  <div class="newsView">
    <h2 class="big">FOCUS</h2>
    <div class="content" ref="swiper">
      <div class="swiper-main" :style="{width:swiperWidth,height:swiperHeight}">
        <div class="swiper-img">
          <div :style="{'background-image':'url(https://s11.ax1x.com/2024/01/22/pFZr8NF.png)'}"></div>
        </div>
      </div>
      <div class="swiper-list" ref="swiperList">
        <ul>
          <li>XXXXXX</li>
          <li>ZZZZZZ</li>
          <li>YYYYYY</li>
        </ul>
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
  .swiper-main{
    width: 100%;
    .swiper-img{
      height:100%;
      div{
        height:100%;
        background-repeat: no-repeat;
        background-size: auto 100%;
      }
    }
  }
  .swiper-list{
    width:200px;
    ul{
      display: flex;
      flex-direction: column;
      margin: 0;
      li{
        list-style: none;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        padding-left: 20px;
        &:last-child{
          border-bottom: none;
        }
      }
    }
  }
}
@media screen and (min-width: 960px) {
}
</style>
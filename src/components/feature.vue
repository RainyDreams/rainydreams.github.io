<script setup>
import {ref} from 'vue'
const feature = {
  '纪念日本投降':{
    id:'MF20230815',
    startDate:20230815,
    endDate:20230816,
    detail:{
      theme:{
        background:'#222',
        color:'#fff'
      },
      title:'纪念日本投降',
      smallTitle:'日本战败投降78周年',
      detail:'1945年8月15日，日本裕仁天皇通过广播发表《终战诏书》，宣布无条件投降。历史不能被遗忘！ 铭记历史，缅怀先烈，砥砺前行，吾辈自强！'
    }
  },
  '毛泽东逝世纪念日':{
    id:'MF20230815',
    startDate:20230908,
    endDate:20230912,
    detail:{
      theme:{
        background:'rgb(55,50,0)',
        color:'#fff'
      },
      title:'大海航行靠舵手，万物生长靠太阳',
      smallTitle:'伟大的领袖和导师毛泽东主席逝世47周年纪念日',
      detail:'1976年9月9日，毛泽东逝世。纪念伟人，最好的方式就是不断学习，不断进步，不断总结，不断提高。'  
    }
  },
}
function getDate(){
  let date = new Date();
  let y=date.getFullYear();
  let m=(date.getMonth()+1+'').padStart(2,"0")  
  let d=(date.getDate()+'').padStart(2,"0")  
  return new Number([y,m,d].join(""))
}

const today = ref(getDate())
const FeatureList = ref([])
for(let i in feature){
  let t = feature[i];
  if(t.startDate <= today.value && today.value <= t.endDate){
    FeatureList.value.push(t.detail)
  }
}

</script>

<template>
  <div>
    <template v-for="(t,i) in FeatureList" :key="i">
      <div :id="t.id" class="feature" :style="t.theme">
        <div class="container" style="position: relative;">
          <div class="activeId">{{ `${today}#${i+1}` }}</div>
          <div class="feature-body">
            <div class="feature-title" v-html="t.title"></div>
            <div class="feature-smallTitle">{{t.smallTitle}}</div>
            <div class="feature-detail">{{t.detail}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.activeId{
  position: absolute;
  right:0;
  top:2em;
  font-size: 12px;
  color:#888;
  opacity: 0.3;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  text-align: right;
}
.feature-body{
  padding: 4em 0;
}
.feature-title {
  font-weight: 700;
  margin-bottom: .5rem;
  color: inherit;
  font-size:3em;
  line-height:2em;
}
.feature-smallTitle{
  font-size:2.1em;
  line-height:1.8em;
  margin-bottom: .5rem;
}
.feature-detail{
  font-size:1.2em;
  line-height:1.4em;
  margin-bottom: .5rem;
}
</style>
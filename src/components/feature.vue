<script setup>
import {ref} from 'vue'
import {feature} from '../assets/feature.data'
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
        <div class="container content" style="position: relative;">
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
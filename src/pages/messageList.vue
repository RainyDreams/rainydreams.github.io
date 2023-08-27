<script setup>
import {ref} from 'vue'
import { getFriendlyTime } from "../utils/base";
const messageList = ref([])
messageList.value=JSON.parse(sessionStorage.getItem('msg') ?? '[]') 
function compare(property, desc) {
  return function (a, b) {
    let value1 = a[property];
    let value2 = b[property];
    if (desc == true) {
      return value1 - value2; //升序
    } else {
      return value2 - value1; //降序
    }
  };
}
messageList.value.reverse()
function readAll(){
  messageList.value.forEach(item=>{
    item.read=true
  })
  //倒序
   //未生效
  // console.log()

  sessionStorage.setItem('msg',JSON.stringify(messageList.value))
  sessionStorage.setItem('msg_unread',0)
  var newStorageEvent = document.createEvent('StorageEvent');
  newStorageEvent.initStorageEvent('changeMessage', false, false, null, null, null, null, null); 
  window.dispatchEvent(newStorageEvent)
}
</script>
<template >
  <div class="container">
    <p>[!]此页面为实验性页面</p>
    <button @click="readAll()">全部已读</button>
        <!-- SmallMessage功能 -->
    <template v-for="(conf,i) in messageList" :key="conf.id">
      <div :class="['mx-messageItem',conf.hide?'hide':'',conf.type,
                    ,(messageList.length-i==1)?'show':'behined']" 
         :id="conf.id"
         >
         <div class="mx-msg__content">
          <div class="mx-msg__App">
            <div class="mx-msg__App--name">
              {{conf.app.name}}
            </div>
            <div class="mx-msg__time">
              {{ getFriendlyTime(conf.time) }}{{ messageList.length-i }}
            </div>
          </div>
          <div class="mx-msg__text">
            <span class="mx-msg--title">
              {{conf.title}}
            </span>
            <span class="mx-msg--text">
              {{conf.text}}
              <a @click="Fn_SmallMessage.more(conf)" v-if="conf.more">More</a>
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
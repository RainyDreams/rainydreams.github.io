<script setup>
import { ref,onMounted } from 'vue'
import { getFriendlyTime } from "../utils/base";
import {MessageService} from "../utils/message";
import MessageDom from "../components/MessageService.vue";

const messageList = ref({})
const appList = ref([]) 
const active = ref(0)

var msglist = JSON.parse(sessionStorage.getItem('msg') ?? '[]')
// msglist.reverse()
var applist = []
var msg = {}
msglist.forEach(e => {
  // console.log(e.appId);
  //如果数组中不含有这个appid,就把它加入进去
  if (!applist.includes(e.appId)) {
    applist.push(e.appId)
    msg[e.appId]=[]
  }
  msg[e.appId].push(e)
});

console.log(applist);
appList.value=applist
messageList.value=msg



const message = ref({});
let mss;

onMounted(()=>{
  mss = new MessageService(message);
  mss.smallAlert({title:'加密成功',text:'请复制'})

})
</script>
<template >
  <div class="container content">
    <MessageDom :message="message"></MessageDom>
    <!-- <p>[!]此页面为实验性页面</p>
    <button @click="readAll()">全部已读</button> -->
    <div class="message-view">
      <div class="app-list">
        <div :class="{'item':1,'active':i==active}" v-for="(item,i) in applist" :key="item">
          {{ item }}
        </div>
      </div>
      <div class="message-single">
        <div class="message-list">
          <div class="item" v-for="(item) in (applist[active] ? messageList[applist[active]] : [])" :key="item">
            {{ item.text }}
          </div>
        </div> 
        <div class="sendbox">
        </div>
      </div>
    </div>
    This function is experimental and may contain inaccurate or incomplete information
  </div>
    
    <!-- <template v-for="(conf,i) in messageList" :key="conf.id">
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
    </template> -->
</template>


<style scoped lang="scss">
  .message-view{
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background: #fff;
    min-height: 500px;
    border-radius: 20px;
    overflow: hidden;
    .app-list{
      width:25%;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      .item{
        padding: 20px;
        &.active{
          background: #ecf0f4;
        }
      }
    }
    .message-single{
      width:75%;
      background: #ecf0f4;
      user-select: auto;
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      .message-list{
        padding-top:30px;
        padding-left: 20px;
        padding-left: 20px;
        height: 500px;
        overflow-y: auto;
        .item{
          background-color: #fff;
          width:fit-content;
          padding:6px 8px;
          border-radius: 4px;
          margin-bottom: 12px;
        }
      }
    }
  }
</style>
<script setup>
import {decode,encode} from "../../utils/czigpswd";
import {ref,onMounted} from "vue";
import {MessageService} from "../../utils/message";
import MessageDom from "../../components/MessageService.vue";
import jsonp from '../../utils/jsonp'
const input1 = ref('')
const pwd1 = ref('')
const input2 = ref('')
const pwd2 = ref('')
const output1 = ref('')
const output2 = ref('')
const v1 = ref('')
const v2 = ref('')
// debug()
// const v3 = ref()
const output3 = ref()
// const j1 = ref()
// const j2 = ref()


const message = ref({});
let msg;

onMounted(()=>{
  msg = new MessageService(message);
  // message.value = {}
  jsonp('https://apis.map.qq.com/ws/location/v1/ip?key=L66BZ-OHFCU-DVZVU-BNPTD-KPAF5-CCFPO&output=jsonp').then((e)=>{
    if(e.result){
      output3.value = `
      IP:${e.result.ip}
      Location:${e.result.ad_info.province + e.result.ad_info.city + e.result.ad_info.district}
      Detail:${e.result.location.lat + ',' + e.result.location.lng}`
    } else {
      output3.value = `获取失败，未使用安全域？
或您正在使用本地域名
请访问<a href="https://RainyDreams.github.io/RainyDreams/">https://RainyDreams.github.io/RainyDreams/</a>`
    }
  }).catch(e=>{
    output3.value = `获取失败，网络错误`
  })

})
const doEncode = () => {
  if(!input1.value){
    return msg.smallAlert({text:'你还没有输入内容',type:'warning'})
  }
  encode(input1.value,pwd1.value).then((res)=>{
    if(typeof res == 'object'){
      return msg.smallAlert({...res})
    } else {
      msg.smallAlert({title:'加密成功',text:'请复制'})
    }
    output1.value = res
  }).catch(e=>{
    output1.value = `获取失败，系统错误`+e
  })
}
const doDecode = () => {
  if(!input2.value){
    return msg.smallAlert({text:'你还没有输入内容',type:'warning'})
  }
   
  decode(input2.value,pwd2.value).then((res)=>{
    if(typeof res == 'object'){
      return msg.smallAlert({...res})
    }else{
      msg.smallAlert({title:'解密成功',text:'请复制'})

    }
    output2.value = res
  }).catch(e=>{
    output1.value = `获取失败，网络错误`+e
  })
}
function isWeChat(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger') return true;
  return false;
}

const copyPwd = (e)=>{
  var elem = e==1?v1.value:v2.value;
  var text = e==1?output1.value:output2.value;
  // console.log(elem)
  if(!text){
    msg.smallAlert({
      text:'无内容',
      type:'warning'
    })
    return 0;
  }
  if (!isWeChat() && navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() {
      // console.log("复制成功")
      msg.smallAlert({
        text:'复制成功',
        type:'success'
      })
    }, function() {
      // console.log("复制失败")
      // msg.smallAlert('通过"navigator.clipboard"API','复制失败',false)
      try{
        elem.focus()
        elem.select()
        document.execCommand('copy');   // 触发复制事件
        // document.execCommand("unselect", "false", null) // 取消选取区域
        msg.smallAlert({
          text:'复制成功',
          type:'success'
        })
      }catch(e){
        msg.smallAlert({
          text:`复制失败<br/>原因:${e}`,
          type:'fail'
        })

      }
      });
  }else{
    // document.execCommand 已被弃用，所以首选 navigator.clipboard
    try{
        elem.focus()
        elem.select()
        document.execCommand('copy');   // 触发复制事件
        // document.execCommand("unselect", "false", null) // 取消选取区域
        msg.smallAlert({
          text:'复制成功',
          type:'success'
        })
      }catch(e){
        msg.smallAlert({
          text:`复制失败<br/>原因:${e}`,
          type:'fail'
        })
      }
  }
};;



</script>

<template>
  <div>
    <MessageDom :message="message"></MessageDom>
    <div class="pwd-input">
      <div class="pwd-input-title">
        <span>位置信息</span>
        <div class="pwd-input-smallTitle">Location API</div>
        <div class="pwd-input-smallTitle">您不必开启位置权限，只需要链接WIFI或移动数据</div>
      </div>
      <div class="pwd-input-item">
        <pre v-html="output3"></pre>
      </div>

      <div class="pwd-input-title">
        <span>加密</span>
        <div class="pwd-input-smallTitle">采用CZIG加密技术</div>
      </div>
      
      <div class="pwd-input-item">
        <div class="pwd-input-item-label">输入</div>
        <input class="pwd-input-item-input" type="text" v-model="input1"/>
      </div>
      <!-- <div class="pwd-input-item">
        <div class="pwd-input-item-label">密码</div>
        <input class="pwd-input-item-input" placeholder="可选默认使用公钥加密" type="text" v-model="pwd1"/>
      </div> -->
      <button class="pwd-input-btn" @click="doEncode()">加密</button>
      <div class="pwd-input-item">
        <input class="pwd-copyarea" type="text" placeholder="输出" readonly ref="v1" v-model="output1"/>
        <button class="pwd-copybutton" @click="copyPwd(1)">复制</button>
      </div>

      <div class="pwd-input-title">
        <span>解密</span>
        <div class="pwd-input-smallTitle">仅可以解密近3分钟的内容</div>
      </div>
      
      <div class="pwd-input-item">
        <div class="pwd-input-item-label">输入</div>
        <input class="pwd-input-item-input" type="text" v-model="input2"/>
      </div>
      <!-- <div class="pwd-input-item">
        <div class="pwd-input-item-label">密码</div>
        <input class="pwd-input-item-input" placeholder="可选" type="text" v-model="pwd2"/>
      </div> -->
      <button class="pwd-input-btn" @click="doDecode()">解密</button>
      <div class="pwd-input-item">
        <input class="pwd-copyarea" type="text" placeholder="输出" readonly ref="v2" v-model="output2"/>
        <button class="pwd-copybutton" @click="copyPwd(2)">复制</button>
      </div>

      <div>声明: 您使用此网站即代表同意<router-link to="/userlicense">赤子英金用户服务协议</router-link></div>

    </div>
  </div>
</template>
  
<style scoped>

.pwd-input{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  max-width: 450px;
  margin:0 auto;
}
.pwd-input-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  margin-bottom: 20px;
}
.pwd-input-item-label {
  width: 40px;
  height: 100%;
  font-size: 15px;
  color: #010918;
  font-weight: 800;
  line-height: 50px;
}
.pwd-input-item-input {
  width: 300px;
  height: 100%;
  border-radius: 16px;
  font-size: 14px;
  color: #444;
  line-height: 40px;
  border:0;
  background: #fff;
  padding:0 16px;
  outline: none;
  min-height: 40px;
  box-shadow:inset 10px 10px 20px -18px #0005
}
.pwd-input-btn{
  width:100%;
  height: 40px;
  background: #005eff;
  color:#fff;
  border-radius:20px;
  padding:0;
  font-size:14px;
  line-height: 40px;;
  margin-bottom: 20px;
  outline: none !important;
  border:0;
}
.pwd-copyarea{
  width: 300px;
  height: 100%;
  font-size: 14px;
  color: #606266;
  align-items: center;
  border:0;
  background: #fff;
  padding:0 16px;
  outline: none;
  min-height: 40px;
  box-shadow:inset 10px 10px 20px -18px #0005;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.pwd-copybutton{
  border-radius: 0;
  background: #005eff;
  color:#fff;
  width: 80px;
  padding:0px;
  height: 100%;
  font-size: 14px;
  line-height: 40px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  outline: none !important;
}
.pwd-input-title{
  /* width: 100%; */
  /* height: 40px; */
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  font-weight: 800;
  line-height: 40px;
  position: relative;
  padding:0 3px;
  margin-bottom:16px;
}
.pwd-input-smallTitle{
  font-size:14px;
  line-height:14px;
  font-weight: 500;
  color:#999;
}
.pwd-input-title span{
  position: relative;
}
.pwd-input-title span::after{
  content:"";
  position: absolute;
  left:-2px;
  bottom:-3px;
  height:8px;
  width:calc(100% + 6px);
  z-index: -1;
  opacity: 0.8;
  background: #008dff;
}
</style>
<!-- <script>
  
  console.log(
      await encode('你好，世界,helloworld','12284851856115516155656551515661566651561166')
  )
</script> -->






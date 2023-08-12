<script setup>
import {decode,encode} from "../utils/czigpswd";
import {ref,onMounted} from "vue";
import {setupMessageService} from "../utils/message";
const input1 = ref('')
const pwd1 = ref('')
const input2 = ref('')
const pwd2 = ref('')
const output1 = ref('')
const output2 = ref('')
const v1 = ref('')
const v2 = ref('')
const msgElement = ref()
let msg = {}
let alert = new Function()
onMounted(()=>{
  msg = setupMessageService(msgElement);
  console.log(msg)
  msg.then(e=>{alert = e})
})
const doEncode = () => {
  if(!input1.value){
    return alert(null,'你还没有输入内容',false)
  }
   
  encode(input1.value,pwd1.value).then((res)=>{
    output1.value = res
  })
}
const doDecode = () => {
  if(!input2.value){
    return alert(null,'你还没有输入内容',false)
  }
   
  decode(input2.value,pwd2.value).then((res)=>{
    console.log(res)
    if(typeof res == 'object'){
      return alert(null,res.message,false)
    }
    output2.value = res
  })
}

const copyPwd = (e)=>{
  var elem = e==1?v1.value:v2.value;
  var text = e==1?output1.value:output2.value;
  console.log(elem)
  if(!text){
    return alert(null,'复制内容为空',false)
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() {
      console.log("复制成功")
      alert(null,'复制成功',false)
    }, function() {
      console.log("复制失败")
      alert('通过"navigator.clipboard"API','复制失败',false)
    });
  }else{
    // document.execCommand 已被弃用，所以首选 navigator.clipboard
    try{
      var range
      if (document.body.createTextRange) {
          range = document.body.createTextRange();
          range.moveToElementText(elem);
          range.select();
      } else if (window.getSelection) {
          var selection = window.getSelection();
          range = document.createRange();
          range.selectNodeContents(elem); // 创建选取内容范围
          selection.removeAllRanges();  // 清除已选择的内容
          selection.addRange(range);   // 添加选取内容，模拟用户选取
          /*if(selection.setBaseAndExtent){
              selection.setBaseAndExtent(text, 0, text, 1);
          }*/
      } else {
          console.warn("none");
      }
      document.execCommand('copy');   // 触发复制事件
      document.execCommand("unselect", "false", null) // 取消选取区域
      alert(null,'复制成功',false)
    }catch(e){
      alert("通过\"document.execCommand\"API",'复制失败',false)
    }
  }
}

</script>

<template>
<div class="MessageService" ref="msgElement"></div>

<div class="pwd-input">
  <div class="pwd-input-title">
    <span>加密</span>
    <div class="pwd-input-smallTitle">采用CZIG加密技术</div>
  </div>
  
  <div class="pwd-input-item">
    <div class="pwd-input-item-label">输入</div>
    <input class="pwd-input-item-input" type="text" v-model="input1"/>
  </div>
  <div class="pwd-input-item">
    <div class="pwd-input-item-label">密码</div>
    <input class="pwd-input-item-input" placeholder="可选" type="text" v-model="pwd1"/>
  </div>
  <button class="pwd-input-btn" @click="doEncode()">加密</button>
  <div class="pwd-input-item">
    <input class="pwd-copyarea" type="text" placeholder="输出" readonly ref="v1" v-model="output1"/>
    <button class="pwd-copybutton" @click="copyPwd(1)">复制</button>
  </div>

  <div class="pwd-input-title">解密</div>
  <div class="pwd-input-item">
    <div class="pwd-input-item-label">输入</div>
    <input class="pwd-input-item-input" type="text" v-model="input2"/>
  </div>
  <div class="pwd-input-item">
    <div class="pwd-input-item-label">密码</div>
    <input class="pwd-input-item-input" placeholder="可选" type="text" v-model="pwd2"/>
  </div>
  <button class="pwd-input-btn" @click="doDecode()">解密</button>
  <div class="pwd-input-item">
    <input class="pwd-copyarea" type="text" placeholder="输出" readonly ref="v2" v-model="output2"/>
    <button class="pwd-copybutton" @click="copyPwd(2)">复制</button>
  </div>

</div>

</template>
  
<style>
body{
  background: #f0f3f6;
}
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
  height: 50px;
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
.pwd-input-title::after{
  content:"";
  position: absolute;
  left:0;
  bottom:6px;
  height:8px;
  width:100%;
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






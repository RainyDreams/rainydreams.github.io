<script setup>
import { toRefs, defineProps, watch, ref } from "vue";
const props = defineProps({
  message: Object,
});
const { message } = toRefs(props);
const msgElement = ref()
const WindowWidth = ref(window.innerWidth)
const List_Alert = ref([])
const List_SmallMessage = ref([])
function findbyid(list,id){
  //从数组AlertList.value中找到id==id的元素,并获取他的index,组成一个对象
  const index = list.findIndex(item=>item.id==id)
  return {index,id}
}
const Fn_Alert = {
  default(e){
    List_Alert.value[findbyid(List_Alert.value,e).index].hide=true;
    setTimeout(()=>{
      List_Alert.value.splice(findbyid(List_Alert.value,e).index,1)
    },200)
  },
  confirm(e){
    console.log(e,this)
    this.default(e)
  },
  cancel(e){
    this.default(e)
  },
  close(e){
    this.default(e)
  },
}

const Fn_SmallMessage = {
  //延迟
  delay(e,t){
    let _this=this
    setTimeout(()=>{
      _this.default(e)
    },t=4000)
  },
  default(e){
    List_SmallMessage.value[findbyid(List_SmallMessage.value,e).index].hide=true;
    setTimeout(()=>{
      List_SmallMessage.value.splice(findbyid(List_SmallMessage.value,e).index,1)
    },500)
  },
  close(e){
    this.default(e)
  },
}

watch(
  ()=>props.message, 
  (newVal, oldVal) => {
  console.log("new", newVal);
  console.log("old", oldVal);
  if(typeof newVal !== "object") throw 'error'
  if(newVal?.msgType === "alert"){
    List_Alert.value.push(newVal.value)
  } else if(newVal?.msgType === "small"){
    if(List_SmallMessage.value.length >= 4){

    }
    List_SmallMessage.value.push(newVal.value)
    Fn_SmallMessage.delay(newVal?.value?.id,newVal?.value?.time)
  }
});
</script>

<template>
  <!-- MessageService引入成功 -->
  <div class="MessageService" ref="msgElement">
    {{ message }}
    <!-- Alert功能 -->
    <div :class="{'mx-modal__wrapper':true,hide:conf.hide}" v-for="conf in List_Alert" :key="conf.id" :id="conf.id">
      <div :class="`mx-modal__container ${conf.boolien?'onlytrue':''}`" style='margin-top: 15vh;'>
        <div class='mx-modal__header'>
          <span class='mx-modal__title'>{{conf.title}}</span>
          <button class='mx-modal__headerbtn'><i class='mx-modal__close iconfont icon-close'></i></button>
        </div>
        <div class='mx-modal__body'>
          <div>{{conf.body}}<textarea class='mx-alert-content' style='opacity:0;width:1px;height:1px;' v-model="conf.body"></textarea></div>
        </div>
        <div class='mx-modal__footer'>
          <button v-if="conf.boolien != false" @click="Fn_Alert.cancel(conf.id)"
          class='mx-modal-button mx-modal--default'><span>{{conf.t2}}</span></button>
          <button class='mx-modal-button mx-modal--primary' @click="Fn_Alert.confirm(conf.id)"><span>{{conf.t1}}</span></button>
        </div>
      </div>
    </div>

    <!-- SmallMessage功能 -->
    <div :class="['mx-smallAlert',conf.hide?'hide':'',conf.type]" 
         v-for="(conf,i) in List_SmallMessage" :key="conf.id" :id="conf.id"
         :style="{marginTop:((List_SmallMessage.length-i)*4)+'px',
                  transform:'scale('+(0.9+0.1*(i/(List_SmallMessage.length-1))).toFixed(2)+') !important'}">
      <div class="mx-msg__content" >
        <div class="mx-msg__App">
          <div class="mx-msg__App--name">
            {{conf.app.name}}
          </div>
          <div class="mx-msg__time">
            刚刚{{0.5+0.5*(i/(List_SmallMessage.length-1))}}
          </div>
        </div>
        <div class="mx-msg__text">
          <span class="mx-msg--title">
            {{conf.title}}
          </span>
          <span class="mx-msg--text">
            {{conf.text}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
</style>
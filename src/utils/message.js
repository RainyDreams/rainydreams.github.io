/*
  * @param {E} 
*/


import { ref,watch,} from "vue"
import '../styles/message.scss' 
export var MessageForApp = function(){

}
/**
 * 
 * @param {Number} time1 
 * @param {Number} time2 
 * @param {"string" | "time"} type 
 * @returns
 */
export function getFriendlyTime(time1, time2 = new Date(), type = "string") {
  const now = time2;
  const inputTime1 = time1;
  const inputTime2 = time2;
  const diff = now - inputTime1;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (type === "string") {
    if (hours === 0) {
      if (minutes === 0) {
        return `${seconds}秒前`;
      } else if (minutes === 1) {
        return `${minutes}分钟前`;
      } else {
        return `${minutes}分钟前`;
      }
    } else if (hours === 1) {
      return `一小时前`;
    } else {
      return `${hours}小时前`;
    }
  } else {
    return diff;
  }
}
 

export function addMessage (key, newVal) {
  //注意categoryNum为要监听的属性，实际开发中请自行修改
  if (key == 'msg') {
    // 创建一个StorageEvent事件
    var newStorageEvent = document.createEvent('StorageEvent');
    function addMessage (k, val) {
      if(typeof val != 'object') throw new Error('Not AN OBJECT')
      let old = JSON.parse(sessionStorage.getItem(k) || '[]');
      old.push(val);
      let arr = []
      old.forEach(item=>{
        if(item.read != true) arr.push(item)
      })
      sessionStorage.setItem(k, JSON.stringify(old));
      sessionStorage.setItem('msg_unread',arr.length);
      newStorageEvent.initStorageEvent('changeMessage', false, false, k, null, val, null, null); 
      window.dispatchEvent(newStorageEvent)
    }
    return new Promise((resolve, reject) => {
      if (newVal) {
        addMessage(key, newVal)
        resolve(newVal)
      } else {
        reject(new Error('Not AN OBJECT'))
      }
    });
  }
}

/**
 * @description 消息处理函数
 * @export
 * @class MessageService
 */
export class MessageService {
  constructor(refr) {
    this.alertList = []
    this.msgList = []
    this.ref=refr
    this.AppInfo = {
      'MAI-fieUv67UBYHow':{
        name:'系统提示',
      }
    }
    this.ref.value = {
      msgType:'console',
      value:'helloworld'
    }
    let _this = this

    class Scheduler {
      constructor(max){
        this.max = max;this.count = 0 ;this.queue = new Array();
      }
      async add(promiseCreator){
        if(this.count>=this.max) await new Promise((resolve,reject)=>this.queue.push(resolve));   
        this.count ++;let res = await promiseCreator();this.count--;
        if(this.queue.length){this.queue.shift()();}
        return res;
      }
    }
    const doTask = fn => new Promise(resolve => {
      _this.ref.value=fn;
      resolve()
    })
    this.scheduler = new Scheduler(1);
    this.addTask = (prFn,order) => {
      _this.scheduler.add(() => doTask(prFn)).then(()=>console.log(order))
    }
  }
  getRandomString(len) {
    len = len || 32;
    var $chars = 'AmSTnpN5Rz2EcdCKMXZabersYDW4xtwPBFGy36fhHJQijk78'; 
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    } return pwd;
  }
  getAppInfo(AppId){
    return this.AppInfo[AppId]?this.AppInfo[AppId]:this.AppInfo['MAI-fieUv67UBYHow']
  }
  async alert (obj){
    const defaultConfig = {
      title:"提示", 
      body:"无内容", 
      boolien:false, 
      t1:"确认",
      t2:"取消"
    }
    var conf = {
      ...defaultConfig,
      ...obj
    }
    var id = 'MD'+this.getRandomString(11)
    this.addTask({
      msgType:'alert',
      value:{
        ...conf,
        id
      },
      msgId:id
    })
  }
  



  async smallAlert(obj){
    var ObjDefault = {
      appId:'MAI-fieUv67UBYHow',
      type:'default',
      title:"提示",
      text:'无提示内容',
      fn:()=>{}
    }
    let conf = {...ObjDefault,...obj}
    let app = this.getAppInfo(conf.appId)
    console.log('[MxMessageService]',{
      type:'smallAlert',
      conf
    })
    let id = 'MM'+this.getRandomString(11)
    this.ref.value={
      msgType:'small',
      value:{
        ...conf,
        app,
        id
      }
    }
  }
}

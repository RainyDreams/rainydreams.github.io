import { ref,watch } from "vue"
import '../styles/message.scss' 

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
      delay:4000,
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

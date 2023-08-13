import { ref,watch } from "vue"

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
    
    // console.log(refr.value,this)
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
    // console.log(this.data)
    this.ref.value={
      msgType:'alert',
      value:{
        ...conf,
        id
      }
    }
  }
  



  async smallAlert(obj){
    var ObjDefault = {
      appId:'MAI-fieUv67UBYHow',
      type:'default',
      time:4000,
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

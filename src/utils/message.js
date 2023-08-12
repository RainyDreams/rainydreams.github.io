
export class MessageService {
  constructor(ref) {
    this.dom = ref.value
    this.smList = {}
    console.log(ref.value,this)
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
    var Id = 'MD'+this.getRandomString(11)
    this.dom.innerHTML+=`<div class='mx-modal__wrapper' id='${Id}'><div class='mx-modal__container ${conf.boolien?'onlytrue':''}' style='margin-top: 15vh;'><div class='mx-modal__header'>\  <span class='mx-modal__title'>${conf.title}</span><button class='mx-modal__headerbtn'><i class='mx-modal__close iconfont icon-close'></i></button></div><div class='mx-modal__body'>\  <div>${conf.body}<textarea class='mx-alert-content' style='opacity:0;width:1px;height:1px;'>${conf.body}</textarea></div></div><div class='mx-modal__footer'>\  <button class='mx-modal-button mx-modal--primary'><span>${conf.t1}</span></button></div></div></div>`;
    if (conf.boolien != false) {
      document.querySelector(`#${Id} .mx-modal__footer`).innerHTML=`<button class='mx-modal-button mx-modal--default'><span>${conf.t2}</span></button>`+document.querySelector(`#${Id} .mx-modal__footer`).innerHTML;
      document.querySelector(`#${Id} .mx-modal__footer .mx-modal--default`).addEventListener("click", ()=>{
        document.querySelector(`#${Id}`).remove()
        return 'cancel'
      })
    }
    document.querySelector(`#${Id} .mx-modal__footer .mx-modal--primary`).addEventListener("click", ()=>{
      document.querySelector(`#${Id}`).remove()
      return 'confirm'
    })
  }
  async smallAlert(obj){
    var ObjDefault = {
      ref:null,
      text:'无提示内容',
      type:'default',
      time:3000,
      fn:()=>{}
    }
    let conf = {...ObjDefault,...obj}
    if(!conf.ref) throw 'error'
    let msgId = 'MM'+this.getRandomString(11)
    if(conf.ref.value.attributes.mxId){
      let lastId = this.smList[conf.ref.value.attributes.mxId]
      if(lastId){
      document.querySelector('[mxId='+lastId+"]").remove()
      this.smList[conf.ref.value.attributes.mxId] = null
    }
    } else {
      conf.ref.value.setAttribute('mxid','MD'+this.getRandomString(11))
      this.smList[conf.ref.value.attributes.mxId] = null
    }
    var newNode = document.createElement("div");
    newNode.className = 'MsmallAlert _'+conf.type
    newNode.innerHTML = `${conf.text}`
    newNode.setAttribute('mxId',msgId)
    // debugger;
    this.smList[conf.ref.value.attributes.mxId] = msgId
    var referenceNode = conf.ref.value;
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    let _this = this
    setTimeout(()=>{
      conf.fn()
      if(document.querySelector('[mxId='+msgId+"]")){
        document.querySelector('[mxId='+msgId+"]").remove()
        _this.smList[conf.ref.value.attributes.mxId] = null
      }
      Promise.resolve()
    },conf.time)
  }
}

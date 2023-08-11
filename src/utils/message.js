

export async function setupMessageService(ref){
  var alert=
    async (title, body, boolien, t1, t2)=>{
      function getRandomString(len) {
        len = len || 32;
        var $chars = 'AmSTnpN5Rz2EcdCKMXZabersYDW4xtwPBFGy36fhHJQijk78'; 
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
          pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        } return pwd;
      }
      var ref = document.querySelector('.MessageService')
      var ttv = ""
      if (!boolien) {ttv = "onlytrue";}
      if (!title) {title = "提示";console.warn(" Error: NO title of Alert")}
      if (!body) {body = "提示框";console.warn(" Error: NO body of Alert")}
      if (!t1) {t1 = "确认"}
      if (!t2) {t2 = "取消"}
      var str = 'M'+getRandomString(11)
      ref.innerHTML+=`<div class='mx-modal__wrapper' id='${str}'><div class='mx-modal__container ${ttv}' style='margin-top: 15vh;'><div class='mx-modal__header'>\  <span class='mx-modal__title'>${title}</span><button class='mx-modal__headerbtn'><i class='mx-modal__close iconfont icon-close'></i></button></div><div class='mx-modal__body'>\  <div>${body}<textarea class='mx-alert-content' style='opacity:0;width:1px;height:1px;'>${body}</textarea></div></div><div class='mx-modal__footer'>\  <button class='mx-modal-button mx-modal--primary'><span>${t1}</span></button></div></div></div>`;
      if (boolien != false) {document.querySelector(`#${str} .mx-modal__footer`).innerHTML=`<button class='mx-modal-button mx-modal--default'><span>${t2}</span></button>`+document.querySelector(`#${str} .mx-modal__footer`).innerHTML}
      document.querySelector(`#${str} .mx-modal__footer .mx-modal--primary`).addEventListener("click", ()=>{
        document.querySelector(`#${str}`).remove()
        return 'confirm'
      })
      document.querySelector(`#${str} .mx-modal__footer .mx-modal--default`).addEventListener("click", ()=>{
        document.querySelector(`#${str}`).remove()
        return 'cancel'
      })
      // $(document).on("click", `body #${str} .mx-modal__footer .mx-modal--default`, ()=>{
      //   $(`body #${str}`).fadeOut(200);
      //   setTimeout(()=>{ $(`body #${str}`).remove() }, 400);
      //   if (e2) e2()
      // })
    }
  
  return alert;
}
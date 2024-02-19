/*!
 * 赤子英金加密算法（原创）
 *
*/
"use strict";
const Version = '0.1.2'
const CREAT_TIME = 1691845375123;
const CHANGSHU = 52
async function digestMessage(message) { 
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}
function DoPass(e){
  let  DECODE_STR = ''
  for (let i=0; i < e.length; i++) {
    let tmp = (e.substring(i, i+1).codePointAt() +CHANGSHU)
    DECODE_STR += ""+String.fromCharCode( tmp )
  }
  return DECODE_STR
}
import { weBtoa, weAtob } from './jwt';
function creatMessage(i,e,t,...args){
  return {
    type:['default','warning','fail','break'][i],
    title:'提示 - 加密解密',
    text:e,
    time:t,
    ...args
  }
}
function Encode64(str) {
  return weBtoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
      }));
}
function Decode64(str) {
  return decodeURIComponent(weAtob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function ra(count){
  var str="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9";
  var arr=str.split(",");var rand="";
  for(var i=0;i<count;i++){
    rand+=arr[Math.floor(Math.random()*36)];
  }
  return rand;
}
const PUBLIC_KEY = await digestMessage('PS'+(new Date().getTime() - CREAT_TIME)%(3*60*1000)+'wd');
// const PUBLIC_KEY_DECODE = 'p?:@5{,lHm=>Afy)\u007f<z;j2\x828'
const PUBLIC_KEY_DECODE = DoPass(PUBLIC_KEY )

export async function encode(text,password = PUBLIC_KEY){
  // TEXT
  try{
    if(typeof text !== 'string') return 0x0003;
    if(typeof password !== 'string' || !password) password = PUBLIC_KEY;
    console.log(password)
    let STRING_META_OBJECT = new String(text)
    let STRING_META_ARRAY = new Array([null])
    for(let i in STRING_META_OBJECT){
      let STRING_ = STRING_META_OBJECT[i]
      let HEX_ = STRING_.codePointAt()
      STRING_META_ARRAY.push(HEX_)
    }
    let STRING_JSONSTR = JSON.stringify(STRING_META_ARRAY)
    let HASH_
    try{
       HASH_ = await digestMessage(STRING_JSONSTR)
    }catch(e){
      return creatMessage(2,'请在安全域使用本功能<a href="https://rainydreams.github.io/RainyDreams/#/tools/code">https://rainydreams.github.io/RainyDreams/#/tools/code</a>')
    }
    // console.log(HASH_)
    STRING_META_ARRAY[0]=HASH_.substring(0,4);  
    // 加密逻辑
    // 谨慎修改逻辑，容易死循环
    let ENCODE_ = HASH_.substring(1,7);
    // if(password.length%2 !==0) return creatMessage(2,'请输入偶数位')
    for (let i=0,p=0; i < (
      /*(password.length>STRING_META_ARRAY.length-1)?
      password.length:*/STRING_META_ARRAY.length-1
    ); i+=1,p+=1) {
      ENCODE_+="_"+(STRING_META_ARRAY[i+1]+password.substring(p, p+1)
      .codePointAt()+ CHANGSHU ).toString(16);
      if(p==password.length-1){
        p=-1
      }
    }
    ENCODE_+='_'+HASH_.substring(HASH_.length-7,HASH_.length-1)
    console.log(Decode64(Encode64(ENCODE_)))
    let output = {
      v:Version,
      C:ENCODE_,
      T:new Date().getTime(),
      k:ra(5)
    }
    return Encode64(ENCODE_).replaceAll('=','_');
  }catch(e){
    return creatMessage(2,e)
  }
};


export async function decode(text,password){
  try{
    text = Decode64(text.replaceAll('_','='));
    console.log(text,password)
    if(typeof password !== 'string' || !password) password = PUBLIC_KEY_DECODE;else password = DoPass(password);
    let _BEGIN = text.substring(0,6)
    let _END = text.substring(text.length-6,text.length)
    let MAIN = text.substring(7,text.length-7)
    let ARR = MAIN.split('_')
    let DECODE_STR = ''
    let HASH_ARR = new Array([null])
    for (let i=0,p=0; i < ARR.length; i++,p++) {
      let tmp = parseInt(ARR[i],16)-(password.substring(p, p+1).codePointAt())
      DECODE_STR += ""+String.fromCharCode( tmp )
      if(p==password.length-1){
        p=-1
      }
      HASH_ARR.push(tmp)
    }
    let HASH_ = await digestMessage(JSON.stringify(HASH_ARR))
    console.log(DECODE_STR,HASH_)
    let BEGIN = HASH_.substring(1,7)
    let END = HASH_.substring(HASH_.length-7,HASH_.length-1)
    console.log(BEGIN,_BEGIN,END,_END)

    // debugger;
    if(BEGIN==_BEGIN && END == _END){
      return DECODE_STR
    } else {
      return creatMessage(2,'解密失败！'+JSON.stringify([BEGIN,_BEGIN,END,_END])+'<br/>'+
      `${text},${HASH_}`
      +'<br/><a href="#/tools/codeHelp">查看可能原因</a>',40000,()=>{
      });
    }
  }catch(e){
    return creatMessage(2,'解密函数运行失败！'+new String(e));
  }
  return creatMessage(2,'解析失败！未知原因？');
}

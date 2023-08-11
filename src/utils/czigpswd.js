/*
 * 赤子英金加密算法（原创）
 *
!*/
'use strict'
const Version = '0.1.2'
async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}
const PUBLIC_KEY = 'h728-s$d@e569^q!w4r3b*z0';
const PUBLIC_KEY_DECODE = 'p?:@5{,lHm=>Afy)\u007f<z;j2\x828'
import { weBtoa, weAtob } from './jwt';
function creatMessage(i,e){
  return {
    type:['default','warn','error','break'][i],
    message:e
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
function DoPass(e){
  let  DECODE_STR = ''
  for (let i=0; i < e.length; i++) {
    let tmp = (e.substring(i, i+1).codePointAt() +8)
    DECODE_STR += ""+String.fromCharCode( tmp )
  }
  return DECODE_STR
}


export async function encode(text,password){
  // TEXT
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
  let HASH_ = await digestMessage(STRING_JSONSTR)
  // console.log(HASH_)
  STRING_META_ARRAY[0]=HASH_.substring(0,4);  
  // 加密逻辑
  // 谨慎修改逻辑，容易死循环
  let ENCODE_ = HASH_.substring(1,7);
  if(password.length%2 !==0) return console.warn('请输入偶数位')
  for (let i=0,p=0; i < (
    /*(password.length>STRING_META_ARRAY.length-1)?
    password.length:*/STRING_META_ARRAY.length-1
  ); i+=1,p+=1) {
    ENCODE_+="_"+(STRING_META_ARRAY[i+1]+password.substring(p, p+1)
    .codePointAt()+8).toString(16);
    if(p==password.length-1){
      p=-1
    }
  }
  ENCODE_+='_'+HASH_.substring(HASH_.length-7,HASH_.length-1)
  console.log(Decode64(Encode64(ENCODE_)))
  return Encode64(ENCODE_).replaceAll('=','_');
};


export async function decode(text,password){
  try{
  text = Decode64(text.replaceAll('_','='));
  console.log(text,password)
  if(typeof password !== 'string' || !password) password = PUBLIC_KEY_DECODE;password = DoPass(password);
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
  if(BEGIN==_BEGIN && END == _END){
    return DECODE_STR
  }}catch(e){
    return creatMessage(2,'解密函数运行失败！'+new String(e));
  }
  return creatMessage(2,'解析失败！，可能原因：密码错误或加密文本损坏');
}

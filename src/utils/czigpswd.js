/*!
 * 赤子英金加密算法（原创）
 *
*/

import {BigNumber} from 'bignumber.js';
"use strict";
const Version = '4.2'
// const CREAT_TIME = 1691845375123;
// const CHANGSHU = 52
// async function digestMessage(message) { 
//   const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
//   const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
//   const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
//   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
//   return hashHex;
// }
// function DoPass(e){
//   let  DECODE_STR = ''
//   for (let i=0; i < e.length; i++) {
//     let tmp = (e.substring(i, i+1).codePointAt() +CHANGSHU)
//     DECODE_STR += ""+String.fromCharCode( tmp )
//   }
//   return DECODE_STR
// }
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

function modInverse(a, m) {
  let m0 = m;
  let x0 = 0;
  let x1 = 1;

  if (m == 1) {
      return 0;
  }

  while (a > 1) {
      // q 是商，t 是临时变量
      let q = Math.floor(a / m);
      let t = m;

      m = a % m;
      a = t;
      t = x0;

      x0 = x1 - q * x0;
      x1 = t;
  }

  if (x1 < 0) {
      x1 += m0;
  }

  return x1;
}

// 十进制转换为三十二进制
function decimalToBase32(decimal) {
  return decimal.toString(32);
}

// 三十二进制转换为十进制
function base32ToDecimal(base32) {
  return parseInt(base32, 32);
}

// 快速幂取模运算
function modularExponentiation (a, b, mod) {
  let ans = 1;
  let base = a % mod;
  while (b > 0) {
      if (b & 1) {
          ans = ans * base % mod;
      }
      base = base * base % mod;
      b >>= 1;
  }
  return ans;
}


const PUBLIC_KEY = 'CHIZIINGIINJIAMISUANFALIYONGRSACHENGZUOCRSASUANFA'

// const PUBLIC_KEY_DECODE = 'p?:@5{,lHm=>Afy)\u007f<z;j2\x828'
// const PUBLIC_KEY_DECODE = DoPass(PUBLIC_KEY )

let r = [29,41,47,53,59,71,83,89]
const t = (Math.floor((Date.now() - 1645271400000) / (3 * 60 * 1000)) - 350759)%8;
const k_0 = r[t] // Math.round(ENCODE_KEY[0] - 335500);
const k_1 = 23 // Math.round(ENCODE_KEY[1] - 335500);

console.log(k_0,k_1)
// const k_2 = Math.round(ENCODE_KEY[2] - 335500);
// const k_3 = Math.round(ENCODE_KEY[3] - 335500);
const N = k_0 * k_1;
const phiN = (k_0 - 1) * (k_1 - 1);
const E = 3;
const D = modInverse(E, phiN);

export async function encode(text,password = PUBLIC_KEY){
  // TEXT
  try{
    if(typeof text !== 'string') return 0x0003;
    if(typeof password !== 'string' || !password) password = PUBLIC_KEY;
    const STRING_META_OBJECT = Encode64(text)
    // 随机生成 P Q R S
    //根据时间，随机生成P,Q,R,S,3分钟后过期
    // 四质数 RSA 


    // console.log(phiN,D)

    const ENCODE_RESULT = new Array()
    for(let i in STRING_META_OBJECT){
      let STRING_ = STRING_META_OBJECT[i]
      let HEX_ = STRING_.codePointAt()
      // console.log(Math.pow(HEX_,E)%N,HEX_)
      ENCODE_RESULT.push(decimalToBase32( modularExponentiation(HEX_,E,N)))
    }

    // console.log(JSON.stringify(ENCODE_RESULT))
    

    let output = {
      v:Version,
      C:JSON.stringify(ENCODE_RESULT),
      T:new Date().getTime(),
      N:N,
    }
    return Encode64(JSON.stringify(output)).replaceAll('=','_');
  }catch(e){
    return creatMessage(2,e)
  }
};


export async function decode(text,password){
  try{
    const DECODE_STR = Decode64(text.replaceAll('_','='));
    // console.log(text,password);
    if(typeof password !== 'string' || !password) password = PUBLIC_KEY;

    

    // console.log(phiN,D)

    const DECODE_META = JSON.parse(DECODE_STR);
    const C = JSON.parse(DECODE_META.C);
    let DECODE_RESULT = ''
    for(let i in C){
      let y = modularExponentiation(base32ToDecimal(C[i]), D, N)
      // console.log(y,String.fromCharCode(y));
      // console.log(base32ToDecimal(C[i]))
      // // console.log(Math.pow(base32ToDecimal(C[i]),D)%N)
      // console.log(new BigNumber(base32ToDecimal(C[i])+'').pow(D+''))
      DECODE_RESULT += String.fromCharCode(y) + ''
    }
    // console.log(DECODE_RESULT)

    return Decode64(DECODE_RESULT);
    
    // if(typeof password !== 'string' || !password) password = PUBLIC_KEY_DECODE;else password = DoPass(password);
    // let _BEGIN = text.substring(0,6)
    // let _END = text.substring(text.length-6,text.length)
    // let MAIN = text.substring(7,text.length-7)
    // let ARR = MAIN.split('_')
    // let DECODE_STR = ''
    // let HASH_ARR = new Array([null])
    // for (let i=0,p=0; i < ARR.length; i++,p++) {
    //   let tmp = parseInt(ARR[i],16)-(password.substring(p, p+1).codePointAt())
    //   DECODE_STR += ""+String.fromCharCode( tmp )
    //   if(p==password.length-1){
    //     p=-1
    //   }
    //   HASH_ARR.push(tmp)
    // }
    // let HASH_ = await digestMessage(JSON.stringify(HASH_ARR))
    // console.log(DECODE_STR,HASH_)
    // let BEGIN = HASH_.substring(1,7)
    // let END = HASH_.substring(HASH_.length-7,HASH_.length-1)
    // console.log(BEGIN,_BEGIN,END,_END)

    // // debugger;
    // if(BEGIN==_BEGIN && END == _END){
    //   return DECODE_STR
    // } else {
    //   return creatMessage(2,'解密失败！'+JSON.stringify([BEGIN,_BEGIN,END,_END])+'<br/>'+
    //   `${text},${HASH_}`
    //   +'<br/><a href="#/tools/codeHelp">查看可能原因</a>',40000,()=>{
    //   });
    // }
  }catch(e){
    // throw e;

    console.error(new Error(e))
    return creatMessage(2,'解密函数运行失败！'+new String(e));
  }
  return creatMessage(2,'解析失败！未知原因？');
}

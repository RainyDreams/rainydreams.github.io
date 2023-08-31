/**
 * @param {Number} time1 
 * @param {Number} time2 
 * @param {"string" | "time"} type 
 * @returns
 */
export function getFriendlyTime(time1, time2 = new Date(), type = "string") {

  const now = new Date(time2).getTime();
  const inputTime1 = new Date(time1).getTime();
  // const inputTime2 = new Date(time2).getTime();
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


export function getRandomString(len) {
  len = len || 32;
  var $chars = 'AmSTnpN5Rz2EcdCKMXZabersYDW4xtwPBFGy36fhHJQijk78'; 
  var maxPos = $chars.length;
  var pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  } return pwd;
}

/*! 
 * mx.js v0.2.0.007
 * Author Zhangxinyue etc.
 * (c) 2020-2022 ChiziIngiin Information Technology Research Institute.
 * Released under the MIT License.
 */
/* This product uses part of the code in my previous open source project MX.JS */
const VersionNumber = "0.2.0.007";
console.log(`%cmx.js%cv${VersionNumber}`,`color: #fff; background-color:#007bff;padding:2px 6px;padding-right:3px;border-top-left-radius:5px;border-bottom-left-radius:5px;`, `color: #fff; background-color:#00a826;padding:2px 6px;padding-left:3px;border-top-right-radius:5px;border-bottom-right-radius:5px;`);
console.log('Copyright 2023 Zhang.')
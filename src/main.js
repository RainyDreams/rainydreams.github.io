

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './style.css';
import './styles/message.scss';
const app = createApp(App);
 
app.use(router);
app.mount('#app');

/*! 
 * mx.js v0.2.0.007
 * Author Zhangxinyue etc.
 * (c) 2020-2022 ChiziIngiin Information Technology Research Institute.
 * Released under the MIT License.
 */
/* 本品使用了本人以前的开源项目MX.JS中的部分代码 */
const VersionNumber = "0.2.0.007";
console.log(`%cmx.js%cv${VersionNumber}`,`color: #fff; background-color:#007bff;padding:2px 6px;padding-right:3px;border-top-left-radius:5px;border-bottom-left-radius:5px;`, `color: #fff; background-color:#00a826;padding:2px 6px;padding-left:3px;border-top-right-radius:5px;border-bottom-right-radius:5px;`);
console.log('Copyright 2023 Zhang.')
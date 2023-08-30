import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import {install} from '@icon-park/vue-next/es/all';
import { addMessage } from './utils/message.js';

import 'nprogress/nprogress.css'
import './style.css';
import './styles/page.scss';
import './styles/document.scss';

// import './styles/message.scss';
const app = createApp(App);
install(app); 
app.use(router);
app.mount('#app');
app.config.globalProperties.$addMessage = addMessage


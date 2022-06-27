import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/all.css';  
import { getMsgReCall } from './socketApi'
NodePlayer.load(()=>{
    createApp(App).use(store).use(router).mount('#app')
})
window.addEventListener('onmessageWs',getMsgReCall)  //全局註冊wbSocket的訊息監聽
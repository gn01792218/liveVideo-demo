
const url = process.env.VUE_APP_API_HOST;  //後端網址寫在.env檔案中；分為線上環境和測試環境//8199 由keypir控制//8200 可以自由測的
//建立webSocket實例
let Socket:WebSocket | null
let setIntervalWesocketPush:number
//websocket方法區
//連接上後會發送心跳
const onopenWs = ()=>{
    console.log("連線建立成功")
}
//連接失敗會重新連線
const onerrorWs = ()=>{
    Socket?.close()
    clearInterval(setIntervalWesocketPush)
    if(Socket?.readyState !== 3){ //stateCode 3 為連接已關閉，或沒有連接成功
        Socket = null
        createSocket()
        console.log("重連成功")
    }
}
//監聽關閉
const oncloseWs = () => {
    clearInterval(setIntervalWesocketPush)
    alert('websocket已斷開....正在嘗試重連')
    if (Socket?.readyState !== 2) {  //readyState 2 = 連接正在關閉
      Socket = null
      createSocket()
    }
  }

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
 const connecting = (message:any) => {
    setTimeout(() => {
      if (Socket?.readyState === 0) { //readyState 0 表示正在連接中，那就繼續connecting
        connecting(message)
      } else {
        Socket?.send(message)
        
      }
    }, 1000)
  }
//暴露的方法區
/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
 export const sendWSPush = (message:any) => { //第二個參數，依據不同的lookupType包裝proto
    if (Socket !== null && Socket.readyState === 3) {
      Socket.close()
      createSocket()
    } else if (Socket?.readyState === 1) { //已經連接，且可以通訊
      Socket.send(message)
    } else if (Socket?.readyState === 0) { //正在連接中
      connecting(message)
      console.log("readyState:"+Socket.readyState,"準備傳送:"+message);
    }
  }

  export const onmessageWs=(msg:any)=>{
    if(msg){ 
        //註冊一個自訂義的onmessageWs事件，帶header給第二層去處理要裝到哪個Vuex裡面
      window.dispatchEvent(new CustomEvent('onmessageWs',{
          detail:{
            msg
          }
        }))
    }
}
  /**发送心跳
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 5500, ping = 'ping') => {
    clearInterval(setIntervalWesocketPush)
    Socket?.send(ping)
    setIntervalWesocketPush = setInterval(() => {
      Socket?.send(ping)
    }, time)
  }
  //建立ws
export const createSocket =()=>{  //使用createSocket的方法，會自動開啟監聽連線、訊息等等方法
    console.log("創建伺服器")
    Socket && Socket.close()
    if(!Socket){
        Socket = new WebSocket(url);
        Socket.binaryType='arraybuffer' //切記將binaryType設成二進制
        Socket.onopen = onopenWs  //會打開心跳
        Socket.onmessage = onmessageWs    
        Socket.onerror = onerrorWs
        Socket.onclose = oncloseWs
        console.log("建立websocket連線");
    }
}




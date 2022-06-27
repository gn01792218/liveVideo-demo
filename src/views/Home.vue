<template>
  <div class="home">
    <Video />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent,ref, reactive, onMounted, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute,useRouter } from 'vue-router'
import {createSocket} from '../webSocket'
import {sendLogin , sendTableJoinCall ,} from '../socketApi'
import Video from '@/components/Video.vue'; // @ is an alias to /src
export default defineComponent({
  components:{
    Video,
  },
    setup(){
    //   const store = useStore()
    //   const vuexUserToken = computed(()=>{
    //     return store.state.auth.userToken
    //   })
    //   const tables = reactive(computed(()=>{  //桌號uuid
    //     return store.state.lobby.LobbyInfo
    //   }))
    //   const tableRecall = reactive(computed(()=>{  //桌號uuid
    //     return store.state.table.TableJoinRecall
    //   }))
    //   watch(tables,()=>{
    //     tableJoin ()
    //   })
    //   watch(tableRecall,()=>{
    //     console.log(tableRecall.value)
    //   })
    //   const tableNum = ref('A')
    //   function tableJoin (){
    //    switch(tableNum.value){
    //     case 'A':
    //       for(let i = 0 ; i<tables.value.tables.length ; i++){
    //         if(tables.value.tables[i].name=="A桌"){
    //           sendTableJoinCall({
    //             uri:"TableJoinCall",
    //             uuid:tables.value.tables[i].uuid
    //           })
    //           console.log(`請求${tableNum.value}桌`,"桌號:"+tables.value.tables[i].name,"uuid:"+tables.value.tables[i].uuid,"Loby資訊:",tables.value)
    //           break
    //         }
    //       }
    //       break
    //     case 'B':
    //        for(let i = 0 ; i<tables.value.tables.length ; i++){
    //         if(tables.value.tables[i].name=="B桌"){
    //           sendTableJoinCall({
    //             uri:"TableJoinCall",
    //             uuid:tables.value.tables[i].uuid
    //           })
    //           console.log(`請求${tableNum.value}桌`,"桌號:"+tables.value.tables[i].name,"uuid:"+tables.value.tables[i].uuid,"Loby資訊:",tables.value)
    //           break
    //         }
    //       }
    //   }
    // }
    //   //創建連線(再次返回大廳時使用者token已經存在，就不會再創server)
    //   if(vuexUserToken.value==""){ 
    //     createSocket()
    //     sendLogin({
    //       uri: "LoginCall",
    //       token: 'DEV_TOKEN',
    //     })
    //   }
      return{
          //data
      }
    }
})
</script>

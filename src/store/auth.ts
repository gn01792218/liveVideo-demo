
export const state = {
  userToken:"",
  LoginRecall: {},
  UserInfo:{},
  userWalletFomate:0,
};
export const actions = {}

export const mutations = {
  setUserToken(state:any,payload:string){
    state.userToken = payload
  },
  LoginRecall(state:any, payload:any) { //接收wbSocket的訊息
    state.LoginRecall=payload
    // console.log("vuex-auth資料更新",state.LoginRecall)
  },
  UserInfo(state:any, payload:any) { //接收wbSocket的訊息
    state.UserInfo=payload
    state.userWalletFomate = payload.user.wallet.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    // console.log("vuex-auth資料更新",state.UserInfo)
  },
};
export const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
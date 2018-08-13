import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    alert:{
      msg:""
    },
    isLogin:false,
    userMsg:""
  },
  mutations:{
    changeAlert(state,data){
      state.alert.msg = data;
      setTimeout(()=>{
        state.alert.msg = null
      },2000)
    },
    changeLogin(state,data){
      state.isLogin = data
    },
    getUser(state,data){
      state.userMsg = data
    }
  },
  actions:{
    getChangeAlert({commit},products){
      commit('changeAlert',products)
    },
    changeLonginState({commit},products){
      commit('changeLogin',products)
    },
    getUserMsg({commit},products){
      commit('getUser',products)
    }
  }
})

export default store

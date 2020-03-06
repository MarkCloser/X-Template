import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions: any = {}
const state = {
    user_name: localStorage.getItem('user_name'),
    isLogin: localStorage.getItem('isLogin')
}

const getters = {
    userName: (state: any) => state.user_name,
    isLogin: (state: any) => state.isLogin
}

const mutations = {
    handleUserName: (state: any, user_name: any) => {
        state.user_name = user_name
        localStorage.setItem('user_name', user_name)  
    },
    isLogin(state: any,status: any){
      state.isLogin = status;
      localStorage.setItem('isLogin', status)
    },
    LoginOut (state: any){
      localStorage.clear();
      state.user_name = '';
      state.isLogin = false;
    },
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store
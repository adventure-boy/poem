import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    saveUserInfo(context,data){
        context.commit("USER_INFO",data)
    }
}

const mutations = {
    USER_INFO(state,data){
        state.user = data
    },
    initRoutes(state,parms){
        state.routes=parms
    }
}

const state = {
    user:"",
    routes:[]
}

const store = new Vuex.Store({
    actions,
    mutations,
    state
})

export default store
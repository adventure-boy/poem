import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    saveUserInfo(context,data){
        context.commit(USER_INFO,data)
    }
}

const mutations = {
    USER_INFO(state,data){
        state.user = data
    }
}

const state = {
    user:""
}

const store = new Vuex.Store({
    actions,
    mutations,
    state
})

export default store
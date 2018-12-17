import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, // only allow modifying state through a mutation
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken (state, token) {
            state.token = token
            state.isUserLoggedIn = !!token
            // if (token) {
            //     state.isUserLoggedIn = true
            // } else {
            //     state.isUserLoggedIn = false
            // }
        },
        setUser (state, user) {
            state.user = user
        }
    },
    actions: {
        setToken ({ commit }, token) {
            commit('setToken', token) // call the mutation called setToken and pass it token
        },
        setUser ({ commit }, user) {
            commit('setUser', user)
        }
    }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, // only allow modifying state through a mutation
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        selectedMessage: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            state.isUserLoggedIn = !!token
        },
        setUser(state, user) {
            state.user = user
        },
        setAppEnv(state, env) {
            state.env = env
        },
        setBaseURL(state, url) {
            state.baseURL = url
        },
        setSelectedMessage(state, message) {
            state.selectedMessage = message
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token) // call the mutation called setToken and pass it token
        },
        setUser({ commit }, user) {
            commit('setUser', user)
        },
        setAppEnv({ commit }, env) {
            commit('setAppEnv', env)
        },
        setBaseURL({ commit }, url) {
            commit('setBaseURL', url)
        },
        setSelectedMessage({ commit }, message) {
            commit('setSelectedMessage', message)
        }
    }
})

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
        },
        toggleMessageStar(state) {
            state.selectedMessage.stared = !state.selectedMessage.stared
        },
        updateMessageNotes(state, notes) {
            state.selectedMessage.notes = notes
        },
        logOut(state) {
            state.token = null
            state.isUserLoggedIn = false
            state.user = null
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token) // call the mutation called setToken and pass it token
            localStorage.setItem('userToken', token)
        },
        setUser({ commit }, user) {
            commit('setUser', user)
            localStorage.setItem('user', user)
        },
        setAppEnv({ commit }, env) {
            commit('setAppEnv', env)
        },
        setBaseURL({ commit }, url) {
            commit('setBaseURL', url)
        },
        setSelectedMessage({ commit }, message) {
            commit('setSelectedMessage', message)
        },
        toggleMessageStar({ commit }) {
            commit('toggleMessageStar')
        },
        updateMessageNotes({ commit }, notes) {
            commit('updateMessageNotes', notes)
        },
        logOut({ commit }) {
            localStorage.removeItem('userToken')
            localStorage.removeItem('user')
            commit('logOut')
        }
    }
})

import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { sync } from 'vuex-router-sync'
import './registerServiceWorker'

Vue.config.productionTip = false

sync(store, router)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

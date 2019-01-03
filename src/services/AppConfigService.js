import store from '@/store/store'

export default {
    setAppEnv() {
        var hostname = window.location.hostname
        store.dispatch('setBaseURL', hostname)
        if (hostname === 'localhost') {
            store.dispatch('setAppEnv', 'dev')
        } else {
            store.dispatch('setAppEnv', 'prod')
        }
    }
}

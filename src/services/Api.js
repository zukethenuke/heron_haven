import axios from 'axios'
import store from '@/store/store'

export default () => {
    var env = store.state.env
    var apiURL = store.state.baseURL
    var baseURL = env === 'dev' ? `http://${apiURL}:8081` : `https://${apiURL}`
    return axios.create({
        baseURL
    })
}

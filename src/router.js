import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Map from './views/Map.vue'
import Join from './views/Join.vue'
import SignIn from './views/SignIn.vue'
import Admin from './views/Admin.vue'
import OurHistory from './views/OurHistory'

// import store from './store/store'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/map',
            name: 'map',
            component: Map
        },
        {
            path: '/join',
            name: 'join',
            component: Join
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
            // beforeEnter: (to, from, next) => {
            //     if (store.state.isUserLoggedIn) {
            //         next()
            //     } else {
            //         next('/')
            //     }
            // }
        },
        {
            path: '/history',
            name: 'history',
            component: OurHistory
        }
    ]
})

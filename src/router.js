import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Map from './views/Map.vue'
import Join from './views/Join.vue'
import SignIn from './views/SignIn.vue'
import About from './views/About.vue'
import OurHistory from './views/OurHistory'
import Volunteer from './views/Volunteer'
import ContactUs from './views/ContactUs'
import FieldTrip from './views/FieldTrip/FieldTrip'

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
            component: About
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
            component: () => import(/* webpackChunkName: "admin" */ './views/Admin/Admin.vue'),
            children: [
                {
                    path: 'members',
                    name: 'members',
                    component: () => import(/* webpackChunkName: "admin" */ './views/Admin/components/Members')
                }, {
                    path: 'messages',
                    name: 'messages',
                    component: () => import(/* webpackChunkName: "admin" */ './views/Admin/components/Messages')
                }, {
                    path: 'field_trip_requests',
                    name: 'fieldTripRequests',
                    component: () => import(/* webpackChunkName: "admin" */ './views/Admin/components/FieldTripRequests')
                }
            ]
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
        }, {
            path: '/volunteer',
            name: 'volunteer',
            component: Volunteer
        }, {
            path: '/contact_us',
            name: 'contactUs',
            component: ContactUs
        }, {
            path: '/field_trip',
            name: 'fieldTrip',
            component: FieldTrip
        }
    ]
})

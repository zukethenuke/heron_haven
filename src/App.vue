<template>
    <v-app>
        <app-header></app-header>

        <v-content fluid>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
    name: 'App',
    components: {
        AppHeader
    },
    mounted() {
        try {
            let userToken = localStorage.getItem('userToken')
            let user = localStorage.getItem('user')
            if (userToken) this.$store.dispatch('setToken', userToken)
            if (user) this.$store.dispatch('setUser', user)
        } catch {
            this.$store.dispatch('logOut')
        }
    }
}
</script>

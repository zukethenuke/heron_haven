<template>
    <div>
        <v-flex xs10 md6 offset-xs1 offset-md3>
            <div class="white elevation-2 mt-4">
                <v-toolbar flat dense class="brown lighten-2" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field
                        type="email"
                        v-model="email"
                        label="E-mail"
                        data-vv-name="email"
                        required
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        v-model="password"
                        label="Password"
                        data-vv-name="password"
                        required
                        loading>
                        <v-progress-linear
                            v-if="true"
                            slot="progress"
                            :value="progress"
                            :color="color"
                            height="7"
                        ></v-progress-linear>
                    </v-text-field>
                    <v-alert
                        v-if="error"
                        :value="true"
                        color="error"
                        v-html="error"
                    ></v-alert>
                    <v-btn class="brown lighten-2" dark @click="register">Register</v-btn>
                </div>
            </div>
        </v-flex>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data () {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    computed: {
        progress () {
            return Math.min(100, this.password.length * 10)
        },
        color () {
            return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
        }
    },
    methods: {
        async register () {
            try {
                let response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$router.push('/')
            } catch (error) {
                this.error = error.response.data.error
                this.$store.dispatch('logOut')
            }
        }
    }
}
</script>

<style scoped>
</style>

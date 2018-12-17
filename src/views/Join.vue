<template>
    <v-layout row>
        <v-flex xs10 md6 offset-xs1 offset-md3>
            <div class="white elevation-2 mt-4">
                <v-toolbar flat dense class="brown lighten-2" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field
                        v-validate="'required|email'"
                        type="email"
                        v-model="email"
                        label="E-mail"
                        data-vv-name="email"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-validate="'required|password'"
                        type="password"
                        v-model="password"
                        label="Password"
                        data-vv-name="password"
                        required
                    ></v-text-field>
                    <div class="error" v-html="error"></div>
                    <br>
                    <v-btn class="brown lighten-2" dark @click="register">Register</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
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
    methods: {
        async register () {
            try {
                await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style scoped>
</style>

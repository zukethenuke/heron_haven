<template>
    <div class="white elevation-2 contact-us">
        <v-toolbar flat dense class="brown lighten-2" dark>
            <v-toolbar-title>{{contactFormData.title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
             <v-text-field
                type="text"
                v-model="form.firstName"
                label="First Name"
                data-vv-name="firstName"
                required
            ></v-text-field>
             <v-text-field
                type="text"
                v-model="form.lastName"
                label="Last Name"
                data-vv-name="lastName"
                required
            ></v-text-field>
            <v-text-field
                type="email"
                v-model="form.email"
                label="E-mail"
                data-vv-name="email"
                required
            ></v-text-field>
            <v-text-field
                type="text"
                v-model="form.phoneNumber"
                label="Phone Number"
                data-vv-name="phoneNumber"
            ></v-text-field>
            <v-select
                v-if="contactFormData.options"
                v-model="form.selectedOption"
                :items="contactFormData.options"
                :label="contactFormData.optionsLabel"
            ></v-select>
            <v-textarea
                v-model="form.message"
                auto-grow
                box
                label="Message"
            ></v-textarea>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="brown lighten-2" dark @click="submit">Send</v-btn>
        </div>
        <v-snackbar
            v-model="snackbar.active"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
            :top="true"
        >{{ snackbar.text }}</v-snackbar>
    </div>
</template>

<script>
import ContactUsService from '@/services/ContactUsService';

export default {
    props: ['contactFormData'],
    data() {
        return {
            error: '',
            form: { type: this.contactFormData.type },
            snackbar: {
                active: false,
                color: '',
                timeout: 6000,
                text: ''
            }
        }
    },
    methods: {
        async submit() {
            try{
                let response = await ContactUsService.submit(this.form);
                this.form = { type: this.contactFormData.type }
                this.snackbar.text = `Thank you!  Message successfully sent.`
                this.snackbar.color = 'success'
                this.snackbar.active = true

            } catch(error) {
                this.error = error.response.data.error
                this.snackbar.text = 'Error sending message!  Please call us.'
                this.snackbar.color = 'error'
                this.snackbar.active = true
                throw new Error(error)
            }
        }
    }
}
</script>

<style scoped>
.contact-us {
    margin: 20px;
}
</style>

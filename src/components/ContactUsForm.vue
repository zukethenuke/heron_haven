<template>
    <div class="white elevation-2 contact-us">
        <v-toolbar flat dense class="brown lighten-2" dark>
            <v-toolbar-title>{{contactFormData.title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
             <v-text-field
                type="form.firstName"
                v-model="form.firstName"
                label="First Name"
                data-vv-name="firstName"
                required
            ></v-text-field>
             <v-text-field
                type="form.lastName"
                v-model="form.lastName"
                label="Last Name"
                data-vv-name="lastName"
                required
            ></v-text-field>
            <v-text-field
                type="form.email"
                v-model="form.email"
                label="E-mail"
                data-vv-name="email"
                required
            ></v-text-field>
            <v-text-field
                type="form.phoneNumber"
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
            <v-btn class="brown lighten-2" dark @click="send">Send</v-btn>
        </div>
    </div>
</template>

<script>
import ContactUsService from '@/services/ContactUsService';

export default {
    props: ['contactFormData'],
    data() {
        return {
            error: '',
            form: {
                type: this.contactFormData.type
            }
        }
    },
    methods: {
        send() {
            this.form.flagged = true;
            console.log('submitting', this.form);
            ContactUsService.submit(this.form);
        }
    }
}
</script>

<style scoped>
.contact-us {
    margin: 20px;
}
</style>

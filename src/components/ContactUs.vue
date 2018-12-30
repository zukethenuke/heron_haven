<template>
    <div class="white elevation-2 contact-us">
        <v-toolbar flat dense class="brown lighten-2" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
             <v-text-field
                type="firstName"
                v-model="firstName"
                label="First Name"
                data-vv-name="firstName"
                required
            ></v-text-field>
             <v-text-field
                type="lastName"
                v-model="lastName"
                label="Last Name"
                data-vv-name="lastName"
                required
            ></v-text-field>
            <v-text-field
                type="email"
                v-model="email"
                label="E-mail"
                data-vv-name="email"
                required
            ></v-text-field>
            <v-select
                v-model="selectedVolunteerType"
                :items="volunteerTypes"
                label="Select volunteer type"
            ></v-select>
            <v-textarea
                v-model="message"
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
export default {
    props: ['title'],
    data() {
        return {
            error: '',
            firstName: '',
            lastName: '',
            email: '',
            selectedVolunteerType: '',
            volunteerTypes: [
                { text: 'Education' },
                { text: 'Grounds Keeping' },
                { text: 'Social Media' },
                { text: 'Building Staff' },
                { text: 'Volunteer Coordinator' }
            ],
            message: ''
        }
    },
    methods: {
        send: () => console.log('submitting')
    }
}
</script>

<style scoped>
.contact-us {
    margin: 20px;
}
</style>

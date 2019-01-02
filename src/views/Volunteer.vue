<template>
    <div>
        <v-flex xs12 md8 l6 offset-md2>
            <contact-us :contactFormData="contactFormData"></contact-us>
        </v-flex>
    </div>
</template>

<script>
import ContactUs from '@/components/ContactUs';

export default {
    name: 'volunteer',
    components: {
        ContactUs
    },
    data() {
        return {
            contactFormData: {
                title: "Request information about volunteering",
                type: 'volunteer',
                options: [
                    { text: 'Education' },
                    { text: 'Grounds Keeping' },
                    { text: 'Social Media' },
                    { text: 'Building Staff' },
                    { text: 'Volunteer Coordinator' }
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>

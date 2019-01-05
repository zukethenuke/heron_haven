<template>
    <div>
        <v-flex xs12 md8 l6 offset-md2>
            <contact-us-form :contactFormData="contactFormData"></contact-us-form>
        </v-flex>
    </div>
</template>

<script>
import ContactUsForm from '@/components/ContactUsForm';

export default {
    name: 'volunteer',
    components: {
        ContactUsForm
    },
    data() {
        return {
            contactFormData: {
                title: "Request information about volunteering",
                type: 'volunteer',
                optionsLabel: 'How would you like to volunteer',
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

<template>
    <div>
        <v-flex xs12 md8 offset-md2>
            <contact-us-form :contactFormData="contactFormData"></contact-us-form>
        </v-flex>
    </div>
</template>

<script>
import ContactUsForm from '@/components/ContactUsForm';

export default {
    name: 'contactUs',
    components: {
        ContactUsForm
    },
    data() {
        return {
            contactFormData: {
                title: 'Contact Us',
                type: 'general'
            }
        }
    }
    
}
</script>

<style scoped>

</style>

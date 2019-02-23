<template>
    <div>
        <!-- <v-text-field
            type="file"
            id="file"
            ref="file"
            label="2nd Saturday Flyer"
            @change="handleFileUpload"
            required
        ></v-text-field> -->
        <form action="" enctype=multipart/form-data>
            <input type="file" id="file"/>
        </form>
        <v-btn @click="submit">
            Update Flyer
        </v-btn>

        <v-snackbar
            v-model="snackbar.active"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
            :top="true"
        >{{ snackbar.text }}</v-snackbar>
    </div>
</template>

<script>
import SecondSaturdayService from '@/services/SecondSaturdayService'

export default {
    data() {
        return {
            file: null,
            snackbar: {
                active: false,
                color: '',
                timeout: 8000,
                text: ''
            }
        }
    },
    methods: {
        async submit() {
            try {
                let formData = new FormData()
                this.file = document.querySelector('#file').files[0]
                formData.append('file', this.file)
                console.log('formData', formData)
                let response = await SecondSaturdayService.submit(formData)
                this.snackbar.text = '2nd Saturday flyer updated.'
                this.snackbar.color = 'success'
                this.snackbar.active = true
            } catch(error) {
                this.snackbar.text = 'Error updating 2nd Saturday flyer.'
                this.snackbar.color = 'error'
                this.snackbar.active = true
                throw new Error(error)
            }
        },
    }
}
</script>

<style scoped>

</style>

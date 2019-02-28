<template>
    <div class="container">
        <v-form enctype="multipart/form-data">
            <v-text-field
                type="file"
                id="file"
                label="2nd Saturday Flyer"
                required
            ></v-text-field>
            <v-btn @click="submit">
                Update Flyer
            </v-btn>
            <!-- <button type="submit" value="submit">submit</button> -->
        </v-form>

        <v-snackbar
            v-model="snackbar.active"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
            :top="true"
        >{{ snackbar.text }}</v-snackbar>

        <embed class="pdf-container" v-if="url" :src="url" type="application/pdf"/>
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
            },
            currentFlyer: null,
            url: null
        }
    },
    async mounted() {
        this.url = await SecondSaturdayService.getUrl();
    },
    methods: {
        async submit() {
            try {
                let formData = new FormData()
                this.file = document.querySelector('#file').files[0]
                formData.append('file', this.file)

                let response = await SecondSaturdayService.submit(formData)
                this.snackbar.text = '2nd Saturday flyer updated.'
                this.snackbar.color = 'success'
                this.snackbar.active = true

                this.url = await SecondSaturdayService.getUrl()
            } catch(error) {
                this.snackbar.text = 'Error updating 2nd Saturday flyer.'
                this.snackbar.color = 'error'
                this.snackbar.active = true
                throw new Error(error)
            }
        },
    }
}

// async function getCurrentFlyer() {
//     let flyer = await SecondSaturdayService.get()
//     const file = new Blob([flyer], { type: 'application/pdf' })
//     let url = window.URL.createObjectURL(file)
//     return url
// }
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
.pdf-container {
    width: 100%;
    height: 70vh;
}
</style>

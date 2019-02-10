<template>
    <v-container elevation-4 fluid>
        <v-layout row wrap>
            <v-flex xs12 class="info-title">Field Trip Request Form</v-flex>
            <v-flex xs12>We are so glad that your group is considering visiting Heron Haven. Our volunteer staff wants
                to protect the wetlands and to insure your group has a safe and wonderful educational
                experience. <strong>We ask that NO MORE than 30 people including adults visit during one trip.</strong>
                There should always be an adult present and actively engaged with the group on at least a 1-10
                adult to children ratio. Please bring drinking water and if you wish, apply sunscreen and bug
                spray before entering Heron Haven. There are restrooms available in the nature center building.
                We invite you to become a member, join our e-mail list and share any comments about your visit. 
            </v-flex>
            <v-flex row wrap>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="text"
                            label="Contact / Person in charge"
                            v-model="form.personInCharge"
                            prepend-icon="person"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="email"
                            label="Email"
                            v-model="form.email"
                            prepend-icon="email"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="text"
                            label="Work Phone"
                            v-model="form.workPhone"
                            prepend-icon="phone"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="text"
                            label="Home / Cell Phone"
                            v-model="form.personalPhone"
                            prepend-icon="phone"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-text-field
                    type="text"
                    label="Assistant"
                    v-model="form.assistant"
                    prepend-icon="person"
                ></v-text-field>
                <v-text-field
                    type="text"
                    label="Group / Organization Name"
                    v-model="form.groupName"
                    prepend-icon="group"
                    required
                ></v-text-field>

                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="date"
                            label="What day would you like to visit?"
                            v-model="form.dateOfVisit"
                            prepend-icon="today"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-text-field
                            type="text"
                            label="Start Time"
                            v-model="form.startTime"
                            prepend-icon="access_time"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-text-field
                            type="text"
                            label="End Time"
                            v-model="form.endTime"
                            prepend-icon="access_time"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="number"
                            label="How many are attending?"
                            v-model="form.numberAttending"
                            prepend-icon="people"
                            required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-text-field
                            type="text"
                            label="Ages"
                            v-model="form.groupAges"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-textarea
                    type="text"
                    box
                    auto-grow
                    label="Requested program/ subject / activity or would you prefer a Nature Walk"
                    v-model="form.requestedActivity"
                    prepend-icon="message"
                    required
                ></v-textarea>
                <v-textarea
                    type="text"
                    box
                    auto-grow
                    label="Any additional information or questions?"
                    v-model="form.additionalInfo"
                    prepend-icon="message"
                    required
                ></v-textarea>
                <v-btn class="brown lighten-2" dark @click="submit">Send</v-btn>
                <v-divider></v-divider>
                <br>
                <p>
                    In case of inclement weather and you wish to cancel your trip please let us know ASAP. Or
                    activities can be provided in the nature center building. 
                </p>
                <p>
                    If you or your children have any questions or concerns prior to our visit, please let us know. We
                    look forward to seeing you in the Wetlands at Heron Haven!
                </p>
            </v-flex>
        </v-layout>
         <v-snackbar
            v-model="snackbar.active"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
            :top="true"
        >{{ snackbar.text }}</v-snackbar>
    </v-container>
</template>

<script>
import FieldTripRequestService from '@/services/FieldTripRequestService'
export default {
    data() {
        return {
            form: {},
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
            try {
                let response = await FieldTripRequestService.submit(this.form)
                this.form = {}
                this.snackbar.text = `Thank you!  Message successfully sent.`
                this.snackbar.color = 'success'
                this.snackbar.active = true
            } catch(error) {
                console.log('error', error)
                this.error = error.response.data.error
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
.info-title {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    color: rgb(116, 116, 116);
    margin: 0 0 20px 0;
}

</style>

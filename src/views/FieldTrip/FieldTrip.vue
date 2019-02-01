<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <v-flex xs12 lg6 elevation-4>
                <field-trip-request-form></field-trip-request-form>
            </v-flex>
            <v-flex xs12 lg6 elevation-4>
                <field-trip-request-form></field-trip-request-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import FieldTripRequestForm from './components/FieldTripRequestForm'
import FIeldTripRequestInfo from './components/FIeldTripRequestInfo'

export default {
    components: {
        FieldTripRequestForm,
        FIeldTripRequestInfo
    }
}
</script>

<style scoped>

</style>

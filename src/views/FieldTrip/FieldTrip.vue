<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <v-flex xs12 lg6>
                <field-trip-request-info></field-trip-request-info>
            </v-flex>
            <v-flex xs12 lg6>
                <field-trip-request-form></field-trip-request-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import FieldTripRequestForm from './components/FieldTripRequestForm'
import FieldTripRequestInfo from './components/FIeldTripRequestInfo'

export default {
    components: {
        FieldTripRequestForm,
        FieldTripRequestInfo
    }
}
</script>

<style scoped>

</style>

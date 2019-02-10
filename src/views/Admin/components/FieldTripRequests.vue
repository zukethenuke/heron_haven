<template>
    <div class="requests">
        <field-trip-request-list></field-trip-request-list>
        <field-trip-request-view></field-trip-request-view>
    </div>
</template>

<script>
import FieldTripRequestList from './FieldTripRequestsList'
import FieldTripRequestView from './FieldTripRequestsView'

export default {
    name: 'fieldTripRequests',
    components: {
        FieldTripRequestList,
        FieldTripRequestView
    }
}
</script>

<style scoped>
.requests {
    display: flex;
}
</style>
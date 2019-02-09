<template>
    <div>
        <v-flex class="card">
            <v-toolbar color="brown lighten-3" dark>
                <v-icon>email</v-icon>
                <v-toolbar-title>Field Trip Inbox</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
            </v-toolbar>

            <v-list two-line>
                <template v-for="(request, index) in requests">
                    <v-list-tile
                        :key="request.id"
                        ripple
                        :class="{ selected: request === selectedRequest }"
                        @click="viewRequest(request)">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ request.groupName }}</v-list-tile-title>
                                <v-list-tile-sub-title class="test--primary">
                                    {{ request.personInCharge }}
                                </v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ request.email }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                    </v-list-tile>

                    <v-divider
                        v-if="index + 1 < requests.length"
                        :key="request.createdAt">
                    </v-divider>
                </template>
            </v-list>
        </v-flex>
    </div>
</template>

<script>
import FieldTripRequestService from '@/services/FieldTripRequestService'
import store from '@/store/store'

export default {
    data() {
        return {
            requests: null,
            selectedRequest: null
        }
    },
    async mounted() {
        this.requests = await FieldTripRequestService.getAll()
    },
    methods: {
        viewRequest(request) {
            console.log(request)
        },
        formatDate: function(timeStamp) {
            return new Date(timeStamp).toDateString()
        }
    }
}
</script>

<style scoped>
.card {
    width: 30vw;
    margin: 20px;
}

</style>

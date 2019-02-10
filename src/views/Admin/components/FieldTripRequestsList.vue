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

            <v-list three-line>
                <template v-for="(request, index) in requests">
                    <v-list-tile
                        :key="request.id"
                        ripple
                        :class="{ selected: request.id === selectedRequest.id }"
                        @click="viewRequest(request)">
                            <v-list-tile-content>
                                <v-list-tile-title><v-icon class="title-icon">group</v-icon>{{ request.groupName }}</v-list-tile-title>
                                <v-list-tile-sub-title class="test--primary">
                                    <v-icon>person</v-icon>
                                    {{ request.personInCharge }}
                                </v-list-tile-sub-title>
                                <v-list-tile-sub-title>
                                    <v-icon>today</v-icon>
                                    {{ formatDate(request.dateOfVisit) }}
                                </v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ formatDate(request.createdAt) }}</v-list-tile-action-text>
                                <div></div>
                                <v-icon
                                    v-if="!request.stared"
                                    color="grey lighten-1">star_border
                                </v-icon>

                                <v-icon
                                    v-else
                                    color="yellow darken-2">star
                                </v-icon>
                            </v-list-tile-action>
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
            selectedRequest: store.state.selectedFieldTripRequest || { id: -1 }
        }
    },
    async mounted() {
        this.requests = await FieldTripRequestService.getAll()
    },
    methods: {
        viewRequest(request) {
            this.selectedRequest = request
            store.dispatch('setSelectedFieldTripRequest', request)
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

.title-icon {
    margin-right: 10px;
}

.selected {
    background: rgb(220, 220, 220);
}

</style>

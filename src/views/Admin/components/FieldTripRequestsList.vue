<template>
    <div>
        <v-flex class="card">
            <v-toolbar color="brown lighten-3" dark>
                <v-icon class="header-icon">email</v-icon>
                <v-flex xs4>
                    <v-select
                        :items="mailBoxes"
                        v-model="selectedMailbox"
                    ></v-select>
                </v-flex>
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn> -->
            </v-toolbar>

            <v-list three-line>
                <template v-for="(request, index) in filteredRequests">
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
            requests: [],
            selectedRequest: store.state.selectedFieldTripRequest || { id: -1 },
            mailBoxes: ['Inbox', 'Archive', 'Trash'],
            selectedMailbox: 'Inbox'
        }
    },
    async mounted() {
        this.requests = await FieldTripRequestService.getAll()
    },
    computed: {
        filteredRequests() {
            if (this.selectedMailbox === 'Inbox') return this.requests.filter(r => !r.archived && !r.deleted)
            else if (this.selectedMailbox === 'Archive') return this.requests.filter(r => r.archived)
            else if (this.selectedMailbox === 'Trash') return this.requests.filter(r => r.deleted)
            else return this.requests
        }
    },
    methods: {
        viewRequest(request) {
            this.selectedRequest = request
            store.dispatch('setSelectedFieldTripRequest', request)
        },
        formatDate: function(timeStamp) {
            return new Date(timeStamp).toDateString()
        }
    },
    watch: {
        selectedMailbox: () => clearSelectedRequest()
    }
}

function clearSelectedRequest() {
    return store.dispatch('setSelectedFieldTripRequest', null)
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

.header-icon {
    margin-right: 10px;
}
</style>

<template>
    <div>
        <v-flex>
            <v-card class="card" v-if="!selectedRequest">
                <v-toolbar color="brown lighten-3" dark>
                    <v-icon>comment</v-icon>
                </v-toolbar>
            </v-card>

            <v-card class="card" v-if="selectedRequest">
                <v-toolbar color="brown lighten-3" dark>
                    <v-icon>comment</v-icon>
                    <v-toolbar-title>{{ selectedRequest.groupName }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <div class="buttons">
                        <v-icon
                            class="right"
                            v-if="!selectedRequest.stared"
                            @click="toggleStar"
                            color="white">star
                        </v-icon>

                        <v-icon
                            class="right"
                            v-else
                            @click="toggleStar"
                            color="yellow darken-2">star
                        </v-icon>

                        <v-tooltip v-if="!selectedRequest.archived" bottom>
                            <v-icon
                                slot="activator"
                                class="right"
                                @click="toggleArchived"
                            >archive
                            </v-icon>
                            <span>Archive request</span>
                        </v-tooltip>
                        <v-tooltip v-if="selectedRequest.archived" bottom>
                            <v-icon
                                slot="activator"
                                class="right"
                                @click="toggleArchived"
                            >unarchive
                            </v-icon>
                            <span>Return request to Inbox</span>
                        </v-tooltip>
                        <v-tooltip v-if="!selectedRequest.deleted" bottom>
                            <v-icon
                                slot="activator"
                                @click="toggleDelete"
                            >delete</v-icon>
                            <span>Delete request</span>
                        </v-tooltip>
                        <v-tooltip v-if="selectedRequest.deleted" bottom>
                            <v-icon
                                slot="activator"
                                @click="toggleDelete"
                            >delete_forever</v-icon>
                            <span>Return request to Inbox</span>
                        </v-tooltip>
                    </div>
                    
                </v-toolbar>
                <v-list three-line>
                    <v-list-tile>
                        <v-list-tile-content>
                            <div class="header">
                                <div>
                                    <v-list-tile-title><v-icon class="header-icon">person</v-icon> {{ selectedRequest.firstName }} {{  selectedRequest.personInCharge }}</v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">people</v-icon> {{ selectedRequest.groupName }}</v-list-tile-title>
                                </div>
                                <div>
                                    <v-list-tile-title><v-icon class="header-icon">email</v-icon> {{ selectedRequest.email }}</v-list-tile-title>
                                    <v-list-tile-title>
                                        <v-icon class="header-icon">phone</v-icon>
                                        Work: {{ selectedRequest.workPhone }}
                                    </v-list-tile-title>
                                    <v-list-tile-title>
                                        <v-icon class="header-icon">phone</v-icon>
                                        Personal: {{ selectedRequest.personalPhone }}
                                    </v-list-tile-title>

                                </div>
                            </div>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>
                            <div class="header">
                                <div>
                                    <v-list-tile-title><v-icon class="header-icon">person</v-icon>Assistant: {{ selectedRequest.assistant }}</v-list-tile-title>
                                    <v-list-tile-title>Group Size: {{ selectedRequest.numberAttending }}</v-list-tile-title>
                                    <v-list-tile-title>Ages: {{ selectedRequest.groupAges }}</v-list-tile-title>
                                </div>
                                <div>
                                    <v-list-tile-title><v-icon class="header-icon">today</v-icon> {{ formatedDate(selectedRequest.dateOfVisit) }}</v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">schedule</v-icon>Start: {{ selectedRequest.startTime }}</v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">schedule</v-icon>End: {{ selectedRequest.endTime }}</v-list-tile-title>
                                </div>
                            </div>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
                <v-card-title><v-icon class="header-icon">comment</v-icon>Requested Program / Activiy</v-card-title>
                <v-card-title>{{ selectedRequest.requestedActivity }}</v-card-title>
                <v-divider></v-divider>
                <v-card-title><v-icon class="header-icon">comment</v-icon>Addition Information / Questions</v-card-title>
                <v-card-title>{{ selectedRequest.additionalInfo }}</v-card-title>
                <v-divider></v-divider>
                <v-card-title>
                    <v-textarea
                        loading="true"
                        prepend-icon="assignment"
                        :append-icon="savingIcon"
                        label="Heron Haven's Notes"
                        auto-grow
                        :value="selectedRequest.notes"
                        @input="debounceInput"
                    ></v-textarea>
                </v-card-title>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import store from '@/store/store'
import FieldTripRequestService from '@/services/FieldTripRequestService'
const debounce = require('debounce')

export default {
    computed: {
        selectedRequest() {
            return store.state.selectedFieldTripRequest
        },
        savingIcon() {
            return this.savingRequest ? 'backup' : ''
        },
    },
    data() {
        return {
            savingRequest: false
        }
    },
    methods: {
        formatedDate(date) {
            return new Date(date).toDateString()
        },
        toggleStar() {
            let stared = !this.selectedRequest.stared
            updateRequest(this.selectedRequest, { stared })
            return store.dispatch('toggleFieldTripRequestStar')
        },
        async toggleDelete() {
            let deleted = !this.selectedRequest.deleted
            await updateRequest(this.selectedRequest, { deleted, archived: false })
            if (this.selectedRequest.archived) store.dispatch('toggleFieldTripRequestArchived') // prevent deleted and archived both
            return store.dispatch('toggleFieldTripRequestDeleted')
                .then(clearSelectedRequest())
        },
        async toggleArchived() {
            let archived = !this.selectedRequest.archived
            await updateRequest(this.selectedRequest, { archived, deleted: false })
            if (this.selectedRequest.deleted) store.dispatch('toggleFieldTripRequestDeleted') // prevent deleted and archived both
            return store.dispatch('toggleFieldTripRequestArchived')
                .then(clearSelectedRequest())
        },
        debounceInput: debounce(function debounce(notes) {
            let id = this.selectedRequest.id
            updateRequest(this.selectedRequest, { notes }, this)
        }, 1000)
    }    
}

function updateRequest(request, data, context) {
    if (context) context.savingRequest = true;
    return FieldTripRequestService.update(request.id, data)
        .then(res => {
            store.dispatch('updateFieldTripRequestNotes', res.data.notes)
            setTimeout(() => {
                if (context) context.savingRequest = false;
            }, 2000);
        })
}

function clearSelectedRequest() {
    return store.dispatch('setSelectedFieldTripRequest', null)
}
</script>

<style scoped>
.card {
    width: 40vw;
    margin: 20px;
}
.header-icon {
    margin-right: 10px;
}
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.right {
    float: right;
    margin-left: 10px;
}
</style>

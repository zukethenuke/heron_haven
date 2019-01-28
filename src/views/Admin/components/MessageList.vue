<template>
    <div>
        <v-flex>
            <v-card class="card">
                <v-toolbar color="brown lighten-3" dark>
                    <v-icon>email</v-icon>
                    <v-toolbar-title>Inbox</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-list two-line>
                    <template v-for="(message, index) in messages">
                        <v-list-tile
                            :key="message.id"
                            ripple
                            class="helloo"
                            :class="{ selected: message === selectedMessage }"
                            @click="viewMessage(message)">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ message.firstName }} {{ message.lastName }}</v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">
                                    {{ message.email }}
                                </v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ message.message }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ formatDate(message.createdAt) }}</v-list-tile-action-text>
                                <v-icon
                                    v-if="!message.stared"
                                    color="grey lighten-1">star_border
                                </v-icon>

                                <v-icon
                                    v-else
                                    color="yellow darken-2">star
                                </v-icon>
                            </v-list-tile-action>

                        </v-list-tile>

                        <v-divider
                            v-if="index + 1 < messages.length"
                            :key="message.createdAt">
                        </v-divider>

                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import ContactUsService from '@/services/ContactUsService';
import store from '@/store/store'

export default {
    data() {
        return {
            messages: null,
            selectedMessage: null
        }
    },
    async mounted() {
        this.messages = await ContactUsService.getAll()
    },
    methods: {
        viewMessage(message) {
            this.selectedMessage = message
            setMessageStyle(message, this.messages)
            store.dispatch('setSelectedMessage', message)
        },
        formatDate: function(timeStamp) {
            return new Date(timeStamp).toDateString()
        }
    }
}

function setMessageStyle(message, messages) {
    messages.forEach(m => { delete m.selected })
    return message.selected = true
}
</script>

<style scoped>
.card {
    width: 30vw;
    margin: 20px;
}

.selected {
    background: rgb(235, 235, 235);
}
</style>

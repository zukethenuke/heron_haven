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

                <v-list three-line>
                    <template v-for="(message, index) in messages">
                        <v-list-tile
                            :key="message.id"
                            ripple
                            :class="{ selected: message.id === selectedMessage.id }"
                            @click="viewMessage(message)">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <v-icon>person</v-icon>
                                    {{ message.firstName }} {{ message.lastName }}
                                </v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">
                                    <v-icon>email</v-icon>
                                    {{ message.email }}
                                </v-list-tile-sub-title>
                                <v-list-tile-sub-title class="message">
                                    {{ message.message }}
                                </v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ formatDate(message.createdAt) }}</v-list-tile-action-text>
                                <div><v-icon class="header-icon">info</v-icon> {{ message.type }}</div>
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
            selectedMessage: store.state.selectedMessage || { id: -1 }
        }
    },
    async mounted() {
        this.messages = await ContactUsService.getAll()
    },
    methods: {
        viewMessage(message) {
            this.selectedMessage = message
            store.dispatch('setSelectedMessage', message)
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

.selected {
    background: rgb(220, 220, 220);
}

.message {
    height: 20px;
}
</style>

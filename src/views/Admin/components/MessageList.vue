<template>
    <v-layout row>
        <v-flex>
            <v-card class="card">
                <v-toolbar color="brown lighten-3" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
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
                                    @click="message.stared = 1"
                                    color="grey lighten-1">star_border
                                </v-icon>

                                <v-icon
                                    v-else
                                    @click="message.stared = 0"
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
    </v-layout>
</template>

<script>
import ContactUsService from '@/services/ContactUsService';

export default {
    data() {
        return {
            messages: null
        }
    },
    async mounted() {
        this.messages = await ContactUsService.getAll()
    },
    methods: {
        viewMessage(message) {
            console.log('message', message)
        },
        formatDate: function(timeStamp) {
            return new Date(timeStamp).toDateString()
        },
        toggleStar: function(message) {
            message.stared = !message.stared
        }
    }
}
</script>

<style scoped>
.card {
    width: 400px;
    margin: 20px;
}
</style>

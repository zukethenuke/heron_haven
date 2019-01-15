<template>
    <v-layout row>
        <v-flex xs8 md12>
            <v-card>
                <v-toolbar color="pink" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Inbox</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-list two-line>
                    <template v-for="message in messages">
                        <v-list-tile
                            :key="message.id"
                            ripple
                            @click="viewMessage(message)">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ message.firstName }} {{ message.lastName }}</v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">
                                    {{ message.email }}
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
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
        }
    }
}
</script>

<style scoped>

</style>

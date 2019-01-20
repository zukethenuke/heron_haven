<template>
    <div>
        <v-flex>
            <v-card class="card">
                <v-toolbar color="brown lighten-3" dark>
                    <v-icon>comment</v-icon>
                    <v-toolbar-title>Message</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list v-if="selectedMessage" three-line>
                    <v-list-tile>
                        <v-list-tile-content>
                            <div class="header">
                                <div>
                                    <v-list-tile-title><v-icon class="header-icon">email</v-icon> {{ selectedMessage.email }}</v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">person</v-icon> {{ selectedMessage.firstName }} {{  selectedMessage.lastName }}</v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">schedule</v-icon> {{ formatedDate(selectedMessage.createdAt) }}</v-list-tile-title>
                                </div>
                                <div>
                                    <v-icon
                                        v-if="!selectedMessage.stared"
                                        @click="toggleStar"
                                        color="grey lighten-1">star_border
                                    </v-icon>

                                    <v-icon
                                        v-else
                                        @click="toggleStar"
                                        color="yellow darken-2">star
                                    </v-icon>
                                    <v-list-tile-title><v-icon class="header-icon">info</v-icon> {{ selectedMessage.type }}</v-list-tile-title>
                                </div>
                            </div>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-sub-title>{{ selectedMessage.message }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import store from '@/store/store'

export default {
    computed: {
        selectedMessage() {
            return store.state.selectedMessage
        }
    },
    methods: {
        formatedDate(date) {
            return new Date(date).toDateString()
        },
        toggleStar() {
            return this.selectedMessage.stared = !this.selectedMessage.stared
        }
    }
    
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
</style>

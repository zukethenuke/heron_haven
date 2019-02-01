<template>
    <div>
        <v-flex>
            <v-card class="card" v-if="!selectedMessage">
                <v-toolbar color="brown lighten-3" dark>
                    <v-icon>comment</v-icon>
                </v-toolbar>
            </v-card>
            <v-card class="card" v-if="selectedMessage">
                <v-toolbar color="brown lighten-3" dark>
                    <v-icon>comment</v-icon>
                    <v-toolbar-title>{{ selectedMessage.firstName }} {{  selectedMessage.lastName }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list three-line>
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
                                        class="right"
                                        v-if="!selectedMessage.stared"
                                        @click="toggleStar"
                                        color="grey lighten-1">star_border
                                    </v-icon>

                                    <v-icon
                                        class="right"
                                        v-else
                                        @click="toggleStar"
                                        color="yellow darken-2">star
                                    </v-icon>
                                    <v-list-tile-title></v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">info</v-icon> {{ selectedMessage.type }}</v-list-tile-title>
                                </div>
                            </div>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                </v-list>
                <v-card-title><v-icon class="header-icon">comment</v-icon> Message</v-card-title>
                <v-card-title>{{ selectedMessage.message }}</v-card-title>
                <v-divider></v-divider>
                <v-card-title>
                    <v-textarea
                        loading="true"
                        :append-icon="savingIcon"
                        label="Heron Haven's Notes"
                        auto-grow
                        :value="selectedMessage.notes"
                        @input="debounceInput"
                    ></v-textarea>
                </v-card-title>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import store from '@/store/store'
import ContactUsService from '@/services/ContactUsService';
const debounce = require('debounce')

export default {
    computed: {
        selectedMessage() {
            return store.state.selectedMessage
        },
        savingIcon() {
            return this.savingMessage ? 'backup' : '';
        }
    },
    data() {
        return {
            savingMessage: false
        }
    },
    methods: {
        formatedDate(date) {
            return new Date(date).toDateString()
        },
        toggleStar() {
            let stared = !this.selectedMessage.stared
            updateMessage(this.selectedMessage, { stared })
            return store.dispatch('toggleMessageStar')
        },
        debounceInput: debounce(function debounce(notes) {
            let id = this.selectedMessage.id
            updateMessage(this.selectedMessage, { notes }, this)
        }, 1000)
    }
}

function updateMessage(message, data, context) {
    if (context) context.savingMessage = true;
    return ContactUsService.update(message.id, data)
        .then((res) => {
            store.dispatch('updateMessageNotes', res.data.notes)
            setTimeout(() => {
                if (context) context.savingMessage = false;
            }, 2000);
        })
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
    /* display: flex; */
    /* justify-content: flex-end; */
    float: right;
}
</style>

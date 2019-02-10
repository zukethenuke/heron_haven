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
                    <div class="buttons">
                        <v-icon
                            class="right"
                            v-if="!selectedMessage.stared"
                            @click="toggleStar"
                            color="white">star
                        </v-icon>

                        <v-icon
                            class="right"
                            v-else
                            @click="toggleStar"
                            color="yellow darken-2">star
                        </v-icon>
                        <v-tooltip v-if="!selectedMessage.archived" bottom>
                            <v-icon
                                slot="activator"
                                class="right"
                                @click="toggleArchived"
                            >archive
                            </v-icon>
                            <span>Archive Message</span>
                        </v-tooltip>
                        <v-tooltip v-if="selectedMessage.archived" bottom>
                            <v-icon
                                slot="activator"
                                class="right"
                                @click="toggleArchived"
                            >unarchive
                            </v-icon>
                            <span>Return message to Inbox</span>
                        </v-tooltip>
                    </div>
                </v-toolbar>
                <v-list three-line>
                    <v-list-tile>
                        <v-list-tile-content>
                            <div class="header">
                                <div>
                                    <v-list-tile-title><v-icon class="header-icon">email</v-icon> {{ selectedMessage.email }}</v-list-tile-title>
                                    <v-list-tile-title><v-icon class="header-icon">person</v-icon> {{ selectedMessage.firstName }} {{  selectedMessage.lastName }}</v-list-tile-title>
                                    <v-list-tile-title v-if="selectedMessage.selectedOption"><v-icon class="header-icon">work</v-icon> {{ selectedMessage.selectedOption }}</v-list-tile-title>
                                </div>
                                <div>
                                    <v-list-tile-title>
                                        <span class="right">
                                            {{ formatedDate(selectedMessage.createdAt) }}
                                            <v-icon class="m-left">call_received</v-icon>
                                        </span>
                                    </v-list-tile-title>
                                    <v-list-tile-title><span class="right"> {{ selectedMessage.type }} <v-icon class="m-left">info</v-icon></span></v-list-tile-title>
                                  
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
                        prepend-icon="assignment"
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
            return this.savingMessage ? 'backup' : ''
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
        toggleArchived() {
            let archived = !this.selectedMessage.archived
            updateMessage(this.selectedMessage, { archived })
            return store.dispatch('toggleMessageArchived')
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
    float: right;
    margin-left: 10px;
}
.m-left {
    margin-left: 10px;
}
</style>

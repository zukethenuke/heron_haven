<template>
    <div class="admin-container">
        <v-navigation-drawer class="drawer brown lighten-2" dark permanent stateless height="100vh">
            <v-list>
                <v-list-tile to="/admin/members">
                    <v-list-tile-content>
                        Members
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/admin/messages">
                    <v-list-tile-content>
                        Messages
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/admin/field_trip_requests">
                    <v-list-tile-content>
                        Field Trip Requests
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            users: null
        }
    },
    async mounted() {
        this.users = await UserService.getAllUsers()
    }
}
</script>

<style scoped>
.admin-container {
    display: flex;
}
.drawer {
    min-width: 100px;
}
</style>

<template>
    <div>
        <v-navigation-drawer class="brown lighten-2" dark permanent stateless height="100vh">
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        Members
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        Messages
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        Picture of the Month
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

</style>

<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in DrawerItems">
                    <v-list-tile :key="index" :to="item.route">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>

            <router-link to="/">
                <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            </router-link>

            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <v-menu class="hidden-sm-and-down" open-on-hover nudge-bottom="38">
                <v-btn
                    slot="activator"
                    color="brown lighten-3"
                    dark>Friends of Heron Haven
                </v-btn>
                <v-list>
                    <v-list-tile
                        v-for="(item, index) in friendsItems"
                        :key="index"
                        :to="item.route">
                        <v-list-tile-title :to="item.route">{{item.title}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-menu class="hidden-sm-and-down" open-on-hover nudge-bottom="38">
                <v-btn
                    slot="activator"
                    color="brown lighten-3"
                    dark>About Us
                </v-btn>
                <v-list>
                    <v-list-tile
                        v-for="(item, index) in aboutItems"
                        :key="index"
                        :to="item.route">
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <!-- <v-btn v-if="!$store.state.isUserLoggedIn" class="hidden-sm-and-down" to="/admin">Admin</v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" flat class="hidden-sm-and-down" @click="signOut">Sign Out</v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat class="hidden-sm-and-down" to="/signin">Sign In</v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" color="brown lighten-3" class="hidden-sm-and-down" to="/join">Sign Up</v-btn> -->
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppHeader',
    data () {
        return {
            appTitle: 'Heron Haven',
            drawer: false,
            DrawerItems: [
                { title: 'Home', route: '/' }
                // { title: 'Sign In', route: '/signin' },
                // { title: 'Join', route: '/join' }
            ],
            friendsItems: [
                { title: 'Volunteer Oppertunities', route: '/volunteer' },
                { title: 'Our Favorite Links', route: '/links' },
                { title: '2nd Saturday Programs', route: '/programs/2nd_saturday' },
                { title: 'Membership Application', route: '/membership' },
                { title: 'Contact us', route: '/contact_us' }
            ],
            aboutItems: [
                { title: 'Our History', route: '/history' },
                { title: 'Directions', route: '/map' }
            ]
        }
    },
    methods: {
        signOut: function() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>

<template>
    <span>
<!-- ---------- -->
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Heron Haven</v-list-tile-title>
                </v-list-tile>

                <v-list-group prepend-icon="nature_people">
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Friends of Heron Haven</v-list-tile-title>
                    </v-list-tile>
                    <template v-for="(item, index) in friendsItems">
                        <v-list-tile :key="index" :to="item.route">
                            <v-list-tile-title>
                                <v-icon class="title-icon-drawer">{{ item.icon }}</v-icon>
                                {{item.title}}
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-divider :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list-group>
                <v-list-group prepend-icon="info">
                    <v-list-tile slot="activator">
                        <v-list-tile-title>About Us</v-list-tile-title>
                    </v-list-tile>
                     <v-list-tile
                        v-for="(item, index) in aboutItems"
                        :key="index"
                        :to="item.route">
                        <v-list-tile-title><v-icon class="title-icon-drawer">{{ item.icon }}</v-icon>{{item.title}}</v-list-tile-title>
                    </v-list-tile>
                </v-list-group>
                 <v-list-tile to="/admin">
                     <v-list-tile-action>
                        <v-icon>settings</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Admin</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
 <!-- ---------- -->
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
                    color="brown"
                    dark> <v-icon class="title-icon-header">nature_people</v-icon> Friends of Heron Haven
                </v-btn>
                <v-list>
                    <v-list-tile
                        v-for="(item, index) in friendsItems"
                        :key="index"
                        :to="item.route">
                        <v-list-tile-title :to="item.route"><v-icon class="title-icon-header">{{ item.icon }}</v-icon> {{item.title}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-menu class="hidden-sm-and-down" open-on-hover nudge-bottom="38">
                <v-btn
                    slot="activator"
                    color="brown"
                    dark> <v-icon class="title-icon-header">info</v-icon> About Us
                </v-btn>
                <v-list>
                    <v-list-tile
                        v-for="(item, index) in aboutItems"
                        :key="index"
                        :to="item.route">
                        <v-list-tile-title><v-icon class="title-icon-header">{{ item.icon }}</v-icon>{{item.title}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn v-if="!$store.state.isUserLoggedIn" class="hidden-sm-and-down" to="/admin"><v-icon>settings</v-icon> Admin</v-btn>
            <v-btn v-if="$store.state.isUserLoggedIn" flat class="hidden-sm-and-down" @click="signOut">Sign Out</v-btn>
            <v-btn v-if="!$store.state.isUserLoggedIn" color="brown" class="hidden-sm-and-down" to="/signin">Sign In</v-btn>
            <!-- <v-btn v-if="!$store.state.isUserLoggedIn" color="brown lighten-3" class="hidden-sm-and-down" to="/join">Sign Up</v-btn> -->
        </v-toolbar>
 <!-- ---------- -->
    </span>
</template>

<script>
export default {
    name: 'AppHeader',
    data () {
        return {
            appTitle: 'Heron Haven',
            drawer: false,
            friendsItems: [
                { title: 'Request Field Trip', route: '/field_trip', icon: 'school' },
                { title: 'Volunteer Oppertunities', route: '/volunteer', icon: 'work' },
                { title: 'Our Favorite Links', route: '/links', icon: 'favorite' },
                { title: '2nd Saturday Programs', route: '/programs/2nd_saturday', icon: 'event' },
                { title: 'Membership Application', route: '/membership', icon: 'card_membership' },
                { title: 'Contact us', route: '/contact_us', icon: 'message' }
            ],
            aboutItems: [
                { title: 'Our History', route: '/history', icon: 'history' },
                { title: 'Directions', route: '/map', icon: 'directions_car' }
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

.title-icon-drawer {
    margin: 0 25px;
}
.title-icon-header {
    margin-right: 20px;
}
</style>

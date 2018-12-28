<template>
    <v-container grid-list-md fluid>
        <home-carousel></home-carousel>
        <v-layout elevation-4 row wrap class="mt-4">
            <v-flex xs12 sm6 md6 class="pr-4">
                <in-the-news></in-the-news>
            </v-flex>
            <v-flex xs12 sm6 md6 class="px-4">
                <on-the-web></on-the-web>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// @ is an alias to /src
import HomeCarousel from '@/components/HomeCarousel.vue'
import InTheNews from '@/components/InTheNews.vue'
import OnTheWeb from '@/components/OnTheWeb.vue'

export default {
    name: 'home',
    components: {
        HomeCarousel,
        InTheNews,
        OnTheWeb
    }
}
</script>

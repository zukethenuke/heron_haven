<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">In the News</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4 v-for="(item, index) in news" :key="index">
                <a :href="item.link">
                    <v-card dark>
                        <v-img :src="item.image" height="300px"></v-img>
                        <v-card-title class="brown lighten-2">
                            <div >{{item.source}}</div>
                        </v-card-title>
                        <v-card-text class="brown lighten-2">
                            <div>{{item.text}}</div>
                        </v-card-text>
                    </v-card>
                </a>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'InTheNews',
    data () {
        return {
            image: require('@/assets/hh-home.jpg'),
            news: [{
                image: 'https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/f/21/f212b945-c7e8-5480-8709-d2f10da589ae/54a884bc7e7d6.image.jpg?crop=1401%2C1088%2C8%2C11&resize=1200%2C932&order=crop%2Cresize',
                link: 'https://www.omaha.com/outdoors/hansen-heron-haven-sanctuary-a-sign-that-omahan-won-the/article_e9ff553a-0951-5fe5-83f1-3703b0dc3c8b.html',
                source: 'Omaha World Herold',
                text: 'Heron Haven sanctuary a sign that Omahan won the fight she picked with developers'
            }, {
                image: 'https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/f/02/f02880b1-aecc-5d72-a549-c2d164848bc4/5333038e25c84.image.jpg',
                link: 'https://www.omaha.com/living/hidden-gems-heron-haven-also-quiet-refuge-for-humans/article_507b9f6b-754b-5cf1-abd6-3be2ebd2b47a.html',
                source: 'Omaha World Herold',
                text: 'Hidden Gems: Heron Haven also quiet refuge for humans'
            }]
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>

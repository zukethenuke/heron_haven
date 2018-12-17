<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">On The Web</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4 lg3 v-for="(item, index) in sites" :key="index">
                <a :href="item.link">
                    <v-card>
                        <v-img :src="item.image"></v-img>
                        <!-- <v-card-title>
                            <div>{{item.title}}</div>
                        </v-card-title>
                        <v-card-text>
                            <div>{{item.text}}</div>
                        </v-card-text> -->
                    </v-card>
                </a>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'OnTheWeb',
  data () {
    return {
      sites: [{
        image: require('@/assets/PM-NRD-logo.jpg'),
        link: 'https://www.papionrd.org/recreation-wildlife/parks-and-trails/heron-haven/',
        title: 'Papio-Missouri River NRD',
        text: 'Heron Haven Overview'
      }, {
        image: require('@/assets/Oh_My_Omaha.jpg'),
        link: 'https://ohmyomaha.com/2015/06/an-intro-to-heron-haven/',
        title: 'Oh My Omaha',
        text: 'Intro to Heron Haven'
      }, {
        image: require('@/assets/Trip-Advisor.jpg'),
        link: 'https://www.tripadvisor.com/Attraction_Review-g60885-d2140558-Reviews-Heron_Haven-Omaha_Nebraska.html',
        title: 'Trip advisor',
        text: ''
      }, {
        image: 'https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/9e6286e52e33/assets/img/brand_guidelines/dont_switch.png',
        link: 'https://www.yelp.com/biz/heron-haven-nature-center-omaha',
        title: 'Yelp',
        text: ''
      }
      ]
    }
  }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>

<template>
  <span>
    <home-carousel></home-carousel>
    <in-the-news></in-the-news>
    <on-the-web></on-the-web>
  </span>
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

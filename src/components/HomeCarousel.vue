<template>
    <v-carousel
        height="800"
        delimiter-icon="stop"
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right">
        <v-carousel-item
            style="transition: all 1s ease;"
            v-for="(item,i) in images"
            :key="i"
            :src="item.src"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  name: 'HomeCarousel',
  data () {
    return {
      images: [{
        src: require('@/assets/hh-home.jpg')
      }, {
        src: require('@/assets/hh-boardwalk.jpg')
      }, {
        src: require('@/assets/hh-home.jpg')
      }, {
        src: require('@/assets/hh-home.jpg')
      }, {
        src: require('@/assets/hh-home.jpg')
      }]
    }
  }
}
</script>

<style scoped>

</style>

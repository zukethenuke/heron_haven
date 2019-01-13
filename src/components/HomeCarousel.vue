<template>
    <v-carousel
        height="600"
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
        src: require('@/assets/home_carousel/Little_Blue_Heron.jpg')
      }, {
        src: require('@/assets/home_carousel/Muskrat.jpg')
      }, {
        src: require('@/assets/home_carousel/Frog_on_Lilly Pad.jpg')
      }, {
        src: require('@/assets/home_carousel/Opossum_Looking.jpg')
      }, {
        src: require('@/assets/home_carousel/Red_Tailed_Hawk.jpg')
      }, {
        src: require('@/assets/home_carousel/Mink.jpg')
      }, {
        src: require('@/assets/home_carousel/Joy_Bradley_Coyote.jpg')
      }, {
        src: require('@/assets/home_carousel/Columbine_Flower.jpg')
      }, {
        src: require('@/assets/home_carousel/Cone_Flower.jpg')
      }, {
        src: require('@/assets/home_carousel/Milk_Weed_Beetle.jpg')
      }, {
        src: require('@/assets/home_carousel/Spider_Web.jpg')
      }, {
        src: require('@/assets/home_carousel/Bloodroot.jpg')
      }]
    }
  }
}
</script>

<style scoped>

</style>

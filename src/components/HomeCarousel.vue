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
        src: require('@/assets/home_carousel/LittleBlueHeron-1_180511_140535_HeronHaven.jpg')
      }, {
        src: require('@/assets/home_carousel/Bloodroot.jpg')
      }, {
        src: require('@/assets/home_carousel/ConeFlower.jpg')
      }, {
        src: require('@/assets/home_carousel/MilkWeedBeetle.jpg')
      }, {
        src: require('@/assets/home_carousel/Muskrat_130408_164221_Heron Haven.jpg')
      }]
    }
  }
}
</script>

<style scoped>

</style>

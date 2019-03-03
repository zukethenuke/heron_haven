<template>
    <div class="container">
        <embed class="pdf-container" v-if="url" :src="url" type="application/pdf"/>
    </div>
</template>

<script>
import SecondSaturdayService from '@/services/SecondSaturdayService'

export default {
    data() {
        return {
            url: null
        }
    },
    async mounted() {
        this.url = await SecondSaturdayService.getUrl();
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
.pdf-container {
    width: 100%;
    height: 100%;
}
</style>

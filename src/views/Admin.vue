<template>
    <div>
        admin page
        <div v-for="user in users" :key="user.id">{{user}}</div>
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            users: null
        }
    },
    async mounted() {
       this.users = await UserService.getAllUsers()
   }
}
</script>

<style scoped>

</style>

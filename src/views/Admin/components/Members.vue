<template>
    <div>
        Members
    </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
    name: 'members',
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

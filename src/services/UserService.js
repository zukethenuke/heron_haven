import Api from '@/services/Api'

export default {
    async getAllUsers() {
        const users = await Api().get('users')
        return users.data
    },
    getUser() {
        return Api().get('users/:id')
    }
}

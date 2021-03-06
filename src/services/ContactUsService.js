import Api from '@/services/Api'

export default {
    submit(form) {
        return Api().post('contact_us', form)
    },
    async getAll() {
        let messages = await Api().get('contact_us')
        return messages.data
    },
    update(id, data) {
        return Api().put(`contact_us/${id}`, data)
    }
}

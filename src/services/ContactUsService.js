import Api from '@/services/Api'

export default {
    submit(form) {
        return Api().post('contact_us', form)
    }
}
import Api from '@/services/Api'

export default {
    submit(form) {
        return Api().post('field_trip_request', form)
    },
    async getAll() {
        let fieldTripsRequests = await Api().get('field_trip_request')
        return fieldTripsRequests.data
    },
    update(id, data) {
        return Api().put(`field_trip_request/${id}`, data)
    }
}

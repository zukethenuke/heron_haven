import Api from '@/services/Api'

export default {
    submit(file) {
        return Api().post('2nd_saturday',
            file,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    async getUrl() {
        let response = await Api().get('2nd_saturday',
            {
                responseType: 'blob'
            }
        )
        let blob = new Blob([response.data], { type: 'application/pdf' })
        let url = window.URL.createObjectURL(blob)
        return url
    }
}

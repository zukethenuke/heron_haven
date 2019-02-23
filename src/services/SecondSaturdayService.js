import Api from '@/services/Api'

export default {
    submit(file) {
        console.log('file', file)
        return Api().post('2nd_saturday',
            file,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }
}

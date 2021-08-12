import http from './http'

export const getData = params => {
    let url = "?id="+params.id
    return http.get('/get'+url)
}
export const postData = params => http.post('/post',params)
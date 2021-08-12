const axios = require('axios')
const baseURL = "http://localhost:3000"

function http(method, url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method,
            baseURL,
            url,
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8',
            },
            data: params,
            responseType: 'json',
            responseEncoding: 'utf8',
            withCredentials: false,
            credentials: "same-origin"
        }).then(res => {
            if (res.code === 0) {
                resolve({ msg: res.msg })
            }
            resolve(res.data)
        }).catch(err => {
            reject("请求出错")
        })
    })
}

const get = (...params) => http('GET', ...params)
const post = (...params) => http('POST', ...params)

export default { get, post }
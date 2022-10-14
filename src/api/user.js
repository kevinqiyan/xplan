import request from '@/utils/request'

export function getInfoTest(data) {
    return request({
        url: '/crud/info',
        method: 'get',
        params: data
    })
}

export function getInfoTest2(data) {
    return request({
        url: `/test/test/${data}`,
        // url: 'http://localhost:3000/test/test',
        method: 'get'
    })
}
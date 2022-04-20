import axios from '@/utils/request';

export function getComponents() {
    return axios({
        method: 'get',
        url: '/system/getComponents'
    })
}

export const postHttp = (url, parms) => {
    return axios({
        method: 'post',
        url: url,
        data: parms
    })
}

export const deleteHttp = (url, parms) => {
    return axios({
        method: 'delete',
        url: url,
        data: parms
    })
}

export const putHttp = (url, parms) => {
    return axios({
        method: 'put',
        url: url,
        data: parms
    })
}

export const getHttp = (url, parms) => {
    return axios({
        method: 'get',
        url: url,
        data: parms
    })
}
import axios from '@/utils/request';

export function getComponents(url,userId) {
    return axios({
        method: 'get',
        url: url,
        params:{
            userId:userId
        }
    })
}

export const postHttp = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: params
    })
}

export const deleteHttp = (url, params) => {
    return axios({
        method: 'delete',
        url: url,
        data: params
    })
}

export const putHttp = (url, params) => {
    return axios({
        method: 'put',
        url: url,
        data: params
    })
}

export const getHttp = (url, params) => {
    return axios({
        method: 'get',
        url: url,
        params: params
    })
}
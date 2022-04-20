import axios from '@/utils/request';

export function getComponents(){
    return axios({
        method:'get',
        url:'/system/getComponents'
    })
}

const getHttp = ()=>{
}
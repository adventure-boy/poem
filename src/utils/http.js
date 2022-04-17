import axios from '@/utils/request';

export function getNavMenu(){
    return axios({
        method:'get',
        url:'/login/getMenu'
    })
}
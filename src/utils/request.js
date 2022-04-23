import axios from 'axios';
import Element from 'element-ui';
axios.defaults.baseURL="http://localhost:8080/"



axios.interceptors.request.use((config) => {
    return config
})

axios.interceptors.response.use((response) => {
    if (response.data.code === 200) {
        return response
    } else {
        Element.Message.error(response.data.message)
    }
})

axios.interceptors.request.use((config)=>{
    return config
})

axios.interceptors.response.use((response)=>{
    return response
})

export default axios
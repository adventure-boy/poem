import axios from 'axios';

axios.defaults.baseURL="http://localhost:8080"

axios.interceptors.request.use((config)=>{
    return config
})

axios.interceptors.response.use((response)=>{
    return response
})

export default axios
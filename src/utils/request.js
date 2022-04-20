import axios from 'axios';
import Element from 'element-ui';

axios.defaults.baseURL = "http://localhost:8080"

axios.interceptors.request.use((config) => {
    console.log("-----------");
    return config
})

axios.interceptors.response.use((response) => {
    console.log("-----------");
    console.log(response.data);
    if (response.data.code === 200) {
        return response
    } else {
        Element.Message.error(response.data.message)
    }
})

export default axios
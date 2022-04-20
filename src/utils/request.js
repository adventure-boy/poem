import axios from 'axios';
<<<<<<< HEAD
import Element from 'element-ui';
=======
import ElementUi from 'element-ui'
>>>>>>> 665806f750b8e5fcb0f36983ee3fad54311509ff

axios.defaults.baseURL = "http://localhost:8080"

<<<<<<< HEAD
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
=======
axios.interceptors.request.use((config)=>{
    console.log(this.$element);
    return config
})

axios.interceptors.response.use((response)=>{
    // if(response.data.data.code != 200){
    //     this.$message({
    //         message: '警告哦，这是一条警告消息',
    //         type: 'warning'
    //     });
    //     console.log(response.data.data.code);
    //     return
    return response
    // }
>>>>>>> 665806f750b8e5fcb0f36983ee3fad54311509ff
})

export default axios
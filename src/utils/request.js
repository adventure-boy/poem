import axios from 'axios';
import ElementUi from 'element-ui'

axios.defaults.baseURL="http://localhost:8080"

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
})

export default axios
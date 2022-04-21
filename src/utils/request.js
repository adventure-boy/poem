import axios from 'axios';
import Element from 'element-ui';




axios.interceptors.request.use((config) => {

    return config
})

axios.interceptors.response.use((response) => {

    console.log(response.data);
    if (response.data.code === 200) {
        return response
    } else {
        Element.Message.error(response.data.message)
    }

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
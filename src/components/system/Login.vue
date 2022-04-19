<template>


<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
      return {
        username:"",
        password:"",
        verificationCode:""
      }
    },
    methods:{
        getVerificationCode(){
                axios
                .get('/system/getVerificationCode')
                .then(response => (this.verificationCode = response.data.verificationCode))
        },
        login(){
          axios.post()
        }
    },
    mounted(){
      this.getVerificationCode()
    }
}
</script>

<style>
  
</style>
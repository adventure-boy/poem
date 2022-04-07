<template>
  <div id="root" class="login-box">
    <div class="text-box">
      <input type="text" placeholder="账户" />
    </div>
    <div class="text-box">
      <input type="text" placeholder="密码" />
    </div>
    <div class="text-box">
      <input type="text" placeholder="验证码"  class="checkCode-box"/>
    </div>
    <div class="text-box">
      <input type="button" value="登录" @click="login()" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        login(){
                axios
                .get('http://localhost:8080/login/getVerificationCode')
                .then(response => (console.log(response.data)))
        }
    }
}
</script>

<style>
.login-box {
  text-align: center;
  margin-top: 20%;
}
.text-box{
    margin: 10px;
}
.checkCode-box{
    margin-left: 0;
    width: 80px;
}
</style>
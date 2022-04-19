<template>
  <el-form  label-width="100px">
    <el-form-item label="账号">
      <el-input type="password" v-model="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="验证码" >
      <el-input v-model="verificationCode" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

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
  .el-form{
    MARGIN: 200PX;
    text-align: center;
  }
  .el-form-item{
    text-align: center;
    width: 500px;
    margin-left: 20%;
  }
</style>
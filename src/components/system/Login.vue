<template>
  <el-form label-width="100px">
    <el-form-item label="账号">
      <el-input
        type="username"
        v-model="user.username"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        type="password"
        v-model="user.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <div>
        <el-input
          v-model="user.verificationCode"
          style="width: 150px; height: 30px; float: left"
        ></el-input>
      </div>
      <div class="code" @click="getVerificationCode()">
        {{ code }}
      </div>
      <!-- <p class="code">{{code}}</p > -->
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login()">提交</el-button>
      <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
        verificationCode: "",
      },
      code: "",
      url: "@/assets/codebackground.jpg",
    };
  },
  methods: {
    getVerificationCode() {
      this.getHttp("/system/getVerificationCode").then((response) => {
        this.code = response.data.data;
      });
    },
    login(){
      this.postHttp("/login",this.user).then((response)=>{
        console.log(response.data);
        if(response.data.code === 200){
          //将用户信息存入vuex
          this.$store.dispatch("saveUserInfo",response.data.data)
          // 将用户信息存入Windows
          window.sessionStorage.setItem("user",JSON.stringify(response.data.data))
          this.$router.replace("/home")
        }
      })
    }
  },
  mounted() {
    this.getVerificationCode();
  }
}
</script>

<style>
.el-form {
  /* margin-left: 800PX; */
  margin-top: 50px;
  width: 600px;
  height: 300px;
  text-align: center;
  /* background-color: aqua; */
}
.el-form-item {
  /* text-align: center; */
  width: 400px;
  margin-left: 20%;
  /* background-color: rgb(118, 137, 74); */
}
.code {
  margin-left: 10px;
  height: 35px;
  width: 100px;
  background-image: url("/src/assets/codebackground.jpg");
  background-position: right top;
  color: rgb(29, 8, 73);
  font-size: 25px;
  float: right;
}
</style>
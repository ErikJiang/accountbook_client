<template>
  <div class='login'>
    <div class="title">{{ title }}</div>
    <div class="login-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
            <el-button type="primary" @click="submit">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Account Book",
      ruleForm: {
        username: "admin",
        password: "123123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit: function(message, event) {
      console.log(`enter submit go home!`);
      this.$router.push("/home");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-color:#324157;
}
.title {
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  font-size: 25px;
  color: aliceblue;
}
.login-box {
  position: absolute;
  top: 35%;
  left: 39%;
  padding: 40px;
  border-radius: 5px;
  width: 18%;
  background-color: hsl(205, 66%, 94%);
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
}
</style>

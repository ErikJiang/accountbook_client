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
            <el-button type="primary" @click="loginSubmit">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/api';

export default {
  name: "Home",
  data() {
    return {
      title: "Account Book",
      ruleForm: {
        username: "jiangink",
        password: "1234qwer"
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
    async loginSubmit() {
      let postParams = {
        username: this.ruleForm.username.trim(),
        password: this.ruleForm.password.trim()
      };
      if (!this.isUsername()) {
        return this.$message.error(
          "用户名由3-20位数字、英文字母或者下划线组成"
        );
      }
      if (!this.isPassword()) {
        return this.$message.error(
          "密码长度在6~18之间，只能包含字母、数字和下划线"
        );
      }
      try {
        let response = await login(postParams);
        console.log(`response: ${response}`);
      } catch (e) {
        console.error(e.message);
      }
    },
    isUsername() {
      let reg = /^\w{3,20}$/; //用户名由3-20位数字、英文字母或者下划线组成
      return reg.test(this.ruleForm.username.trim());
    },
    isPassword() {
      let reg = /^\w{6,18}$/; //密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
      return reg.test(this.ruleForm.password.trim());
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
  background-color: #324157;
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

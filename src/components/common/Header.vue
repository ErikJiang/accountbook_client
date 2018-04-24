<template>
  <div class="header" >
    <div class="header-btn" @click="changeCollapse">
      <i class="el-icon-menu"></i>
    </div>
    <div class="header-title">
      <img class="logo" src="../../../static/img/logo.png" alt="">
      {{ title }}
    </div>
    <div class="header-user">
      <el-dropdown>
      <span class="el-dropdown-link">
        <img class="avatar" src="../../../static/img/avatar.jpg" alt="">
        {{ username }}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginout">修改信息</el-dropdown-item>
        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>
<script>
import bus from './bus'

export default {
  name: "Header",
  data() {
    return {
      collapse: false,
      title: "Account Book",
      username: "INK"
    };
  },
  methods: {
    changeCollapse() {
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse)
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  /* top: 0;
  left: 0; */
  height: 70px;
  width: 100%;
  line-height: 70px;
  font-size: 22px;
  color: white;
  background-color: #6699b7;
}

.header-btn {
  /* border: 1px solid red; */
  padding: 0 21px;
  float: left;
  cursor: pointer;
}

.header-btn:hover {
  background: rgb(102, 134, 148);
}

.header-title {
  width: 250px;
  padding-left: 5px;
  float: left;
}

.header-title .logo {
    width: 35px;
    height: 35px;
    vertical-align: middle;
}

.header-user {
  /* border: 1px solid yellow; */
  padding: 0 20px;
  float: right;
}

.header-user .el-dropdown-link {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
}

.header-user .avatar {
    position: absolute;
    left:0;
    top:15px;
    width:40px;
    height:40px;
    border-radius: 50%;
}

.el-dropdown-menu__item {
    text-align: center;
}
</style>


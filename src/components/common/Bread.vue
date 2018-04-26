<template>
  <div class="bread">
    <div class="bread-head">
        <h3 class="title">{{ title }}</h3>
        <p class="desc">{{ desc }}</p>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-nav">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in list" :key="index" :to="{path: item.path}">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "home"
    },
    desc: {
      type: String,
      default: "欢迎访问记账本主页"
    },
    list: {
      type: Array,
      default: []
    }
  }
};
</script>
<style scoped>
.bread {
    display: flex;
    height: 90px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
.bread-head {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bread-head .title {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 10px;
}

.bread-head .desc {
    font-size: 12px;
    color: #a3a3a3;
}
.bread-nav {
    margin-right: 40px;
    margin-top: -30px;
}

</style>



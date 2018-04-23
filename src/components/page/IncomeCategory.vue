<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>收支分类</el-breadcrumb-item>
    <el-breadcrumb-item>收入类别</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>{{ msg }}</h1>
    <h2>IncomeCategory Page</h2>
  </div>
</template>

<script>
export default {
  name: 'IncomeCategory',
  data () {
    return {
      msg: '收入类别管理页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  float: right;
}
</style>
<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>账单列表</el-breadcrumb-item>
    <el-breadcrumb-item>支出列表</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>{{ msg }}</h1>
    <h2>OutgoList Page</h2>
  </div>
</template>

<script>
export default {
  name: 'OutgoList',
  data () {
    return {
      msg: '支出账单列表页面'
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
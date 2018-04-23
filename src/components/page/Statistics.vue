<template>
  <div>

    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>统计报表</el-breadcrumb-item>
    </el-breadcrumb>

    <h1>{{ msg }}</h1>
    <h2>Statistics Page</h2>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data () {
    return {
      msg: '图表统计页面'
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

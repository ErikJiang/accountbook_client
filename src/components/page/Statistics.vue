<template>
  <div>
    <v-bread title="统计报表" desc="统计收入支出数据" :list="list"></v-bread>

    <h1>{{ msg }}</h1>
    <h2>Statistics Page</h2>
  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'Statistics',
  data () {
    return {
      msg: '图表统计页面',
      list: [
        {
          name: "统计报表",
          path: "/statistics"
        }
      ]
    }
  },
  components: {
    vBread
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

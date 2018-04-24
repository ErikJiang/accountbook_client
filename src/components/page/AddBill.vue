<template>
  <div>
    <v-bread title="新增账目" desc="新增收入支出账目数据" :list="list"></v-bread>

    <h1>{{ msg }}</h1>
    <h2>AddBill Page</h2>
  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'AddBill',
  data () {
    return {
      msg: '新增账目页面',
      list: [
        {
          name: '新增账目',
          path: '/addBill'
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

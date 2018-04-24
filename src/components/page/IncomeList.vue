<template>
  <div>
    <v-bread title="收入列表" desc="收入数据列表" :list="list"></v-bread>

  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'IncomeList',
  data () {
    return {
      msg: '收入账单列表页面',
      list: [
        {
          name: '账单列表',
          path: ''
        },
        {
          name: '收入列表',
          path: '/incomeList'
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
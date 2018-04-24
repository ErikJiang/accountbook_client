<template>
  <div>
    <v-bread title="收入类别" desc="收入类别管理" :list="list"></v-bread>

    <h1>{{ msg }}</h1>
    <h2>IncomeCategory Page</h2>
  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'IncomeCategory',
  data () {
    return {
      msg: '收入类别管理页面',
      list: [
        {name: '收支分类', path: ''},
        {name: '收入类别', path: '/incomeCategory'}
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
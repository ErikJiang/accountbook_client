<template>
  <div>
    <v-bread title="支出类别" desc="支出类别管理" :list="list"></v-bread>

    <h1>{{ msg }}</h1>
    <h2>OutgoCategory Page</h2>
  </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: 'OutgoCategory',
  data () {
    return {
      msg: '支出类别管理页面',
      list: [
        {name: '收支分类', path: ''},
        {name: '支出类别', path: '/outgoCategory'}
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
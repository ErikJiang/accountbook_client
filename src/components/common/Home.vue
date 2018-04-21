<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <!-- <el-button round @click="submit">进入主页</el-button> -->
  </div>
</template>

<script>
import vHeader from './Header'
import vSidebar from './Sidebar'
export default {
  name: 'Home',
  data () {
    return {
      msg: '我的记账本'
    }
  },
  components: {
    vHeader, vSidebar
  },
  methods: {
      submit: function(message, event) {
          console.log(`enter submit go home!`)
          this.$router.push('/home')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>

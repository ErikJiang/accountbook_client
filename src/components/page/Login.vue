<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button round @click="submit">进入主页</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'THIS IS LOGIN PAGE!'
    }
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

<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content" :class="{'content-collapse': collapse}">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHeader from './Header'
import vSidebar from './Sidebar'
import bus from './bus'
export default {
  name: 'Home',
  data () {
    return {
      collapse: false,
      msg: '我的记账本'
    }
  },
  components: {
    vHeader, vSidebar
  },
  created() {
    bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>

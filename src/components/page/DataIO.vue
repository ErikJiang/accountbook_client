<template>
    <div>
        <v-bread title="导入导出" desc="数据文件导入导出" :list="list"></v-bread>
    </div>
</template>

<script>
import vBread from '../common/Bread'
export default {
  name: "DataIO",
  data() {
    return {
      list: [
        { name: "导入导出", path: "/dataIO" }
      ]
    };
  },
  components: {
      vBread
  }
};
</script>

<style scoped>

</style>

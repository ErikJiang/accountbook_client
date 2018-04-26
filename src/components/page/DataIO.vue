<template>
    <div>
        <v-bread title="导入导出" desc="数据文件导入导出" :list="list"></v-bread>
        
        <!-- 基础用法 -->
        <icon name="beer"></icon>

        <!-- 添加选项 -->
        <icon name="sync" scale="2" spin></icon>
        <icon name="comment" flip="horizontal"></icon>
        <icon name="code-branch" label="Forked Repository"></icon>

        <!-- 堆叠图标 -->
        <icon label="No Photos">
        <icon name="camera"></icon>
        <icon name="ban" scale="2" class="alert"></icon>
        </icon>
        <br/>
        <icon name="upload"></icon>
        <icon name="download"></icon>
        <icon name="home"></icon>

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

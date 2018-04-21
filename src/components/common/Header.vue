<template>
  <div class="header">
    <div class="header-icon">
      <i class="el-icon-menu"></i>
    </div>
    <div class="header-title">{{ title }}</div>
    <div class="header-user"></div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      collapse: false,
      title: '記賬本'
    };
  },

};
</script>

<style scoped>
  .header {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    line-height: 70px;
    font-size: 22px;
    color: white;
    background-color: royalblue;
  }
</style>


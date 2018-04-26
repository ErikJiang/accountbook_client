<template>
  <div class="sidebar">
      <el-menu class="sidebar-menu" :default-active="onRoutes" :collapse="collapse"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" collapse-transition unique-opened router>
        
        <template v-for="menu in menuList">
            <template v-if="menu.subs">
                <el-submenu :index="menu.index" :key="menu.index">
                    <template slot="title">
                        <i :class="menu.icon"></i><span slot="title">{{ menu.title }}</span>
                    </template>
                    <el-menu-item v-for="(subMenu, i) in menu.subs" :key="i" :index="subMenu.index">
                        {{ subMenu.title }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="menu.index" :key="menu.index">
                    <i :class="menu.icon"></i><span slot="title">{{ menu.title }}</span>
                </el-menu-item>
            </template>
        </template>    

      </el-menu>
  </div>
</template>
<script>
import bus from "./bus";

export default {
  name: "Sidebar",
  data() {
    return {
      collapse: false,
      menuList: [
        {
          icon: "el-icon-tickets",
          index: "dashboard",
          title: "账本首页"
        },
        {
          icon: "el-icon-tickets",
          index: "statistics",
          title: "统计报表"
        },
        {
          icon: "el-icon-edit",
          index: "addBill",
          title: "添加账目"
        },
        {
          icon: "el-icon-document",
          index: "bills",
          title: "账单列表",
          subs: [
            {
              index: "outgoList",
              title: "支出账单"
            },
            {
              index: "incomeList",
              title: "收入账单"
            }
          ]
        },
        {
          icon: "el-icon-news",
          index: "categorys",
          title: "收支分类",
          subs: [
            {
              index: "outgoCategory",
              title: "支出分类"
            },
            {
              index: "incomeCategory",
              title: "收入分类"
            }
          ]
        },
        {
          icon: "el-icon-edit",
          index: "dataIO",
          title: "导入导出"
        },
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}
.sidebar-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>


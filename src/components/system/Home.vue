<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="[]">
        <el-submenu default-active="Index" :index="menu.name" v-for="menu in nav" :key="menu.name">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.name}}</span>
            </template>
            <router-link :to="item.path" v-for="item in menu.children" :key="item.name">
                <el-menu-item :index="item.name">
                    <template slot="title">
                        <span slot="title">{{item.name}}</span>
                    </template>
                </el-menu-item>
            </router-link>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      nav: []
    };
  },
  methods: {
    getNavMenu() {
      this.$axios.get("/system/getMenu").then((response) => {
        this.nav = response.data.data;
        console.log(response.data.data);
      });
      console.log("hello")
    },
  },
  mounted() {
    this.getNavMenu()
  },
};
</script>

<style>
.el-header {
  background-color: #8ad25a;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: rgb(130, 67, 67);
  background-color: #c3d1b9;
  height: 500px;
}
</style>
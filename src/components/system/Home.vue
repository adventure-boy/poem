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
      </el-header>

      <el-main> 
        <router-view/>
      </el-main>
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
      this.nav = this.$store.state.routes
    },
  },
  mounted() {
    this.getNavMenu()
  },
};
</script>

<style>
.el-header {
  background-color: #dbe3d6;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: rgb(130, 67, 67);
  background-color: #c3d1b9;
  height: 700px;
}
</style>
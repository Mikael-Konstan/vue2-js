<template>
  <div class="main"
       style="height: 100%">
    <el-container style="height: 100%">
      <el-header style="height: 30px;">
        Header
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo"
                   text-color="#fff"
                   background-color="#545c64"
                   :router="true"
                   :default-active="refresh"
                   active-text-color="#ffd04b">
                   <!-- :router index与路由绑定 :default-active 选中项 -->
            <el-menu-item index="/dashboard">
              <i class="el-icon-s-home"></i>
              <span slot="title" class="navtitle">dashboard</span>
            </el-menu-item>
            <el-submenu index='/Editor'>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="navtitle">Editor</span>
              </template>
              <el-menu-item index="/Editor">
                <span slot="title" class="navtitle">wangEditor</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/pageTwo">
              <i class="el-icon-menu"></i>
              <span slot="title" class="navtitle">pageTwo</span>
            </el-menu-item>
            <el-menu-item index="/pageThree">
              <i class="el-icon-document"></i>
              <span slot="title" class="navtitle">pageThree</span>
            </el-menu-item>
            <el-menu-item index="/pageFour">
              <i class="el-icon-setting"></i>
              <span slot="title" class="navtitle">pageFour</span>
            </el-menu-item>
            <el-menu-item index="/pageFive">
              <i class="el-icon-setting"></i>
              <span slot="title" class="navtitle">pageFive</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      refresh: this.$route.index,
    }
  },
  mounted() {
    console.log(this.$route);
    this.refresh = this.$route.name.split('/')[0];
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.el-header {
  background: #666;
  color: antiquewhite;
  line-height: 30px;
}
.el-aside {
  height: 100%;
  background: rgb(84, 92, 100);
}
.navtitle{
  display: inline-block;
  width: 60%
}
</style>

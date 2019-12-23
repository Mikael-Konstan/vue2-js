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
                   background-color="rgb(84, 92, 100)"
                   :router="true"
                   :default-active="$route.path"
                   active-text-color="#ffd04b">
            <el-menu-item index="/dashboard"
                          v-on:click="idx">
              <i class="el-icon-s-home"></i>
              <span slot="title" class="navtitle">index</span>
            </el-menu-item>
            <el-submenu index='/Editor'>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="navtitle">Editor</span>
              </template>
              <el-menu-item index="/Editor">
                <span slot="title">wangEditor</span>
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
  methods: {
    idx () {
      this.$router.push('/dashboard')
    },
    // Editor(){
    //   this.$router.push('/Editor')
    // },
    // pageTwo() {
    //   this.$router.push('/pageTwo')
    // },
    // pageThree(){
    //   this.$router.push('/pageThree')
    // },
    // pageFour(){
    //   this.$router.push('/pageFour')
    // },
    // pageFive(){
    //   this.$router.push('/pageFive')
    // }
  }
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

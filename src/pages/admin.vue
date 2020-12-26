<template>
  <div class="main">
    <el-container>
      <el-header>
        Header
      </el-header>
      <el-container style="height: calc(100% - 60px);">
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo"
                   text-color="#fff"
                   background-color="#545c64"
                   :router="true"
                   :default-active="activeMenu"
                   active-text-color="#ffd04b">
            <!-- :router index与路由绑定 :default-active 选中项 -->
            <div v-for="(route) in $router.options.routes"
                 :key="route.name">
              <el-submenu :index="route.path"
                          v-if="route.children.length > 1">
                <template slot="title">
                  <i v-if="route.meta && route.meta.icon"
                     :class="route.meta.icon"></i>
                  <span class="navtitle">{{ route.meta.title }}</span>
                </template>
                <el-menu-item v-for="(child) in route.children"
                              :key="child.name"
                              :index="child.path">
                  <span slot="title"
                        class="navtitle">
                    {{ child.meta.title }}
                  </span>
                </el-menu-item>
              </el-submenu>
              
              <el-menu-item :index="route.redirect || route.path"
                            v-else>
                <i v-if="route.meta && route.meta.icon"
                   :class="route.meta.icon"></i>
                <span slot="title"
                      class="navtitle">
                  {{ route.meta.title }}
                </span>
              </el-menu-item>
            </div>
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
  data () {
    return {}
  },
  computed: {
    activeMenu () {
      const { meta, path } = this.$route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header {
  background: #666;
  color: antiquewhite;
  line-height: 60px;
  font-size: 24px;
  font-weight: 600;
}
.el-aside {
  background: rgb(84, 92, 100);
}
.navtitle {
  display: inline-block;
  width: 60%;
}
</style>

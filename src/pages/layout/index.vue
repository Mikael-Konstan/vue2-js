<template>
  <div class="main">
      <el-container style="100%">
        <el-aside>
          <el-menu class="el-menu-vertical-demo"
                   text-color="#fff"
                   background-color="#545c64"
                   :collapse="isCollapse"
                   :router="true"
                   :default-active="activeMenu"
                   active-text-color="#ffd04b">
            <!-- :router index与路由绑定 :default-active 选中项 -->
            <div index="#" class="authorLog">
                <img src="@/assets/img/blueIcon.svg" alt="">
                <span slot="title"
                      :class="[isCollapse ? 'hide': '', 'navtitle', ]">
                  Mikael.Konstan
                </span>
            </div>
            <div v-for="(route) in $router.options.routes"
                 :key="route.name">
              <el-submenu :index="route.path"
                          v-if="route.children.length > 1">
                <template slot="title">
                  <i v-if="route.meta && route.meta.icon"
                     :class="route.meta.icon"></i>
                  <span slot="title" :class="[isCollapse ? 'hide': '', 'navtitle', ]">{{ route.meta.title }}</span>
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
        <el-container>
          <el-header>
            <i :class="iClass" @click="toggleFold" style="float: left;margin-top: 18px;"></i>
            Header
          </el-header>
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
    return {
      iClass: 'el-icon-s-fold',
      isCollapse: false,
    }
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
  methods: {
    toggleFold () {
      this.isCollapse = !this.isCollapse;
      this.iClass = this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  width: auto !important;
}
.el-menu{
  border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.authorLog {
  background-color: #626262;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  img {
    height: 28px;
    width: 28px;
  }
}
</style>

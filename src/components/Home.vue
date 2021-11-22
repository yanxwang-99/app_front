<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="home-logo-title">
        <img src="../assets/wxmetro_logo.jpg"
             alt=""
             class="home-logo">
        <span class="home-title">无锡地铁4号线</span>
      </div>
      <el-button type="danger"
                 icon="el-icon-switch-button"
                 @click="logout"
                 circle></el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边菜单栏区域 -->
        <el-menu background-color="#333744"
                 text-color="#fff"
                 active-text-color="#409eff"
                 unique-opened
                 router
                 :default-active="activePath">
          <!-- 菜单内容 -->
          <el-menu-item v-for="item in menuList"
                        :key="item.id"
                        :index="'/' + item.path">
            <!-- 图标 -->
            <i class="el-icon-monitor"></i>
            <!-- 文本 -->
            <span slot="title">{{item.authName}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = this.$route.path
  },
  watch: {
    $route: 'refreshActivePath'
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    getMenuList () {
      this.$http.get('/menu').then(res => {
        const menuInfo = res.data
        if (menuInfo.meta.status !== 200) {
          return this.$message.error(menuInfo.meta.msg)
        }
        this.menuList = menuInfo.data
        // console.log(menuInfo)
      })
    },
    refreshActivePath () {
      this.activePath = this.$route.path
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #333744;
  display: flex;
  justify-content: space-between;
  /* padding-left: 0; */
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.home-logo-title {
  display: flex;
  align-items: center;
}
.home-logo {
  height: 40px;
  width: 40px;
}
.home-title {
  margin-left: 15px;
}
.el-aside {
  background-color: #333744;
}
.el-menu {
  border-right-width: 0;
}
.el-main {
  background-color: #eaedf1;
}
</style>

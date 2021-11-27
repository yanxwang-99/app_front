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
                        :index="'/' + item.path"
                        :disabled="item.isDisabled">
            <!-- 图标 -->
            <i class="el-icon-monitor"></i>
            <!-- 文本 -->
            <span slot="title">{{item.authName}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main class="main-box">
        <!-- 路由占位符 -->
        <router-view :key="$route.fullPath"></router-view>
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
    this.updateNotice()
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
        if (!menuInfo.ret) {
          return this.$message.error(menuInfo.content)
        }
        this.menuList = menuInfo.content
      }).catch(error => {
        console.log(error)
      })
    },
    refreshActivePath () {
      this.activePath = this.$route.path
    },
    updateNotice () {
      this.$notify.info({
        title: '最近一次更新内容',
        message: '侧边栏滚动条隐藏'
      })
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
  align-items: center;
  color: #fff;
  font-size: 20px;
  height: 60px !important;
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
  height: calc(100vh - 60px);
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-menu {
  border-right-width: 0;
}
.el-main {
  background-color: #eaedf1;
  height: calc(100vh - 60px);
}
</style>

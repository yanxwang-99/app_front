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
      <el-button @click="logout"
                 round>退出登录</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边菜单栏区域 -->
        <el-menu background-color="#8B008b"
                 text-color="#fff"
                 active-text-color="#ffd04b">
          <!-- 一级菜单        -->
          <el-submenu index="1">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-monitor"></i>
              <!-- 文本 -->
              <span>刘潭站</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-1">小系统</el-menu-item>
            <el-menu-item index="1-2">大系统</el-menu-item>
            <el-menu-item index="1-3">空调水系统</el-menu-item>
          </el-submenu>

          <!-- 一级菜单        -->
          <el-submenu index="2">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-monitor"></i>
              <!-- 文本 -->
              <span>广石路站</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="2-1">小系统</el-menu-item>
            <el-menu-item index="2-2">大系统</el-menu-item>
            <el-menu-item index="2-3">空调水系统</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #800080;
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
  background-color: #800080;
}
.el-menu {
  border-right-width: 0;
}
.el-main {
  background-color: #eaedf1;
}
</style>

<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="home-logo-title">
        <img src="../assets/logo.png"
             alt=""
             class="home-logo">
        <span class="home-title">VUE</span>
      </div>
      <el-button type="info"
                 @click="logout">退出登录</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边菜单栏区域 -->
        <el-menu background-color="#333744"
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
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>小系统</span>
              </template>
            </el-menu-item>
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
  background-color: #373d41;
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
.el-main {
  background-color: #eaedf1;
}
</style>

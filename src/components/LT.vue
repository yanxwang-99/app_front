<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList"
                          :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs @tab-click="getMatched">
      <el-tab-pane label="大系统"
                   name="first">大系统</el-tab-pane>
      <el-tab-pane label="小系统"
                   name="second">小系统</el-tab-pane>
      <el-tab-pane label="空调水系统"
                   name="third">空调水系统</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbList: [
        '刘潭站'
      ]
    }
  },
  methods: {
    getMatched (tab) {
      this.breadcrumbList.splice(1, this.breadcrumbList.length - 1)
      this.breadcrumbList.push(tab.label)
    }
  }
}
</script>

<style scoped>
.el-tabs {
  padding-top: 20px;
}
</style>

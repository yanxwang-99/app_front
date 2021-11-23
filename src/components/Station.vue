<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList"
                          :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs @tab-click="handleClick">
      <el-tab-pane v-for="subSystem in subSystemList"
                   :key="subSystem.id"
                   :label="subSystem.label"
                   :name="subSystem.name">
        <el-table :data="tableData"
                  max-height="500">
          <el-table-column prop="deviceId"
                           label="设备编号"
                           width="180"></el-table-column>
          <el-table-column prop="deviceName"
                           label="设备名称"
                           width="180"></el-table-column>
          <el-table-column prop="deviceStatus"
                           label="设备状态"
                           width="180"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbList: [],
      tableData: [],
      subSystemList: []
    }
  },
  created () {
    this.getSubSystemList()
  },
  methods: {
    getSubSystemList () {
      const url = '/station' + this.$route.path + '/subSystem'
      this.$http.get(url).then(res => {
        const subSystemInfo = res.data
        if (subSystemInfo.meta.status !== 200) {
          return this.$message.error(subSystemInfo.meta.msg)
        }
        this.breadcrumbList = []
        this.breadcrumbList.push(subSystemInfo.stationName)
        this.subSystemList = subSystemInfo.data
      })
    },
    handleClick (tab) {
      // 面包屑变化
      this.breadcrumbList.splice(1, this.breadcrumbList.length - 1)
      this.breadcrumbList.push(tab.label)
      // 获取子系统设备信息
      const tabSelected = tab.name
      const dataURL = '/station' + this.$route.path + '/' + tabSelected
      this.$http.get(dataURL).then(res => {
        const info = res.data
        if (info.meta.status !== 200) {
          return this.$message.error(info.meta.msg)
        }
        this.tableData = info.data
      })
    }
  }
}
</script>

<style scoped>
.el-tabs {
  padding-top: 20px;
}
.el-table {
  width: 100%;
}
</style>

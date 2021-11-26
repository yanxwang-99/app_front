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
                   :name="subSystem.name"
                   class="deviceInfo-box">
        <sub-system ref="subSystem"></sub-system>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SubSystem from '@/components/SubSystem.vue'
export default {
  components: { SubSystem },
  data () {
    return {
      breadcrumbList: [],
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
        if (!subSystemInfo.ret) {
          return this.$message.error(subSystemInfo.content)
        }
        this.breadcrumbList.push(subSystemInfo.content.stationName)
        this.subSystemList = subSystemInfo.content.subSystemList
      }).catch(error => {
        console.log(error)
      })
    },
    handleClick (tab) {
      // 面包屑变化
      this.breadcrumbList.splice(1, this.breadcrumbList.length - 1)
      this.breadcrumbList.push(tab.label)
      // 获取子系统设备信息
      const tabSelected = tab.name
      const dataURL = '/station' + this.$route.path + '/' + tabSelected
      this.$refs.subSystem[tab.index].getDeviceInfo(dataURL, tab.index)
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

<template>
  <div>
    <el-table :data="tableData"
              max-height="500"
              v-loading="isLoading">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      isLoading: true
    }
  },
  methods: {
    getDeviceInfo (dataURL) {
      // 判断是否加载过数据
      if (this.tableData.length === 0) {
        // console.log('调用了后端接口')
        this.$http.get(dataURL).then(res => {
          const info = res.data
          if (!info.ret) {
            return this.$message.error(info.content)
          }
          this.tableData = info.content
          // 关闭加载动画
          this.isLoading = false
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
</style>

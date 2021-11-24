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
      if (this.tableData.length === 0) {
        // console.log('调用了后端接口')
        this.$http.get(dataURL).then(res => {
          const info = res.data
          if (info.meta.status !== 200) {
            return this.$message.error(info.meta.msg)
          }
          this.tableData = info.data
          // 关闭加载动画
          this.isLoading = false
        })
      }
    }
  }
}
</script>

<style scoped>
</style>

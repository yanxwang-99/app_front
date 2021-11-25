<template>
  <div>
    <el-table :data="tableData"
              :max-height="maxHeight"
              v-if="dataLoaded">
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
      dataLoaded: false,
      maxHeight: this.$getViewportSize().height - 200
    }
  },
  methods: {
    getDeviceInfo (dataURL) {
      // 判断是否加载过数据
      if (!this.dataLoaded) {
        const loading = this.$loading.service({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          target: document.querySelector('.main-box')
        })
        setTimeout(() => {
          this.$http.get(dataURL).then(res => {
            const info = res.data
            if (!info.ret) {
              return this.$message.error(info.content)
            }
            this.tableData = info.content
            // 关闭加载动画
            loading.close()
            this.dataLoaded = true
          }).catch(error => {
            console.log(error)
          })
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
</style>

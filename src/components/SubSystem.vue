<template>
  <div>
    <el-input v-model="search"
              placeholder="输入关键词搜索"
              prefix-icon="el-icon-search"
              clearable></el-input>
    <el-table :data="tableData.filter(data => !search ||
      data.deviceName.toLowerCase().includes(search.toLowerCase()) ||
      data.deviceId.toLowerCase().includes(search.toLowerCase()))"
              :max-height="maxHeight">
      <el-table-column prop="deviceId"
                       label="设备编号"></el-table-column>
      <el-table-column prop="deviceName"
                       label="设备名称"></el-table-column>
      <el-table-column prop="deviceStatus"
                       label="设备状态"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      search: '',
      dataLoaded: false,
      dataLoading: false,
      maxHeight: this.$getViewportSize().height - 250
    }
  },
  methods: {
    getDeviceInfo (dataURL, index) {
      // 判断是否加载过数据和是否正在加载数据
      if (!this.dataLoaded && !this.dataLoading) {
        this.dataLoading = true
        const loading = this.$loading.service({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          target: document.querySelectorAll('.deviceInfo-box')[index]
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
            this.dataLoading = false
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
.el-input {
  width: 25%;
}
.el-table {
  margin-top: 15px;
}
</style>

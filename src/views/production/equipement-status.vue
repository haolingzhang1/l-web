<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="生产设备状态">
        <div class="grid" />
      </el-tab-pane>
      <el-tab-pane label="测试设备SPC chart">
        <div class="grid" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'EquipementStatus'
}
</script>

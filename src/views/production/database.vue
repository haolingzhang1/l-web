<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="数据库命名规则及设备简称参考表">
        <div class="grid">

        </div>
      </el-tab-pane>
      <el-tab-pane label="数据库使用方法">
        <div class="grid">
        </div>
      </el-tab-pane>
      <el-tab-pane label="数据库入口">
        <div class="grid">
         

        </div>
       </el-tab-pane>


      </el-tabs>  
    </div>
</template>

<script>
import { getTemplateListByTemplateId } from '../../api/template'
export default {
  name: 'Database',
 }
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>

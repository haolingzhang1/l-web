<template>
  <div class="app-container">
      <el-row>
        <el-button>
          <a href="mailto:sample@fly63.com?subject=test&cc=sample@hotmail.com&subject=主题&body=内容">点击此处发送邮件进行提问（邮箱地址：haoling@intelasers.com）</a>
        </el-button>
      </el-row>
      <el-row>
        <div class="input-div">
            <label for="name">姓名</label>
           <input type="text" name="name" v-model.trim="name">
        </div>  
        <div class="input-div">
            <label for="context">邮件内容</label>
           <input type="text" name="context" v-model="context">
        </div>   
        <el-button type="primary" @click="submit">发送</el-button>
    </el-row>
  </div>
</template>

<script>
import {sendMail} from  '../../api/mail'
export default {
  name: 'IThelpdesk',
  data() {
    return {
      name: '',
      context: '',
    }
  },
  created() {
  },
  methods: {
    submit(){     
      if (!this.name) {
        alert('请填写姓名');
        return;
      } else if (!this.context) {
        alert('请填写内容');
        return;
      } else {
        let formData = {
          name: this.name,
          context: this.context,
        };

      sendMail(formData).then((res) => {
        if (res.success) {
          this.$message.success('发送邮件成功')
        } else {
          this.$message.error('发送邮件失败')
        }
      })




        }
     }
   }
 }


</script>

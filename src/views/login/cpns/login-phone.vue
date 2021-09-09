<template>
  <div class="login-account">
    <el-form :rules="rule" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input
            class="code-item"
            type="password"
            v-model="phone.code"
          ></el-input>
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    const rule = {
      num: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{11}$/,
          message: '手机号必须为11位数字',
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          message: '验证码不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{6}$/,
          message: '验证码为6位数',
          trigger: 'blur'
        }
      ]
    }
    return { phone, rule }
  }
})
</script>

<style scoped>
.code {
  display: flex;
}
.code-item {
  margin-right: 30px;
}
</style>

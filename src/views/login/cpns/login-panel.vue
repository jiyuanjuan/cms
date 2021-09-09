<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span
            ><el-icon><avatar /></el-icon> 账号登录</span
          >
        </template>
        <login-account ref="accountREF" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="pwd-control">
      <el-checkbox v-model="isKeepInfo" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleBtnClick()"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginPhone from './login-phone.vue'
import loginAccount from './login-account.vue'
import { Avatar } from '@element-plus/icons'

export default defineComponent({
  components: {
    Avatar,
    loginPhone,
    loginAccount
  },
  setup() {
    const isKeepInfo = ref(true)
    const accountREF = ref<InstanceType<typeof loginAccount>>()
    const handleBtnClick = () => {
      accountREF.value?.accountAction(isKeepInfo.value)
    }
    return { isKeepInfo, handleBtnClick, accountREF }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 360px;
  margin-bottom: 150px;
}
.title {
  text-align: center;
}
.pwd-control {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 20px;
}
</style>

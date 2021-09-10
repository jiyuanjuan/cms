<template>
  <div class="login-account">
    <el-form :rules="rule" :model="account" ref="formREF">
      <el-form-item label="账号" prop="user">
        <el-input v-model="account.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="account.pwd"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { ElForm } from 'element-plus'
import LocalCache from '@/utils/cache'

import { rule } from '../config/login-account'

export default defineComponent({
  setup() {
    const formREF = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      user: LocalCache.getCache('user') ?? '',
      pwd: LocalCache.getCache('pwd') ?? ''
    })
    const store = useStore()

    const accountAction = (isKeepInfo: boolean) => {
      formREF.value?.validate((valid) => {
        if (valid) {
          if (isKeepInfo) {
            LocalCache.setCache('user', account.user)
            LocalCache.setCache('pwd', account.pwd)
          } else {
            localStorage.clear()
          }
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rule, accountAction, formREF }
  }
})
</script>

<style scoped></style>

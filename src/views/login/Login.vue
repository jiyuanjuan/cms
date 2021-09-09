<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  name: 'login',
  components: {
    LoginPanel
  }
})
</script>

<style scope lang="less">
.login {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: url('../../assets/img/login-bg.svg');
}
</style>

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import globalRegister from './global'
import tRequest from './service'

const app = createApp(App)

// globalRegister(app)

app.use(store).use(router).use(globalRegister)
app.mount('#app')

tRequest.request({
  method: 'GET',
  url: '/get',
  // showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求成功')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独返回成功')
      return res
    }
  }
})

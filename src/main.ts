import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import globalRegister from './global'
// import tRequest from './service'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

// globalRegister(app)

app.use(store).use(router).use(globalRegister)
app.mount('#app')

// interface datatype {
//   data: Record<string, unknown>
//   config: Record<string, unknown>
//   headers: Record<string, unknown>
//   request: any
// }
// tRequest
//   .request<datatype>({
//     method: 'GET',
//     url: '/get'
// showLoading: false,
// interceptors: {
//   requestInterceptor: (config) => {
//     console.log('单独请求成功')
//     return config
//   },
//   responseInterceptor: (res) => {
//     console.log('单独返回成功')
//     return res
//   }
// }
// })
// .then((res: any) => {
//   console.log(res.data)
//   console.log(res)
// })

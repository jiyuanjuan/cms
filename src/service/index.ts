import TRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const tRequest = new TRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      console.log('自定义请求拦截成功')
      return config
    },
    requestInterceptorCatch(err) {
      console.log(err)
      return err
    },
    responseInterceptor(res) {
      console.log('自定义返回拦截成功')
      return res
    },
    responseInterceptorCatch(err) {
      console.log(err)
      return err
    }
  }
})

export default tRequest

import axios from 'axios'

import type { AxiosInstance } from 'axios'
import type { TRequestInterceptors, TRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

const IS_LOADING = true
class TRequest {
  instance: AxiosInstance
  interceptors?: TRequestInterceptors
  Loading?: ILoadingInstance
  showLoading: boolean
  constructor(config: TRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? IS_LOADING
    //用户选择是否传入额外拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //默认拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log(this.showLoading)
        if (this.showLoading === IS_LOADING) {
          this.Loading = ElLoading.service({
            lock: true,
            text: '正在加载中'
          })
        }
        console.log('默认拦截请求成功')
        return config
      },
      (err) => {
        console.log(err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.Loading?.close()
        console.log('默认拦截返回成功')
        return res
      },
      (err) => {
        console.log(err)
        return err
      }
    )
  }

  request<T>(config: TRequestConfig): Promise<T> {
    return new Promise((resolove, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = IS_LOADING
          resolove(res)
        })
        .catch((err) => {
          this.showLoading = IS_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: TRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default TRequest

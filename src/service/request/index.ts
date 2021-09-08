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

  request(config: TRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }
    this.instance
      .request(config)
      .then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        console.log(res)
        this.showLoading = IS_LOADING
      })
      .catch((err) => {
        this.showLoading = IS_LOADING
        return err
      })
  }
}

export default TRequest

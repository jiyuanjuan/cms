import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

interface TRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface TRequestConfig extends AxiosRequestConfig {
  interceptors?: TRequestInterceptors
  showLoading?: boolean
}

export { TRequestInterceptors, TRequestConfig }

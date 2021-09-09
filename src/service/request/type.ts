import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface TRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface TRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TRequestInterceptors
  showLoading?: boolean
}

export { TRequestInterceptors, TRequestConfig }

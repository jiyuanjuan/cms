import tRequest from '../index'
import { IAccount } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return tRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

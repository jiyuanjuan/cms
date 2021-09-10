import { accountLoginRequest } from '@/service/login/login'
import { Module } from 'vuex'

import { IAccount } from '@/service/login/type'
import { IRootState } from '../type'
import { IloginState } from './type'

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '1221',
      userInfo: {}
    }
  },
  mutations: {},
  actions: {
    async accountLoginAction(ctx, payload: IAccount) {
      const loginRequest = await accountLoginRequest(payload)
      console.log(loginRequest)
    }
  }
}

export default loginModule

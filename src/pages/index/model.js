import { loginApi } from '../../services/server';

export default {
  namespace: 'loginModel',
  state: {
    loginList: []
  },
  // effects
  effects: {
    * login({ payload }, { select, call, put }) {
      console.log(payload)
      const { list } = yield select(state => state.loginModel)
      const resp = yield call(loginApi, {
        phone: payload.phone,
        vCode: payload.vCode
      })

      console.log('loginApi resp', resp)
      let loginCheck = false
      if (resp.code === 200) {
        loginCheck = true
        yield put({
          type: 'globalModel/updateLoginStatus',
          payload: {
            loginStatus: true
          }
        })
      }

      yield put({
        type: 'changeList',
        payload: {
          list: payload.list
        }
      })

      return loginCheck
    }
  },
  // reducers
  reducers: {
    changeList(state, action) {
      return {
        ...state,
        loginList: action.payload.list
      }
    }
  }
}
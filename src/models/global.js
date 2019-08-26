import Taro from '@tarojs/taro'

export default {
  namespace: 'globalModel',
  state: {
    loginStatus: false
  },
  effects: {
    * loginCheck({ payload }, { put, select, call }) {
      const { loginStatus } = yield select(state => state.globalModel);
      console.log('global-loginStatus: ', loginStatus);
      if (!loginStatus) {
        Taro.redirectTo({
          url: '/pages/index/index',
          success: function(e) {
            console.log('switchTab success')
          },
          fail: function(e) {
            console.log('switchTab fail')
          },
          complete: function(e) {
            console.log('switchTab complete')
          },
        })
      }
    },
    * updateLoginStatus({ payload }, { put, select, call }) {
      yield put({
        type: 'changeLoginStatus',
        payload: payload.loginStatus,
      });
    }
  },
  reducers: {
    changeLoginStatus(state, action) {
      return {
        ...state,
        loginStatus: action.payload,
      }
    }
  }
}
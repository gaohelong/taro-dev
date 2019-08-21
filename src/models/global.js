export default {
  namespace: 'globalModel',
  state: {
    loginStatus: false
  },
  effects: {
    * loginCheck({ payload }, { put, select, call }) {
      const { loginStatus } = yield select(state => state.globalModel);
      console.log(loginStatus);
      return loginStatus;
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
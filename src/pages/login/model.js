// import { login } from '../services/server';

export default {
  namespace: 'loginModel',
  state: {
    loginIng: false,
    list: []
  },
  // effects
  effects: {
    * login({ payload }, { select, call, put }) {
      console.log(payload)
      const { key, v } = yield select(state => state.homeModel)
      // const { error, result } = yield call(indexApi.getLists, {
      //   key,
      //   v,
      //   ...payload
      // })
      // if (!error) {
      //   yield put({
      //     type: 'updateState',
      //     payload: {
      //       data: result
      //     }
      //   })
      // }

      yield put({
        type: 'updateList',
        payload: {
          list: [1, 2, 3]
        }
      })

      yield put({
        type: 'globalModel/updateLoginStatus',
        payload: true
      })
    }
  },
  // reducers
  reducers: {
    updateList(state, action) {
      return {
        ...state,
        list: action.payload.list
      }
    }
  }
}
// import { login } from '../services/server';

export default {
  namespace: 'articleModel',
  state: {
    list: []
  },
  // effects
  effects: {
    * getLists({ payload }, { select, call, put }) {
      console.log(payload)
      const { key, v } = yield select(state => state.homeModel)

      yield put({
        type: 'updateList',
        payload: {
          list: [1, 2, 3]
        }
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
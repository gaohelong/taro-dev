// import { login } from '../services/server';

export default {
  namespace: 'articleDetailModel',
  state: {
    list: []
  },
  // effects
  effects: {
    * getLists({ payload }, { select, call, put }) {
      console.log(payload)

      yield put({
        type: 'updateList',
        payload: {
          list: payload.list
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
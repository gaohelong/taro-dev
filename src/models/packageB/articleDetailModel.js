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
        type: 'changeList',
        payload: {
          list: payload.list
        }
      })
    },
    // 清除访问数据, 避免内存溢出
    * clearData({ payload }, { select, call, put }) {
      yield put({
        type: 'changeClearData'
      })
    }
  },
  // reducers
  reducers: {
    changeList(state, action) {
      return {
        ...state,
        list: action.payload.list
      }
    },
    changeClearData(state, action) {
      return {
        ...state,
        list: []
      }
    }
  }
}
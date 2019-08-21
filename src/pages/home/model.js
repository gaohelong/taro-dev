import { homeSwiperListApi } from '../../services/server';

export default {
  namespace: 'homeModel',
  state: {
    homeList: [],
    swiperList: []
  },
  // effects
  effects: {
    * getSwiperList({ payload }, { select, call, put }) {
      console.log(payload)
      const { key, v } = yield select(state => state.homeModel)
      const resp = yield call(homeSwiperListApi, {
        page: 1,
        limit: 5
      })

      if (resp.code === 200) {
        yield put({
          type: 'changeSwiperList',
          payload: {
            swiperList: resp.list
          }
        })
      }

      yield put({
        type: 'changeList',
        payload: {
          list: payload.list
        }
      })
    }
  },
  // reducers
  reducers: {
    changeList(state, action) {
      return {
        ...state,
        homeList: action.payload.list
      }
    },
    changeSwiperList(state, action) {
      return {
        ...state,
        swiperList: action.payload.swiperList
      }
    }
  }
}
// import { login } from '../services/server';

export default {
  namespace: 'articleDetailModel',
  state: {
    detail: {}
  },
  // effects
  effects: {
    * getLists({ payload }, { select, call, put }) {
      console.log(payload)

      yield put({
        type: 'changeList',
        payload: {
          detail: {
            title: '文章标题',
            desc: '8月22日，中国队主教练包壮（中）在比赛间隙布置战术。 当日，2019年第20届亚洲女排锦标赛八强战在韩国首尔蚕室综合运动场开赛。在复赛首轮比赛中，中国队以3比0战胜哈萨克斯坦队。 新华社发（李相浩摄）'
          }
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
        detail: action.payload.detail
      }
    },
    changeClearData(state, action) {
      return {
        ...state,
        detail: {}
      }
    }
  }
}
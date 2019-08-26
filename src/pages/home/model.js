import {
  homeGetSwiperListApi, homeGetArticleListApi
} from '../../services/server';

export default {
  namespace: 'homeModel',
  state: {
    homeList: [],
    swiperList: [],
    articleList: [],
    articleListPage: 1,
    articleListEnd: false,
    dotCnt: 0
  },
  // effects
  effects: {
    * getSwiperList({ payload }, { select, call, put }) {
      console.log(payload)
      const { homeList } = yield select(state => state.homeModel)
      const resp = yield call(homeGetSwiperListApi, {
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
    },
    * getArticleList({ payload }, { select, call, put }) {
      const { articleList, articleListPage, dotCnt } = yield select(state => state.homeModel)
      const resp = yield call(homeGetArticleListApi, {
        page: 1,
        limit: 5
      })

      if (resp.code === 200) {
        let limit = 4
        let list = resp.list.slice((articleListPage - 1) * limit, articleListPage * limit)
        let page = articleListPage + 1

        console.log((articleListPage - 1) * limit, articleListPage * limit)
        console.log(list)

        let articleListEnd = false
        console.log(articleList.length,  resp.list.length)
        if (articleList.length === resp.list.length) {
          articleListEnd = true
        }

        let _dotCnt = dotCnt + list.length

        yield put({
          type: 'changeArticleList',
          payload: {
            list: articleList.concat(list),
            articleListEnd: articleListEnd,
            page,
            dotCnt: _dotCnt
          }
        })
      }
    },
    * clearArticleDot({ payload }, { select, call, put }) {
      const { articleList } = yield select(state => state.homeModel)

      let dotCnt = 0
      articleList.forEach((v) => {
        if (payload.id === v.id) {
          v.look = false
        }

        if (v.look) {
          ++dotCnt
        }
      })

      yield put({
        type: 'changeArticleListDot',
        payload: {
          list: articleList,
          dotCnt: dotCnt
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
    },
    changeArticleList(state, action) {
      return {
        ...state,
        articleList: action.payload.list,
        articleListPage: action.payload.page,
        articleListEnd: action.payload.articleListEnd,
        dotCnt: action.payload.dotCnt
      }
    },
    changeArticleListDot(state, action) {
      return {
        ...state,
        articleList: action.payload.list,
        dotCnt: action.payload.dotCnt
      }
    }
  }
}
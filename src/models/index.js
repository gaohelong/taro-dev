import global from './global'
import index from '../pages/index/model' // index 页面的model
import login from '../pages/login/model' // login 页面的model
import articleDetail from './packageB/articleDetailModel' // article detail

// 这里记得export的是数组，不是对象
export default [
  global,
  index,
  login,
  articleDetail
]
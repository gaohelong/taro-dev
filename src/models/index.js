import global from './global' // 全局
import login from '../pages/index/model' // 登陆
import articleDetail from './packageB/articleDetailModel' // 文章详情

// 这里记得export的是数组，不是对象
export default [
  global,
  login,
  articleDetail
]
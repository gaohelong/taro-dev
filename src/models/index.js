import global from './global' // 全局
import login from '../pages/index/model' // 登陆
import home from '../pages/home/model' // 首页
import article from '../pages/article/model' // 文章
import articleDetail from './packageB/articleDetailModel' // 文章详情
import product from '../pages/product/model' // 产品
import user from '../pages/user/model' // 我的

// 这里记得export的是数组，不是对象
export default [
  global,
  login,
  home,
  article,
  articleDetail,
  product,
  user
]
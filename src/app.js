import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import '@tarojs/async-await'
import dva from './utils/dva'
import Index from './pages/index'
import models from './models'
import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})
const store = dvaApp.getStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      'pages/index/index',    // 登陆(打开小程序第一个执行的页面)
      'pages/home/index',     // 首页
      'pages/article/index',  // 文章
      'pages/product/index',  // 产品
      'pages/user/index',     // 我的
      'pages/richtext/index', // 富文本
      'pages/login/index'     // 登陆
    ],
    "subpackages": [
      {
        "root": "pages/packageA/",
        "name": "packA",
        "pages": [
          'pages/logs/index',       // 日志
          'pages/logs/detail',      // 日志列表
          'pages/storage/index',    // 持久化
        ]
      },
      {
        "root": "pages/packageB/",
        "name": "packB",
        "pages": [
          "pages/article/detail/index"    // 文章详情
        ]
      }
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro',
      navigationBarTextStyle: 'black',
      // enablePullDownRefresh: true, // 开启下拉刷新.
      onReachBottomDistance: 60, // 页面上拉触底事件触发时距页面底部距离，单位为 px
    },
    tabBar: {
      list: [
        {
          text: '首页',
          pagePath: 'pages/home/index',
        },
        {
          text: '文章',
          pagePath: 'pages/article/index',
        },
        {
          text: '产品',
          pagePath: 'pages/product/index',
        },
        {
          text: '我的',
          pagePath: 'pages/user/index',
        },
      ]
    },
  }

  async componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

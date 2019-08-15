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
      'pages/index/index',
      'pages/richtext/index',
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro',
      navigationBarTextStyle: 'black',
      // enablePullDownRefresh: true, // 开启下拉刷新.
    },
    tabBar: {
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/index',
        },
        {
          text: '富文本',
          pagePath: 'pages/richtext/index',
        },
        {
          text: '用户',
          pagePath: 'pages/user/index',
        }
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

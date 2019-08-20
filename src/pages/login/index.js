import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import './index.scss'

@connect(({ loginModel, globalModel }) => ({
  ...loginModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '登陆'
  }

  constructor(props) {
    super(props)
    console.log('constructor', props)
    this.state = { // 当前组件state.
      page: 1
    }
  }

  componentWillMount () {
    // console.log('登陆-componentWillMount')

    // 显示tabbar
    // Taro.showTabBar()

    // 显示tabBar某一项的右上角的红点
    Taro.showTabBarRedDot({
      index: 1,
      success: function(e) {
        console.log('showTabBarRedDot success')
      },
      fail: function(e) {
        console.log('showTabBarRedDot fail')
      },
      complete: function(e) {
        console.log('showTabBarRedDot complete')
      },
    })

    // 为tabBar某一项的右上角添加文本
    Taro.setTabBarBadge({
      index: 2,
      text: '99',
      success: function(e) {
        console.log('setTabBarBadge success')
      },
      fail: function(e) {
        console.log('setTabBarBadge fail')
      },
      complete: function(e) {
        console.log('setTabBarBadge complete')
      },
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('componentDidShow', this.props)
  }

  componentDidHide () { }

  /**
   * 获取列表
   */
  async getData(e) {
    console.log(e);
    await this.props.dispatch({
      type: 'loginModel/login',
      payload: {
        page: 2
      }
    })

    const { loginStatus } = this.props
    console.log('login after', loginStatus)
    if (loginStatus) {
      Taro.switchTab({
        url: '/pages/index/index',
        success: function(e) {
          console.log('switchTab success')
        },
        fail: function(e) {
          console.log('switchTab fail')
        },
        complete: function(e) {
          console.log('switchTab complete')
        },
      })
    }
  }

  /**
   * 文章详情
   */
  articleDetail(e) {
    console.log('articleDetail', e)
    Taro.navigateTo({
      url: '/pages/packageB/pages/article/detail/index?id=3',
      success: function(e) {
        console.log('articleDetail success')
      },
      fail: function(e) {
        console.log('articleDetail fail')
      },
      complete: function(e) {
        console.log('articleDetail complete')
      }
    })
  }

  /**
   * 日志列表
   */
  logList(e) {
    console.log('logList', e)
  }

  render () {
    const { page } = this.state
    const { list } = this.props // props与homeModel中的state.

    return (
      <View className='index'>
        <Text onClick={this.getData}>Click me login</Text>
        <View>
          { list.length ? list.map((v, k) => <Text key={k}>{v} - {k}</Text>) : '暂无数据' }
        </View>
        <View className='t-list t-article' onClick={this.articleDetail}>
          文章详情
        </View>
        <View className='t-list t-logs' onClick={this.logList}>
          日志列表
        </View>
      </View>
    )
  }
}

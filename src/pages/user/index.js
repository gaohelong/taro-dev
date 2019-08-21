import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(({ userModel, globalModel }) => ({
  ...userModel,
  ...globalModel
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '用户'
  }

  componentWillMount () {
    // 移除tabBar某一项右上角的文本
    Taro.removeTabBarBadge({
      index: 2,
      success: function(e) {
        console.log('removeTabBarBadge success')
      },
      fail: function(e) {
        console.log('removeTabBarBadge fail')
      },
      complete: function(e) {
        console.log('removeTabBarBadge complete')
      },
    })

    // 登陆状态检测
    const { loginStatus } = this.props
    console.log('home-componentWillMount-loginStatus', loginStatus)
    if (!loginStatus) {
      Taro.redirectTo({
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

    // loading
    Taro.showLoading({ title: 'loading' })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='at-article'>
        我的
      </View>
    )
  }
}

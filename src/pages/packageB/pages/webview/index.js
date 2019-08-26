import Taro, { Component } from '@tarojs/taro'
import { View, Text, WebView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import './index.scss'

@connect(({ globalModel }) => ({
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: 'Webview'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      webViewId: 1
    }
  }

  async componentWillMount () {
    // 获取路由参数
    console.log('router-params', this.$router.params)

    // 登陆状态检测
    await this.props.dispatch({
      type: 'globalModel/loginCheck'
    })
  }

  componentDidMount () { }

  componentWillUnmount () {
    console.log('article detail-componentWillUnmount')

    // 清除访问数据, 避免内存溢出
    // this.props.dispatch({
    //   type: 'articleDetailModel/clearData'
    // })
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('state', this.state);
    console.log('props', this.props);

    const { page } = this.state
    const { detail } = this.props // props与calendarModel、globalModel中的state.

    return (
      <View className='detailContainer'>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <WebView src='https://weixin.qq' />
          </View>
        </View>
      </View>
    )
  }
}

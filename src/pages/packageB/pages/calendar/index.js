import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import { AtCalendar } from 'taro-ui'
import './index.scss'

@connect(({ calendarModel, globalModel }) => ({
  ...calendarModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '日历'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      calendarId: 1
    }
  }

  componentWillMount () {
    // 获取路由参数
    console.log('router-params', this.$router.params)

    // 登陆状态检测
    const { loginStatus } = this.props
    console.log('packageB-calendar-componentWillMount-loginStatus', loginStatus)
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
  }

  componentDidMount () { }

  componentWillUnmount () {
    console.log('article detail-componentWillUnmount')

    // 清除访问数据, 避免内存溢出
    this.props.dispatch({
      type: 'articleDetailModel/clearData'
    })
  }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 点击日期
   */
  dayClick (event) {
    console.log(event)

    // 消息提示框
    Taro.showToast({
      title: `你点击的日期是: ${event.value}`,
      icon: 'none',
      duration: 2000
    })
  }

  render () {
    console.log('state', this.state);
    console.log('props', this.props);

    const { page } = this.state
    const { detail } = this.props // props与calendarModel、globalModel中的state.

    return (
      <View className='detailContainer'>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <AtCalendar onDayClick={this.dayClick.bind(this)} />
          </View>
        </View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import './index.scss'

@connect(({ articleModel, globalModel }) => ({
  ...articleModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      article_page: 1
    }
  }

  componentWillMount () {
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

  /**
   * 获取列表
   */
  async getData(e) {
    console.log(e);
    await this.props.dispatch({
      type: 'articleModel/getLists',
      payload: {
        page: 2
      }
    })
  }

  render () {
    const { page } = this.state
    const { list } = this.props // props与homeModel中的state.

    return (
      <View className='index'>
        <Text onClick={this.getData}>Article</Text>
        <View>
          { list.length ? list.map((v, k) => <Text key={k}>{v} - {k}</Text>) : '暂无数据' }
        </View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import { removeTabBarBadge } from '../../utils/utils'
import './index.scss'

@connect(({ productModel, globalModel }) => ({
  ...productModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '产品'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      product_page: 1
    }
  }

  async componentWillMount () {
    // 登陆状态检测
    await this.props.dispatch({
      type: 'globalModel/loginCheck'
    })

    // 移除tabBar某一项右上角的文本
    removeTabBarBadge(2)

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
      type: 'productModel/getLists',
      payload: {
        page: 2
      }
    })
  }

  render () {
    const { page } = this.state
    const { list } = this.props // props与productModel、globalModel中的state.

    return (
      <View className='index'>
        <Text onClick={this.getData}>Product</Text>
        <View>
          { list.length ? list.map((v, k) => <Text key={k}>{v} - {k}</Text>) : '暂无数据' }
        </View>
      </View>
    )
  }
}

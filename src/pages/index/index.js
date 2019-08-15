import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import './index.scss'

@connect(({ homeModel }) => ({
  ...homeModel,
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = { // 当前组件state.
      page: 1
    }
  }

  componentWillMount () { }

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
      type: 'homeModel/getLists',
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
        <Text onClick={this.getData}>Click me</Text>
        <View>
          { list.length ? list.map((v, k) => <Text key={k}>{v} - {k}</Text>) : '暂无数据' }
        </View>
      </View>
    )
  }
}

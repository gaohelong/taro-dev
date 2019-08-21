import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import './index.scss'

@connect(({ articleDetailModel, globalModel }) => ({
  ...articleDetailModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '文章详情'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      detail_id: 1
    }
  }

  componentWillMount () {
    // 获取路由参数
    console.log('router-params', this.$router.params)
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
   * 获取列表
   */
  async getData(e) {
    console.log(e);
    await this.props.dispatch({
      type: 'articleDetailModel/getLists',
      payload: {
        list: ['article', 'detail']
      }
    })
  }

  render () {
    console.log('state', this.state);
    console.log('props', this.props);

    const { page } = this.state
    const { list } = this.props // props与articleDetailModel、globalModel中的state.

    return (
      <View className='index'>
        <Text onClick={this.getData}>getLists click me</Text>
        <View>
          { list.length ? list.map((v, k) => <Text key={k}>{v} - {k}</Text>) : '暂无数据' }
        </View>
      </View>
    )
  }
}

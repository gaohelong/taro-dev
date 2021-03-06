import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import { AtButton } from 'taro-ui'
import './index.scss'

@connect(({ articleDetailModel, globalModel }) => ({
  ...articleDetailModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: 'dva分包-文章详情'
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
      type: 'articleDetailModel/getLists'
    })
  }

  render () {
    console.log('state', this.state);
    console.log('props', this.props);

    const { page } = this.state
    const { detail } = this.props // props与articleDetailModel、globalModel中的state.

    return (
      <View className='detaiContainer'>
        <View className='at-row mgn-t-20'>
          <View className='at-col at-col-12'>
            <AtButton type='primary' size='normal' onClick={this.getData.bind(this)}>获取分包文章数据</AtButton>
          </View>
        </View>
        { detail 
          ? (
              <View className='at-row'>
                <View className='at-col at-col-12 articleDetail'>
                  <View className='at-col at-col-12 title'>{detail.title}</View>
                  <View className='at-col at-col-12 desc'>{detail.desc}</View>
                </View>
              </View>
            )
          : ''
        }
      </View>
    )
  }
}

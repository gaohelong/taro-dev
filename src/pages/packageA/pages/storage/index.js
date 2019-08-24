import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInput, AtButton } from 'taro-ui'
// import {  } from '../../components'
import './index.scss'

@connect(({ globalModel }) => ({
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '持久化-数据'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      storageId: 1,
      storageKey: '',
      storageVal: '',
      getStorageKey: '',
      showContent: ''
    }
  }

  componentWillMount () {
    // 获取路由参数
    console.log('router-params', this.$router.params)
  }

  componentDidMount () { }

  componentWillUnmount () {
    console.log('storage-componentWillUnmount')

    // 清除访问数据, 避免内存溢出
  }

  componentDidShow () { }

  componentDidHide () { }

  inputHandleChange (type, value) {
    console.log(value, type)

    if (type === 'setKey') {
      this.setState({
        storageKey: value
      })
    } else if (type === 'setVal') {
      this.setState({
        storageVal: value
      })
    } else if (type === 'getKey') {
      this.setState({
        getStorageKey: value
      })
    }

    return value
  }

  setStorage (event) {
    console.log('setStorage', event)
    const { storageKey, storageVal } = this.state
    Taro.setStorageSync(storageKey, storageVal)
  }

  getStorage (event) {
    console.log('getStorage', event)
    const { getStorageKey, showContent } = this.state
    const val = Taro.getStorageSync(getStorageKey)

    this.setState({
      showContent: val
    })
  }

  clearStorage (event) {
    Taro.clearStorageSync()

    // 消息提示框
    Taro.showToast({
      title: '清理成功',
      icon: 'none',
      duration: 2000
    })
  }

  render () {
    console.log('state', this.state);
    console.log('props', this.props);

    // const { showContent } = this.state

    return (
      <View className='detaiContainer'>
        <View className='at-row panel'>
          <View className='at-col at-col-12 title'>设置</View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <AtInput
              name='storageKey'
              title='Key'
              type='text'
              placeholder='请输入key'
              value={this.state.storageKey}
              onChange={this.inputHandleChange.bind(this, 'setKey')}
            />
          </View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <AtInput
              name='storageVal'
              title='Val'
              type='text'
              placeholder='请输入val'
              value={this.state.storageVal}
              onChange={this.inputHandleChange.bind(this, 'setVal')}
            />
          </View>
        </View>
        <View className='at-row' style="margin-top: 20PX;">
          <View className='at-col at-col-12'>
            <AtButton type='primary' size='normal' onClick={this.setStorage.bind(this)}>设置</AtButton>
          </View>
        </View>
        <View className='row-blank-interval-30'>
        </View>
        <View className='at-row panel'>
          <View className='at-col at-col-12 title'>获取</View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <AtInput
              name='getStorageKey'
              title='Key'
              type='text'
              placeholder='请输入key'
              value={this.state.getStorageKey}
              onChange={this.inputHandleChange.bind(this, 'getKey')}
            />
          </View>
        </View>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <AtInput
              editable={false}
              name='showContent'
              title='获取到的值'
              type='text'
              value={this.state.showContent}
            />
          </View>
        </View>
        <View className='at-row' style="margin-top: 20PX;">
          <View className='at-col at-col-12'>
            <AtButton type='primary' size='normal' onClick={this.getStorage.bind(this)}>获取</AtButton>
          </View>
        </View>
        <View className='row-blank-interval-30'>
        </View>
        <View className='at-row panel'>
          <View className='at-col at-col-12 title'>清理本地持久化缓存</View>
        </View>
        <View className='at-row' style="margin-top: 20PX;">
          <View className='at-col at-col-12'>
            <AtButton type='primary' size='normal' onClick={this.clearStorage.bind(this)}>清理</AtButton>
          </View>
        </View>
      </View>
    )
  }
}

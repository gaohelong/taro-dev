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

  async componentWillMount () {
    // 登陆状态检测
    await this.props.dispatch({
      type: 'globalModel/loginCheck'
    })

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

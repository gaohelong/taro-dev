import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { 
  AtForm, AtInput, AtButton, AtMessage, AtModal, AtModalHeader, AtModalContent, AtModalAction
} from 'taro-ui'
import './index.scss'

@connect(({ loginModel, globalModel }) => ({
  ...loginModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '登陆'
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      loginPage: 1,
      phone: '',
      vCode: '',
      vCode: {
        title: '获取验证码',
        countdownTitle: '',
        duration: 10,
        current: 10,
        ing: false
      },
      atModal: {
        isOpened: false,
        title: '友情提示',
        cancelText: '关闭',
        content: ''
      }
    }
  }

  componentWillMount () {
    // console.log('首页-componentWillMount')
    // Taro.hideTabBar()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    const { loginStatus } = this.props
    console.log('index-componentDidShow', loginStatus)
    if (loginStatus) {
      Taro.switchTab({
        url: '/pages/user/index',
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

  componentDidHide () { }

  /**
   * 获取列表
   */
  async getData(e) {
    console.log(e);
    await this.props.dispatch({
      type: 'loginModel/getLists',
      payload: {
        page: 2
      }
    })
  }

  /**
   * 手机号input
   */
  phoneProc (value) {
    this.setState({
      phone: value
    })

    return value
  }

  /**
   * 验证码input
   */
  vcodeProc (value) {
    this.setState({
      vcode: value
    })

    return value
  }

  /**
   * 获取验证码
   */
  getVCode () {
    const { vCode, phone } = this.state
    console.log(phone)
    console.log(vCode.ing)

    if (vCode.ing) {
      return
    }

    if (!phone) {
      /* Message 消息通知
      Taro.atMessage({
        'message': '请输入手机号',
        'type': 'error',
      })
      */

      /* 打开模态窗口 */
      this.setState({
        atModal: {
          isOpened: true,
          title: '友情提示',
          cancelText: '关闭',
          content: '请输入手机号'
        }
      })

      return;
    }

    this.setState(prevState => {
      const vCode = prevState.vCode
      vCode.ing = true
      return {
        vCode: vCode
      }
    })

    let _clearInterval
    let _this = this
    _clearInterval = setInterval(() => {
      if (_this.state.vCode.current === 1) {
        _this.setState(prevState => {
          const vCode = prevState.vCode
          vCode.current = vCode.duration
          vCode.countdownTitle = ''
          vCode.ing = false
          return {
            vCode: vCode
          }
        })
        return clearInterval(_clearInterval)
      }

      _this.setState(prevState => {
        const vCode = prevState.vCode
        vCode.current = --vCode.current
        vCode.countdownTitle = `${vCode.current} s`
        return {
          vCode: vCode
        }
      })
    }, 1000)
  }

  /**
   * 关闭模态窗
   */
  closeModal () {
    this.setState(prevState => {
      const atModal = prevState.atModal
      atModal.isOpened = false
      return {
        atModal: atModal
      }
    })
  }

  /**
   * 登陆
   */
  loginProc (event) {
    console.log(event)

    Taro.switchTab({
      url: '/pages/home/index',
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

  onReset (event) {
    console.log(event)
  }

  render () {
    const { loginPage, vCode, atModal } = this.state
    const { list } = this.props // props与loginModel中的state.

    console.log(this.state)

    return (
      <View className='loginForm'>
        <AtMessage />

        <AtForm
          onSubmit={this.loginProc.bind(this)}
        >
          <AtInput
            name='phone'
            title='手机号'
            type='phone'
            maxLength='11'
            placeholder='请输入'
            value={this.state.phone}
            onChange={this.phoneProc.bind(this)}
          >
            <View className='loginGetVcode' onClick={this.getVCode}>
              { !vCode.ing ? vCode.title : vCode.countdownTitle }
            </View>
          </AtInput>
          <AtInput
            name='vcode'
            title='验证码'
            type='number'
            maxLength='4'
            placeholder='请输入'
            value={this.state.vcode}
            onChange={this.vcodeProc.bind(this)}
          />
          <View className='loginBtn'>
            <AtButton formType='submit'>登陆</AtButton>
          </View>
        </AtForm>

        <AtModal
          isOpened={atModal.isOpened}
          title={atModal.title}
          cancelText={atModal.cancelText}
          onClose={this.closeModal.bind(this)}
          onCancel={this.closeModal.bind(this)}
          onConfirm={this.closeModal.bind(this)}
          content={atModal.content}
        />
      </View>
    )
  }
}

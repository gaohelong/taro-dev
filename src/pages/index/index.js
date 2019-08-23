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
      vCodeInfo: {
        title: '获取验证码',
        countdownTitle: '重新获取(6s)',
        duration: 6,
        current: 6,
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

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    const { loginStatus } = this.props
    console.log('index-componentDidShow-loginStatus', loginStatus)
  }

  componentDidHide () { }

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
  vCodeProc (value) {
    this.setState({
      vCode: value
    })

    return value
  }

  /**
   * 获取验证码
   */
  getVCode () {
    const { vCodeInfo, phone } = this.state
    console.log(phone)
    console.log(vCodeInfo.ing)

    if (vCodeInfo.ing) {
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
      const vCodeInfo = prevState.vCodeInfo
      vCodeInfo.ing = true
      return {
        vCodeInfo: vCodeInfo
      }
    })

    let _clearInterval
    let _this = this
    _clearInterval = setInterval(() => {
      if (_this.state.vCodeInfo.current === 1) {
        _this.setState(prevState => {
          const vCodeInfo = prevState.vCodeInfo
          vCodeInfo.current = vCodeInfo.duration
          vCodeInfo.countdownTitle = `重新获取(${vCodeInfo.current}s)`
          vCodeInfo.ing = false
          return {
            vCodeInfo: vCodeInfo
          }
        })
        return clearInterval(_clearInterval)
      }

      _this.setState(prevState => {
        const vCodeInfo = prevState.vCodeInfo
        vCodeInfo.current = --vCodeInfo.current
        vCodeInfo.countdownTitle = `重新获取(${vCodeInfo.current}s)`
        return {
          vCodeInfo: vCodeInfo
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
  async loginProc (event) {
    console.log(event)
    const { phone, vCode } = this.state
    const resp = await this.props.dispatch({
      type: 'loginModel/login',
      payload: {
        phone: phone,
        vCode: vCode,
        list: ['login', 'list']
      }
    })

    console.log(resp)

    if (resp) {
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
    } else {
      this.setState({
        atModal: {
          isOpened: true,
          title: '友情提示',
          cancelText: '关闭',
          content: '手机号或验证码错误'
        }
      })
    }
  }

  render () {
    const { loginPage, vCodeInfo, atModal } = this.state
    const { list } = this.props // props与loginModel中的state.

    console.log('render-', this.state)
    console.log('render-', this.props)

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
              { !vCodeInfo.ing ? vCodeInfo.title : vCodeInfo.countdownTitle }
            </View>
          </AtInput>
          <AtInput
            name='vcode'
            title='验证码'
            type='number'
            maxLength='4'
            placeholder='请输入'
            value={this.state.vcode}
            onChange={this.vCodeProc.bind(this)}
          />
          <View className='loginBtn'>
            <AtButton type="primary" size="normal" formType='submit'>登陆</AtButton>
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

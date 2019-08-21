import Taro, { Component } from '@tarojs/taro'
import {
  Swiper, SwiperItem, View, Image, Navigator, Text
} from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import './index.scss'

@connect(({ homeModel, globalModel }) => ({
  ...homeModel,
  ...globalModel
}))
class Index extends Component {
  // 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项。
  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    console.log(props)
    this.state = { // 当前组件state.
      homePage: 1
    }
  }

  async componentWillMount () {
    // console.log('首页-componentWillMount')
    // Taro.hideTabBar()

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

    // 第一次访问fetch data
    await this.props.dispatch({
      type: 'homeModel/getSwiperList',
      payload: {
        list: ['home', 'list']
      }
    })

    await this.props.dispatch({
      type: 'homeModel/getArticleList'
    })

    // close loading
    setTimeout(() => {
      Taro.hideLoading()
    }, 1500)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 上拉加载
  async onReachBottom () {
    const { articleListEnd } = this.props

    if (articleListEnd) {
      // modal消息提示框
      // Taro.showModal({
      //   title: '友情提示',
      //   content: '暂无最新文章',
      //   showCancel: false,
      //   confirmText: '关闭'
      // })

      // 消息提示框
      Taro.showToast({
        title: '暂无最新文章',
        icon: 'none',
        duration: 2000
      })

      return
    }

    // loading
    Taro.showLoading({ title: 'loading' })

    setTimeout(async () => {
      await this.props.dispatch({
        type: 'homeModel/getArticleList'
      })
    }, 3000)

    // close loading
    setTimeout(() => {
      Taro.hideLoading()
    }, 1500)
  }

  // 监听用户点击页面内转发按钮
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }

    return {
      title: '首页',
      path: '/page/home/index'
    }
  }

  render () {
    const { homePage } = this.state
    const {
      swiperList, articleList
    } = this.props // props与homeModel、globalModel中的state.

    console.log('render-', this.state)
    console.log('render-', this.props)

    return (
      <View className='publicContainer'>
        <View className='homeSwiperWrap'>
          <Swiper
            className='homeSwiper'
            indicatorColor='#999'
            indicatorActiveColor='#fff'
            vertical={false}
            circular
            indicatorDots
            autoplay
          >
            {
              swiperList.map((item) => {
                return (
                  <Navigator url={item.url} key={`swiper${item.id}`}>
                    <SwiperItem>
                      <Image src={item.img} className='homeSwiperImg' />
                    </SwiperItem>
                  </Navigator>
                )
              })
            }
          </Swiper>
        </View>
        {
          articleList.map(item => {
            return (
              <Navigator url={item.url} key={`homeArticleList${item.id}`}>
                <View className='at-row'>
                  <View className='at-col at-col-12 homeArticleList'>
                    <View className='at-col at-col-12 title one-ellipsis'>{item.title}</View>
                    <View className='at-col at-col-12 desc multi-ellipsis'>{item.desc}</View>
                  </View>
                </View>
              </Navigator>
            )
          })
        }
      </View>
    )
  }
}

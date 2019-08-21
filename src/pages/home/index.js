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

  constructor(props) {
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

    // fetch data
    await this.props.dispatch({
      type: 'homeModel/getSwiperList',
      payload: {
        list: ['home', 'list']
      }
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

  render () {
    const { homePage } = this.state
    const { swiperList } = this.props // props与homeModel、globalModel中的state.

    console.log('render-', this.state)
    console.log('render-', this.props)

    return (
      <View className='publicContainer'>
        <View className='homeSwiper'>
          <Swiper
            className='test-h'
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
      </View>
    )
  }
}

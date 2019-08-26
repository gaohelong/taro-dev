import Taro, { Component } from '@tarojs/taro'
import {
  Swiper, SwiperItem, View, Image, Navigator, Text
} from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {  } from '../../components'
import { setTabBarBadge, showTabBarRedDot, navigateTo } from '../../utils/utils'
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
    await this.props.dispatch({
      type: 'globalModel/loginCheck'
    })

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

    const { dotCnt } = this.props

    // 显示tabBar某一项的右上角的红点
    showTabBarRedDot(2)

    // 为tabBar某一项的右上角添加文本
    if (dotCnt) {
      setTabBarBadge(0, dotCnt)
    }

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

      // 为tabBar某一项的右上角添加文本
      const { dotCnt } = this.props
      if (dotCnt) {
        setTabBarBadge(0, dotCnt)
      }
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

  /**
   * 跳转到文章详情
   */
  async goToArticleDetail (item) {
    console.log(item)
    
    // 清除空点
    await this.props.dispatch({
      type: 'homeModel/clearArticleDot',
      payload: {
        id: item.id
      }
    })

    // 为tabBar某一项的右上角添加文本
    const { dotCnt } = this.props
    if (dotCnt) {
      setTabBarBadge(0, dotCnt)
    }

    // 跳转
    navigateTo(item.url)
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
            autoplay={false}
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
              <View className='at-row' key={`homeArticleList${item.id}`} onClick={this.goToArticleDetail.bind(this, item)}>
                <View className='at-col at-col-12 homeArticleList'>
                  {
                    item.look ? <View className='dot'>.</View> : ''
                  }
                  <View className='at-col at-col-12 title one-ellipsis'>{item.title}</View>
                  <View className='at-col at-col-12 desc multi-ellipsis'>{item.desc}</View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

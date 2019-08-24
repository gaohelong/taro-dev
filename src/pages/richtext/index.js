import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import WxParse from '../../components/wxParse/wxParse'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'WxParse 使用示例',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  componentWillMount () {
    // 隐藏tabBar某一项的右上角的红点
    Taro.hideTabBarRedDot({
      index: 1,
      success: function(e) {
        console.log('hideTabBarRedDot success')
      },
      fail: function(e) {
        console.log('hideTabBarRedDot fail')
      },
      complete: function(e) {
        console.log('hideTabBarRedDot complete')
      },
    })
  }

  componentDidMount () {
    // 单行测试.
    // const article = '<div>2017-05-07&nbsp;&nbsp;&nbsp;这是作者</div>'
    // WxParse.wxParse('article', 'html', article, this.$scope, 5)

    let article = '<p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    红米Note 8、红米Note 8 Pro将于8月29日发布，除此之外本次发布会还有新品。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    8月24日消息，小米笔记本官方微博宣布，RedmiBook 14增强版将于8月29日正式发布。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    官方强调，RedmiBook新品就是要将性价比带给用户，要将性能更进一步，要让你拥有多彩的选择，暗示新款笔记本不仅拥有极高的性价比，而且性能会进一步提升，同时可能会有多种配色提供。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    小米集团副总裁、Redmi品牌总经理卢伟冰表示，做Redmi笔记本，我也很较真。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    根据官方披露的信息，RedmiBook新品仍将采用14英寸显示屏，分辨率预计为1080P。遗憾的是，处理器暂时还不得而知。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    值得注意的是，本次发布会除了红米Note 8系列、RedmiBook 14增强版之外，还将推出Redmi旗下首款互联网电视，它采用70英寸巨屏，其slogan是“大屏大智慧”。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    总而言之，本次发布会干货满满，值得期待。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><img alt="RedmiBook 14增强版宣布：8月29日发" src="http://cms-bucket.ws.126.net/2019/08/24/3b2d17dda02044ae8a29c46887f91279.jpeg" width="271" height="606"/></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><img alt="RedmiBook 14增强版宣布：8月29日发" src="http://cms-bucket.ws.126.net/2019/08/24/1435912bd36d465db3842f9bd170c9db.jpeg" width="268" height="409"/><a href="http://newgame.17173.com/game-info-4054560.html" target="_blank" style="color: rgb(238, 22, 0);"><img src="https://i.17173cdn.com/0561y4/YWxqaGBf/gamebase/game-cover-square/YjXhcSbnparemCh.png!a-3-240x.png" width="45" height="45" alt="梦幻西游三维版" class=""/></a></p><p><br/></p>'
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='richtextDetail'>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}

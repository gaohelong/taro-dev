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

    let article = '<p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>网易汽车8月15日报道&nbsp;</strong>作为国内最老牌的<a href="http://product.auto.163.com/rank/index_hotIndices_hezi.html" title="合资" target="_blank" style="color: rgb(15, 107, 153); text-decoration-line: none;">合资</a>大厂之一，广汽<a href="http://product.auto.163.com/brand/1688.html#LT4001" title="本田" style="color: rgb(15, 107, 153); text-decoration-line: none;">本田</a>虽然已经有了<a href="http://product.auto.163.com/series/18539.html#LT4001" title="冠道" style="color: rgb(15, 107, 153); text-decoration-line: none;">冠道</a>和缤智，但在最诱人的紧凑型<a href="http://product.auto.163.com/cartype/suv/" title="SUV" style="color: rgb(15, 107, 153); text-decoration-line: none;">SUV</a>市场上，却一直都是一片空白，看着兄弟<a href="http://product.auto.163.com/" title="车型" target="_blank" style="color: rgb(15, 107, 153); text-decoration-line: none;">车型</a>风风光光了十几年之后，广汽本田终于迎来了属于自己的紧凑型SUV，按照广本的口碑和实力来看，这款车应该不会让人失望。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB032DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p class="f_center" style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; color: rgb(64, 64, 64); text-align: center; white-space: normal; background-color: rgb(255, 255, 255);"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://cms-bucket.ws.126.net/2019/08/14/bd4116f7f46a4713bf35a9ac1edbdab7.jpeg?imageView&thumbnail=550x0"/><br/></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><br/></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>※&nbsp;</strong><strong>广汽本田BREEZE</strong></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    目前这款新车曝出的信息不多，仅有几张申报图可供参考，下面我们就以申报图为依据，跟大家聊聊这款新车型。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB042DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>※&nbsp;</strong><strong>标准的新本田&nbsp;</strong><strong>很帅气</strong></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    从申报图上看，BREEZE的车头具有典型的新本田风格，和新雅阁如出一辙，十分帅气的同时，也完全符合本田在设计年轻化上的追求和思路。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB052DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><table width="600"><thead><tr style="font-size: 12px;" class="firstRow"><td colspan="5" style="font-size: 16px; margin: 0px; padding: 0px; border-width: initial; border-style: none; border-color: initial; text-align: center; color: rgb(255, 255, 255); background-color: rgb(222, 62, 62); font-weight: bold;">                车身尺寸对比表</td></tr><tr style="font-size: 12px;"><td style="font-size: 16px; margin: 0px; padding: 0px 5px; min-width: 80px; border-width: initial; border-style: none; border-color: initial; text-align: center; color: rgb(255, 255, 255); background-color: rgb(222, 62, 62); white-space: nowrap;">                车型</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; color: rgb(255, 255, 255); background-color: rgb(222, 62, 62);">                长(mm)</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; color: rgb(255, 255, 255); background-color: rgb(222, 62, 62);">                宽(mm)</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; color: rgb(255, 255, 255); background-color: rgb(222, 62, 62);">                高(mm)</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; color: rgb(255, 255, 255); background-color: rgb(222, 62, 62);">                轴距(mm)</td></tr></thead><tbody><tr style="font-size: 12px;"><td style="font-size: 16px; margin: 0px; padding: 0px 8px; border-width: initial; border-style: none; border-color: initial; text-align: center; font-weight: bold; background-color: rgb(243, 243, 243);">                广汽本田BREEZE</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243);">                4634</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243);">                1855</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243);">                1679</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243);">                2661</td></tr><tr style="font-size: 12px;"><td style="font-size: 16px; margin: 0px; padding: 0px 8px; border-width: initial; border-style: none; border-color: initial; text-align: center; font-weight: bold; background-color: rgb(231, 231, 231);"><a target="_blank" href="http://product.auto.163.com/series/2223.html#0008C71" style="color: rgb(64, 64, 64); text-decoration-line: none;">RAV4荣放</a></td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                4600</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                1845</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                1690</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                2660</td></tr><tr style="font-size: 12px;"><td style="font-size: 16px; margin: 0px; padding: 0px 8px; border-width: initial; border-style: none; border-color: initial; text-align: center; font-weight: bold; background-color: rgb(243, 243, 243);"><a target="_blank" href="http://product.auto.163.com/series/2358.html#0008C71" style="color: rgb(64, 64, 64); text-decoration-line: none;">奇骏</a></td><td class="td_red" style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243); color: rgb(225, 58, 59);">                4675</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243);">                1820</td><td class="td_red" style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243); color: rgb(225, 58, 59);">                1722</td><td class="td_red" style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(243, 243, 243); color: rgb(225, 58, 59);">                2706</td></tr><tr style="font-size: 12px;"><td style="font-size: 16px; margin: 0px; padding: 0px 8px; border-width: initial; border-style: none; border-color: initial; text-align: center; font-weight: bold; background-color: rgb(231, 231, 231);"><a target="_blank" href="http://product.auto.163.com/series/2005.html#0008C71" style="color: rgb(64, 64, 64); text-decoration-line: none;">东风本田CR-V</a></td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                4585</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                1855</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                1679</td><td style="font-size: 16px; margin: 0px; padding: 0px 5px; border-width: initial; border-style: none; border-color: initial; text-align: center; background-color: rgb(231, 231, 231);">                2660</td></tr></tbody><tfoot><tr style="font-size: 12px;"><td colspan="5" style="font-size: 14px; margin: 0px; padding: 0px 0.8em 0px 0px; border-width: initial; border-style: none; border-color: initial; text-align: right; background-color: rgb(243, 243, 243);"><a href="http://product.auto.163.com/#0008C711" style="color: rgb(121, 121, 121); text-decoration-line: none;">网易汽车</a></td></tr></tfoot></table><p><a href="http://product.auto.163.com/config_compare/000CAZDF,000BeKfA,000CEZTF.html#0008C714" class="cars_compare_table_links" style="color: rgb(15, 107, 153); font-size: 16px;">点击查看车型完整配置</a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    BREEZE的车身尺寸为4634/1855/1679mm，轴距2661mm，在同级中属于比较主流的尺寸，和兄弟车型相比长度和轴距有微小差别。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB062DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB072DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB082DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB092DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    无论整体还是细节上，广汽本田BREEZE都具有自己的特征和辨识设计，不仅明确了自己的标签和性格，更减小了消费者难辨雌雄的难度。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB0A2DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>※&nbsp;</strong><strong>汽油和混动一起上</strong></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    此次申报图并没有内饰部分，我们直接说说动力吧，这里几乎没什么悬念，汽油机版本是1.5T，匹配6MT和CVT变速箱，同时2.0L混动版也会一同上市，两种动力都提供两驱和四驱车型，从目前的消息看，汽油版的工信部百公里油耗在6.4-7.3L之间，BREEZE的上市预计最快在年内，广州车展应该会成为首次公开亮相，所以不用担心，它的排放肯定都是国六标准。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB0B2DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>※&nbsp;</strong><strong>新技术留悬念</strong></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    虽然目前还没有具体消息，但从厂商得到的消息是，广汽本田BREEZE身上会有不少本田新技术在国内的首次应用，大胆预测一下，自动驾驶和降噪应该是大家最希望看到的，多媒体互联则应该是最应该升级的。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>※&nbsp;</strong><strong>终于补齐了SUV</strong>&nbsp;<strong>阵营</strong></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    对于广汽本田来说，BREEZE的到来完善了自家的SUV产品序列，从小型、紧凑型到中型SUV，在这三个合资品牌SUV的主要细分市场中做到了全覆盖，特别是紧凑型SUV，是合资品牌最早开始发力的细分市场，广汽本田在缺席了多年之后，终于迎来了属于自己的车型，对于广汽本田来说，BREEZE具有不可替代的战略意义，更是品牌销量新的增长点和突破点。</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB0C2DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p>    广汽本田小型SUV缤智</p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><a href="http://auto.163.com/photoview/2DGV0008/204992.html" class="f_center" style="color: rgb(15, 107, 153); text-decoration-line: none; text-align: center; text-indent: 0px;"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://pic-bucket.ws.126.net/photo/0008/2019-08-14/EMITQB0D2DGV0008NOS.jpg?imageView&thumbnail=550x0"/></a></p><p>    广汽本田中型SUV冠道</p><p class="f_center" style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; color: rgb(64, 64, 64); text-align: center; white-space: normal; background-color: rgb(255, 255, 255);"><img alt="终于等到你 解读广本全新紧凑型SUV BREEZE" src="http://cms-bucket.ws.126.net/2019/08/14/8afcd372790841038fde0e29189aae55.jpeg?imageView&thumbnail=550x0"/><br/></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);"><strong>※&nbsp;</strong><strong>有理由期待青出于蓝胜于蓝</strong></p><p style="margin-top: 32px; margin-bottom: 0px; padding: 0px; font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 18px; line-height: 32px; font-family: &quot;Microsoft Yahei&quot;; text-indent: 2em; color: rgb(64, 64, 64); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">    以往的口碑来看，广汽本田一直都是本田在华合资企业中最值得信赖、最让人放心的厂商，无论是雅阁、飞度、奥德赛，都是同级中的明星车型，只要给他们车型，几乎都不会让人失望，所以这一次我们也有理由相信，虽然来得晚了一些，但和兄弟车型相比，BREEZE完全有可能做到青出于蓝胜于蓝。</p><p><br/></p>'
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}

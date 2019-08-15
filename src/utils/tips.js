import Taro from '@tarojs/taro'

/**
 * 提示与加载工具类
 */
export default class Tips {
 isLoading = false

  /**
   * 信息提示
   */
  toast (title) {
    Taro.showToast({
      title: title,
      icon: 'none',
      mask: true,
      duration: 1500
    })
  }

  /**
   * 弹出加载提示
   */
  loading (title = '加载中', force = false) {
    if (this.isLoading && !force) {
      return
    }
    this.isLoading = true
    if (Taro.showLoading) {
      Taro.showLoading({
        title: title,
        mask: true
      })
    } else {
      Taro.showNavigationBarLoading()
    }
  }

  /**
   * 加载完毕
   */
  loaded () {
    let duration = 0
    if (this.isLoading) {
      this.isLoading = false
      if (Taro.hideLoading) {
        Taro.hideLoading()
      } else {
        Taro.hideNavigationBarLoading()
      }
      duration = 500
    }
    // 隐藏动画大约500ms，避免后面直接toast时的显示bug
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  /**
   * 弹出提示框
   */
  success (title, duration = 1500) {
    Taro.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration
    })

    if (duration > 0) {
      return new Promise(resolve => setTimeout(resolve, duration));
    }
  }
}
import Taro, { Component } from '@tarojs/taro'

/**
 * 为 tabBar 某一项的右上角添加文本
 */
export const setTabBarBadge = (index, text) => {
  Taro.setTabBarBadge({
    index: index,
    text: `${text}`,
    success: function(e) {
      console.log('setTabBarBadge success')
    },
    fail: function(e) {
      console.log('setTabBarBadge fail')
    },
    complete: function(e) {
      console.log('setTabBarBadge complete')
    },
  })
}

/**
 * 显示 tabBar 某一项的右上角的红点
 */
export const showTabBarRedDot = (index) => {
  Taro.showTabBarRedDot({
    index: index,
    success: function(e) {
      console.log('showTabBarRedDot success')
    },
    fail: function(e) {
      console.log('showTabBarRedDot fail')
    },
    complete: function(e) {
      console.log('showTabBarRedDot complete')
    },
  })
}

/**
 * 移除 tabBar 某一项的右上角的红点
 */
export const removeTabBarBadge = (index) => {
  Taro.removeTabBarBadge({
    index: index,
    success: function(e) {
      console.log('removeTabBarBadge success')
    },
    fail: function(e) {
      console.log('removeTabBarBadge fail')
    },
    complete: function(e) {
      console.log('removeTabBarBadge complete')
    },
  })
}

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 */
export const switchTab = (url) => {
  Taro.switchTab({
    url: url,
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

/**
 * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
 */
export const navigateTo = (url) => {
  Taro.navigateTo({
    url: url,
    success: function(e) {
      console.log('navigateTo success')
    },
    fail: function(e) {
      console.log('navigateTo fail')
    },
    complete: function(e) {
      console.log('navigateTo complete')
    },
  })
}
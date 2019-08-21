/**
 * 登陆
 */
export const loginApi = (params) => {
  console.log('loginApi', params)
  const resp = {
    code: 200
  }
  return resp
}

/**
 * 获取Swiper List
 */
export const homeGetSwiperListApi = (params) => {
  console.log('homeGetSwiperListApi', params)
  const resp = {
    code: 200,
    list: [
      {
        'id': 1,
        'name': '超级核桃',
        'img': 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 2,
        'name': '精品核桃',
        'img': 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 3,
        'name': '樱桃核桃',
        'img': 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 4,
        'name': '无敌核桃',
        'img': 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 5,
        'name': '银杏核桃',
        'img': 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 6,
        'name': '柳叶核桃',
        'img': 'https://img30.360buyimg.com/popWareDetail/jfs/t3436/223/1624209025/58626/5d4dbef5/582c032dN5a48aa00.jpg',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      }
    ]
  }
  return resp
}

/**
 * 获取Article List
 */
export const homeGetArticleListApi = (params) => {
  console.log('homeGetArticleListApi', params)
  const resp = {
    code: 200,
    list: [
      {
        'id': 1,
        'title': '持久化-持久化持久化持久化持久化持久化持久化持久化持久化持久化持久化持久化持久化持久化',
        'desc': '持久化desc-持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc持久化desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 2,
        'title': '分包dva-分包dva分包dva分包dva分包dva分包dva分包dva分包dva分包dva分包dva分包dva分包dva',
        'desc': '分包dva desc-分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc分包dva desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 3,
        'title': '富文本-富文本',
        'desc': '富文本详情-富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情富文本详情',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 4,
        'title': 'webview-webviewwebviewwebviewwebviewwebviewwebviewwebviewwebviewwebviewwebview',
        'desc': 'webview desc-webview descwebview descwebview descwebview descwebview descwebview descwebview descwebview descwebview descwebview descwebview descwebview descwebview desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 5,
        'title': '待定1',
        'desc': '待定1 desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 6,
        'title': '待定2',
        'desc': '待定2 desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 7,
        'title': '待定3',
        'desc': '待定3 desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 8,
        'title': '待定4',
        'desc': '待定4 desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 9,
        'title': '待定5',
        'desc': '待定5 desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
      {
        'id': 10,
        'title': '待定6',
        'desc': '待定6 desc',
        'url': '/pages/packageB/pages/article/detail/index?id=3'
      },
    ]
  }
  return resp
}
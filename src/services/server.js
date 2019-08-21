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
export const homeSwiperListApi = (params) => {
  console.log('homeSwiperListApi', params)
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
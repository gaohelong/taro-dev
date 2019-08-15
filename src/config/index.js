import devConf from './dev'
import proConf from './pro'

/**
 * api配置
 */
export const apiConf = process.env.NODE_ENV === 'development' ? devConf : proConf

/**
 * 全局的分享信息
 */
export const SHAREINFO = {
  'title': '分享标题',
  'path': '路径',
  'imageUrl': '图片'
}

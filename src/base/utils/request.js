import axios from 'axios'
import { Message } from 'element-ui'
import Qs from 'qs'
import store from '../store'
import { getToken } from '@base/utils/auth'
import { debounce } from '@base/utils'

// 创建axios实例
const service = axios.create({
  timeout: 30000 // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers.Authorization = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data
  }
)

const request = async (method, url, params, isFilter = true) => {
  try {
    let res = null
    if (method === 'get') {
      let query = ''
      if (typeof params !== 'string') {
        query = Qs.stringify(params)
      }
      if (query) {
        url += (url.indexOf('?') > -1 ? '&' : '?') + query
      }
      res = await service.get(url)
    } else if (method === 'post') {
      res = await service.post(url, params)
    } else if (method === 'delete') {
      res = await service.delete(url)
    } else if (method === 'put') {
      res = await service.put(url, params)
    }

    const { message, status } = res
    const tokenCodeErrList = [
      52000 // 未登录、登录超时
    ]

    if (status === 'OK') {
      if (isFilter) {
        return message
      } else {
        return res
      }
    } else {
      // 登录状态有问题，重置后跳转到登录页面
      if (tokenCodeErrList.indexOf(+message) >= 0) {
        store.dispatch('FedLogOut').then(() => {
          debouncePopError('登录超时，请重新登录')
        })
      } else {
        debouncePopError(message)
      }
      // reject该错误，并不会进入catch
      return Promise.reject(res)
    }
  } catch (e) {
    debouncePopError('网络开小差了 请稍等一会儿')
    throw e
  }
}

const debouncePopError = debounce(function (message = '网络开小差了 请稍等一会儿！') {
  Message.error({ message: message, showClose: true })
}, 500)

const httpGet = (url, params = {}, isFilter = true) => request('get', url, params, isFilter)

const httpPost = (url, params = {}, isFilter = true) => request('post', url, params, isFilter)

const httpDelete = (url, params = {}, isFilter = true) => request('delete', url, params, isFilter)

const httpPut = (url, params = {}, isFilter = true) => request('put', url, params, isFilter)

export {
  request,
  httpGet,
  httpPost,
  httpDelete,
  httpPut
}

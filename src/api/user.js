import { httpGet } from '@/utils/request'
import { PERMISSION_PROXY } from '@const/proxy'

// const getButtonAuthData = {}

// 根据业务系统获取菜单
export function getMenu (projectName) {
  return httpGet(`${PERMISSION_PROXY}/permission.web/menu/tree/byBusinessCode/${projectName}`)
}

// 获取业务系统列表
export function getBusinessList (businessCode) {
  return httpGet(`${PERMISSION_PROXY}/permission.web/menu/getBusinessList`)
}

// 获取按钮权限
export function getButtonAuth (userCode) {
  return httpGet(`${PERMISSION_PROXY}/permission.web/userButton/alloted/btn/{userCode}`)
}

// 获取用户信息
export function getUserInfo (params) {
  return httpGet(`${PERMISSION_PROXY}/permission.web/users/loginUser`)
}

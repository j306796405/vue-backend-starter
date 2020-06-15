import { httpPost } from '@/utils/request'
import { PERMISSION_PROXY } from '@const/proxy'

export function login (params) {
  return httpPost(`${PERMISSION_PROXY}/permission.web/users/login`, params)
}

export function logout () {
  return httpPost(`${PERMISSION_PROXY}/permission.web/users/logout`)
}

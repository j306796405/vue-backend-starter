import { httpPost } from '@/utils/request'
import { PERMISSION_PROXY } from '@const/proxy'

// const loginData = {"status":"OK","message":{"id":"44424183489581006643938812856811473426063850158421040346256598297387096826979","code":"HQ01UE277","name":"金一鸣","orgCode":"HQ01S288,HQ08S032"}}
// const logoutData = {"status":"OK","message":"退出成功!"}

export function login (params) {
  return httpPost(`${PERMISSION_PROXY}/permission.web/users/login`, params)
}

export function logout () {
  return httpPost(`${PERMISSION_PROXY}/permission.web/users/logout`)
}

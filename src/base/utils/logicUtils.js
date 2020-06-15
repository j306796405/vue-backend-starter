import { local } from '@base/utils/storage'

export function setBusinessKey (code) {
  local.set('businessKey', code)
}

export function getBusinessKey () {
  return local.get('businessKey')
}

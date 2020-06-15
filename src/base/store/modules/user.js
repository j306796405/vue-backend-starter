import { login, logout } from '@base/api/login'
import { getBusinessList, getUserInfo } from '@base/api/user'
import { setToken, removeAll } from '@base/utils/auth'
import { setBusinessKey, getBusinessKey } from '@base/utils/logicUtils'
import router from '@base/router'

const user = {
  state: getInitialState(),

  mutations: {
    SET_INFO: (state, info) => {
      state.info = info
      setToken(info.id)
    },
    SET_BUSINESS: (state, businessList) => {
      state.businessList = businessList
    },
    RESET_USER (state) {
      state = getInitialState()
      removeAll()
      router.push(`/login?redirect=${router.currentRoute.fullPath}`)
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then((info = {}) => {
          commit('SET_INFO', info)
          resolve(info)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取业务系统列表
    GetBusinessList ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getBusinessList().then(businessList => {
          commit('SET_BUSINESS', businessList)
          if (Array.isArray(businessList) && businessList.length > 0 && !getBusinessKey()) {
            setBusinessKey(businessList[0].code)
          }
          resolve(businessList)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((info = {}) => {
          commit('SET_INFO', info)
          resolve(info)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('RESET_USER')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('RESET_USER')
        removeAll()
        resolve()
      })
    }
  }
}

// 获取初始state
function getInitialState () {
  return {
    info: null,
    businessList: null,
    currentBusiness: null
  }
}

export default user

import { localAsyncRoutes } from '@base/router'
import { getMenu } from '@base/api/user'
import { getBusinessKey } from '@base/utils/logicUtils'

const state = {
  accessRoutesMap: null,
  accessRoute: null,
  menu: null
}

const mutations = {
  SET_ROUTE: (state, { accessRoutesMap, accessRoute }) => {
    state.accessRoutesMap = accessRoutesMap
    state.accessRoute = accessRoute
  },
  SET_MENU: (state, menu) => {
    state.menu = menu
  }
}

const actions = {
  // 生成本地路由及接口路由字典
  GenerateRoutes ({ commit }) {
    const code = getBusinessKey()
    return getMenu(code).then((menu = {}) => {
      commit('SET_MENU', menu)
      const accessRoutesMap = getAccessRouteMap(menu)
      const accessRoute = getAccessRoute(accessRoutesMap)
      commit('SET_ROUTE', { accessRoutesMap, accessRoute })
      return menu
    })
  }
}

function getAccessRouteMap (menu = [], accessRouteMap = {}) {
  if (Array.isArray(menu)) {
    menu.forEach((route) => {
      const { items = [], code } = route
      if (Array.isArray(items) && items.length > 0) {
        getAccessRouteMap(items, accessRouteMap)
      }
      if (code) {
        accessRouteMap[code] = route
      }
    })
  }
  return accessRouteMap
}

function getAccessRoute (accessRouteMap, asyncRoutes = localAsyncRoutes) {
  return asyncRoutes.filter((route) => {
    const permission = getPermission(accessRouteMap, route)
    if (permission.hasAuth) {
      if (route.children && route.children.length > 0 && !permission.isEnd) {
        route.children = getAccessRoute(accessRouteMap, route.children)
      }
      return true
    }
    return false
  })
}

function getPermission (accessRouteMap, route) {
  const code = route.name
  const permission = {
    hasAuth: false,
    isEnd: true
  }
  if (code) {
    if (accessRouteMap[code]) {
      const accessRoute = accessRouteMap[code]
      permission.hasAuth = true
      if (accessRoute.icon && route.meta) {
        route.meta.icon = accessRouteMap[code].icon
      }
      if (accessRoute.label && route.meta) {
        route.meta.title = accessRouteMap[code].label
      }
      if (accessRoute.label && route.meta) {
        route.meta.title = accessRouteMap[code].label
      }

      const children = accessRouteMap[code].items
      if (Array.isArray(children) && children.length > 0) {
        (children[0].url) && (route.redirect = children[0].url)
        permission.isEnd = false
      }
    }
  } else {
    permission.hasAuth = true
    if (Array.isArray(route.children) && route.children.length > 0) {
      permission.isEnd = false
    }
  }

  return permission
}

export default {
  state,
  mutations,
  actions
}

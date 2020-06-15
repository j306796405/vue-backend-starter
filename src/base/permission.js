import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@base/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/home' })
      NProgress.done()
    } else {
      const { businessList, info } = store.state.user
      const { menu } = store.state.permission

      if (!info) {
        store.dispatch('GetUserInfo')
      }

      if (!businessList || !menu) {
        await store.dispatch('GetBusinessList')
        store.dispatch('GenerateRoutes').then(() => { // 生成可访问的路由表
          router.addRoutes(store.state.permission.accessRoute) // 动态添加可访问路由表
          next({ ...to, replace: true })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

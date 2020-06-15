import Layout from '../views/layout/Layout'

const localConstantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@base/views/login/index'),
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@base/views/404'),
    hidden: true,
    meta: {
      title: '404'
    }
  },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@logic/views/home/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  }
]

export default localConstantRoutes

import Layout from '@/views/layout/Layout'

export default [
  {
    path: '/bsapermission',
    component: Layout,
    code: 'BSA_BIZ',
    meta: {
      title: '业务基础数据'
    },
    children: [
      {
        path: 'menu',
        code: 'BSA',
        component: () => import('@/views/bsapermission/menu'),
        meta: {
          title: '菜单按钮设置'
        }
      },
      {
        path: 'brand',
        code: 'BSA_BIZ_004',
        component: () => import('@/views/bsapermission/brand'),
        meta: {
          title: '品牌基础信息'
        }
      },
      {
        path: 'user',
        code: 'BSA_BIZ_005',
        component: () => import('@/views/bsapermission/user'),
        meta: {
          title: '人员基础信息'
        }
      },
      {
        path: 'noAuth',
        code: 'BSA_BIZ_999',
        component: () => import('@/views/bsapermission/user'),
        meta: {
          title: '我没有权限'
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

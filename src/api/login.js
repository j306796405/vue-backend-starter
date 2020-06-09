import request from '@/utils/request'

export function login (username, password) {
  return Promise.resolve({
    code: 200,
    message: '操作成功',
    data: {
      tokenHead: 'Bearer',
      token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1OTE1ODU5NjgwOTMsImV4cCI6MTU5MjE5MDc2OH0.ByEdDaKz2V-nHuQ6nS5EzeZQEwEf4zdqcZ5XVgRHML8TU-X3acDjUauPNh7_eEsElU91PJ3IACOIwjh6OyzAiw'
    }
  })
  // return request({
  //     url: '/admin/login',
  //     method: 'post',
  //     data: {
  //         username,
  //         password
  //     }
  // });
}

export function getInfo () {
  return Promise.resolve({
    code: 200,
    message: '操作成功',
    data: {
      roles: ['TEST'],
      icon: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg',
      menus: [{
        id: 1,
        parentId: 0,
        createTime: '2020-02-02T06:50:36.000+0000',
        title: '商品',
        level: 0,
        sort: 0,
        name: 'pms',
        icon: 'product',
        hidden: 0
      }, {
        id: 2,
        parentId: 1,
        createTime: '2020-02-02T06:51:50.000+0000',
        title: '商品列表',
        level: 1,
        sort: 0,
        name: 'product',
        icon: 'product-list',
        hidden: 0
      }, {
        id: 3,
        parentId: 1,
        createTime: '2020-02-02T06:52:44.000+0000',
        title: '添加商品',
        level: 1,
        sort: 0,
        name: 'addProduct',
        icon: 'product-add',
        hidden: 0
      }, {
        id: 4,
        parentId: 1,
        createTime: '2020-02-02T06:53:51.000+0000',
        title: '商品分类',
        level: 1,
        sort: 0,
        name: 'productCate',
        icon: 'product-cate',
        hidden: 0
      }, {
        id: 5,
        parentId: 1,
        createTime: '2020-02-02T06:54:51.000+0000',
        title: '商品类型',
        level: 1,
        sort: 0,
        name: 'productAttr',
        icon: 'product-attr',
        hidden: 0
      }, {
        id: 6,
        parentId: 1,
        createTime: '2020-02-02T06:56:29.000+0000',
        title: '品牌管理',
        level: 1,
        sort: 0,
        name: 'brand',
        icon: 'product-brand',
        hidden: 0
      }, {
        id: 7,
        parentId: 0,
        createTime: '2020-02-02T08:54:07.000+0000',
        title: '订单',
        level: 0,
        sort: 0,
        name: 'oms',
        icon: 'order',
        hidden: 0
      }, {
        id: 8,
        parentId: 7,
        createTime: '2020-02-02T08:55:18.000+0000',
        title: '订单列表',
        level: 1,
        sort: 0,
        name: 'order',
        icon: 'product-list',
        hidden: 0
      }, {
        id: 9,
        parentId: 7,
        createTime: '2020-02-02T08:56:46.000+0000',
        title: '订单设置',
        level: 1,
        sort: 0,
        name: 'orderSetting',
        icon: 'order-setting',
        hidden: 0
      }, {
        id: 10,
        parentId: 7,
        createTime: '2020-02-02T08:57:39.000+0000',
        title: '退货申请处理',
        level: 1,
        sort: 0,
        name: 'returnApply',
        icon: 'order-return',
        hidden: 0
      }, {
        id: 11,
        parentId: 7,
        createTime: '2020-02-02T08:59:40.000+0000',
        title: '退货原因设置',
        level: 1,
        sort: 0,
        name: 'returnReason',
        icon: 'order-return-reason',
        hidden: 0
      }, {
        id: 12,
        parentId: 0,
        createTime: '2020-02-04T08:18:00.000+0000',
        title: '营销',
        level: 0,
        sort: 0,
        name: 'sms',
        icon: 'sms',
        hidden: 0
      }, {
        id: 13,
        parentId: 12,
        createTime: '2020-02-04T08:19:22.000+0000',
        title: '秒杀活动列表',
        level: 1,
        sort: 0,
        name: 'flash',
        icon: 'sms-flash',
        hidden: 0
      }, {
        id: 14,
        parentId: 12,
        createTime: '2020-02-04T08:20:16.000+0000',
        title: '优惠券列表',
        level: 1,
        sort: 0,
        name: 'coupon',
        icon: 'sms-coupon',
        hidden: 0
      }, {
        id: 16,
        parentId: 12,
        createTime: '2020-02-07T08:22:38.000+0000',
        title: '品牌推荐',
        level: 1,
        sort: 0,
        name: 'homeBrand',
        icon: 'product-brand',
        hidden: 0
      }, {
        id: 17,
        parentId: 12,
        createTime: '2020-02-07T08:23:14.000+0000',
        title: '新品推荐',
        level: 1,
        sort: 0,
        name: 'homeNew',
        icon: 'sms-new',
        hidden: 0
      }, {
        id: 18,
        parentId: 12,
        createTime: '2020-02-07T08:26:38.000+0000',
        title: '人气推荐',
        level: 1,
        sort: 0,
        name: 'homeHot',
        icon: 'sms-hot',
        hidden: 0
      }, {
        id: 19,
        parentId: 12,
        createTime: '2020-02-07T08:28:16.000+0000',
        title: '专题推荐',
        level: 1,
        sort: 0,
        name: 'homeSubject',
        icon: 'sms-subject',
        hidden: 0
      }, {
        id: 20,
        parentId: 12,
        createTime: '2020-02-07T08:28:42.000+0000',
        title: '广告列表',
        level: 1,
        sort: 0,
        name: 'homeAdvertise',
        icon: 'sms-ad',
        hidden: 0
      }, {
        id: 21,
        parentId: 0,
        createTime: '2020-02-07T08:29:13.000+0000',
        title: '权限',
        level: 0,
        sort: 0,
        name: 'ums',
        icon: 'ums',
        hidden: 0
      }, {
        id: 22,
        parentId: 21,
        createTime: '2020-02-07T08:29:51.000+0000',
        title: '用户列表',
        level: 1,
        sort: 0,
        name: 'admin',
        icon: 'ums-admin',
        hidden: 0
      }, {
        id: 23,
        parentId: 21,
        createTime: '2020-02-07T08:30:13.000+0000',
        title: '角色列表',
        level: 1,
        sort: 0,
        name: 'role',
        icon: 'ums-role',
        hidden: 0
      }, {
        id: 24,
        parentId: 21,
        createTime: '2020-02-07T08:30:53.000+0000',
        title: '菜单列表',
        level: 1,
        sort: 0,
        name: 'menu',
        icon: 'ums-menu',
        hidden: 0
      }, {
        id: 25,
        parentId: 21,
        createTime: '2020-02-07T08:31:13.000+0000',
        title: '资源列表',
        level: 1,
        sort: 0,
        name: 'resource',
        icon: 'ums-resource',
        hidden: 0
      }],
      username: 'admin'
    }
  })
  // return request({
  //     url: '/admin/info',
  //     method: 'get'
  // });
}

export function logout () {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

export function fetchList (params) {
  return request({
    url: '/admin/list',
    method: 'get',
    params: params
  })
}

export function createAdmin (data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin (id, data) {
  return request({
    url: '/admin/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus (id, params) {
  return request({
    url: '/admin/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin (id) {
  return request({
    url: '/admin/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin (id) {
  return request({
    url: '/admin/role/' + id,
    method: 'get'
  })
}

export function allocRole (data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data: data
  })
}

import { httpGet } from '@/utils/request'
import { PERMISSION_PROXY } from '@const/proxy'

// const getMenuData = {
//   "status": "OK",
//   "message": [
//     {
//       "id": "21803232318220680335092475755887909358637673290784265183364405829220353783861",
//       "label": "权限管理系统",
//       "businessCode": "BSA",
//       "order": 2,
//       "isMenu": 1,
//       "code": "BSA",
//       "data": "21803232318220680335092475755887909358637673290784265183364405829220353783861",
//       "icon": "",
//       "datas": {
//         "version": 3
//       },
//       "windowOpen": 0,
//       "items": [
//         {
//           "id": "25427388936170713303179796598767315530161597728200800025654208008249656555573",
//           "label": "业务基础数据",
//           "url": "",
//           "businessCode": "BSA",
//           "order": 1,
//           "isMenu": 1,
//           "code": "BSA_BIZ",
//           "data": "25427388936170713303179796598767315530161597728200800025654208008249656555573",
//           "icon": "",
//           "datas": {
//             "version": 6
//           },
//           "customeData": "业务基础数据",
//           "windowOpen": 0,
//           "routerLink": "",
//           "items": [
//             {
//               "id": "25056337217166578534886179816960123002213503613518189621176926089119237564003",
//               "label": "菜单按钮设置",
//               "url": "/bsapermission/menu",
//               "businessCode": "BSA",
//               "order": 1,
//               "isMenu": 1,
//               "code": "BSA_BIZ_001",
//               "data": "25056337217166578534886179816960123002213503613518189621176926089119237564003",
//               "icon": "",
//               "datas": {
//                 "version": 3
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/menu"
//             },
//             {
//               "id": "45323866242478739190806614306064625512310659893038015753144689868689852412209",
//               "label": "品牌基础信息",
//               "url": "/bsapermission/brand",
//               "businessCode": "BSA",
//               "order": 3,
//               "isMenu": 1,
//               "code": "BSA_BIZ_004",
//               "data": "45323866242478739190806614306064625512310659893038015753144689868689852412209",
//               "icon": "",
//               "datas": {
//                 "version": 3
//               },
//               "customeData": "品牌",
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/brand"
//             },
//             {
//               "id": "23243578442350741325767397024220768744661080947524363545983156126809675227494",
//               "label": "人员基础信息",
//               "url": "/bsapermission/user",
//               "businessCode": "BSA",
//               "order": 4,
//               "isMenu": 1,
//               "code": "BSA_BIZ_005",
//               "data": "23243578442350741325767397024220768744661080947524363545983156126809675227494",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/user"
//             },
//             {
//               "id": "22716748844819284862197692307314577755093579025648081693368593840001058683237",
//               "label": "数据范围设置",
//               "url": "/bsapermission/datagroup",
//               "businessCode": "BSA",
//               "order": 5,
//               "isMenu": 1,
//               "code": "dataRangeset",
//               "data": "22716748844819284862197692307314577755093579025648081693368593840001058683237",
//               "datas": {
//                 "version": 3
//               },
//               "customeData": "1",
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/datagroup"
//             },
//             {
//               "id": "24151406770240470715560822124960799726161992374463880809489180026206735907173",
//               "label": "数据类型设置",
//               "url": "/bsapermission/datatype",
//               "businessCode": "BSA",
//               "order": 5,
//               "isMenu": 1,
//               "code": "dataTypeset",
//               "data": "24151406770240470715560822124960799726161992374463880809489180026206735907173",
//               "datas": {
//                 "version": 3
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/datatype"
//             },
//             {
//               "id": "24151413536889254273248642698532772928326560124623467030234734752574388462899",
//               "label": "源类型设置",
//               "url": "/bsapermission/datasourcetype",
//               "businessCode": "BSA",
//               "order": 12,
//               "isMenu": 1,
//               "code": "orgDataset",
//               "data": "24151413536889254273248642698532772928326560124623467030234734752574388462899",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/datasourcetype"
//             },
//             {
//               "id": "43964844738706629794129196777150294449231460376923699978162309611911813162291",
//               "label": "组织架构基础信息",
//               "url": "/bsapermission/org",
//               "businessCode": "BSA",
//               "order": 26,
//               "isMenu": 1,
//               "code": "orgInfo",
//               "data": "43964844738706629794129196777150294449231460376923699978162309611911813162291",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/org"
//             }
//           ]
//         },
//         {
//           "id": "44500494826977590882523978267792001449931734303075183682208450433580588677477",
//           "label": "管理组",
//           "businessCode": "BSA",
//           "order": 2,
//           "isMenu": 1,
//           "code": "mgMain",
//           "data": "44500494826977590882523978267792001449931734303075183682208450433580588677477",
//           "datas": {
//             "version": 2
//           },
//           "windowOpen": 0,
//           "items": [
//             {
//               "id": "44869759069607654597810963422816500237352459651667962622196565133918942345573",
//               "label": "管理组设置",
//               "url": "/bsapermission/managergroup",
//               "businessCode": "BSA",
//               "order": 1,
//               "isMenu": 1,
//               "code": "mgSet",
//               "data": "44869759069607654597810963422816500237352459651667962622196565133918942345573",
//               "datas": {
//                 "version": 2
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/managergroup"
//             },
//             {
//               "id": "44956328860275170123288063279710526409347043099944891022377041877889479501107",
//               "label": "管理组管理员授予",
//               "url": "/bsapermission/manageroperator",
//               "businessCode": "BSA",
//               "order": 2,
//               "isMenu": 1,
//               "code": "mgMember",
//               "data": "44956328860275170123288063279710526409347043099944891022377041877889479501107",
//               "datas": {
//                 "version": 3
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/manageroperator"
//             }
//           ]
//         },
//         {
//           "id": "45332672946449896126802054008302356143683936895989787121274999563873440577893",
//           "label": "功能权限",
//           "businessCode": "BSA",
//           "order": 3,
//           "isMenu": 1,
//           "code": "opSystem",
//           "data": "45332672946449896126802054008302356143683936895989787121274999563873440577893",
//           "datas": {
//             "version": 2
//           },
//           "windowOpen": 0,
//           "items": [
//             {
//               "id": "45772322335803906798999676181868366372984633201275548246732526668598244358501",
//               "label": "角色设置",
//               "url": "/bsapermission/role",
//               "businessCode": "BSA",
//               "order": 1,
//               "isMenu": 1,
//               "code": "123",
//               "data": "45772322335803906798999676181868366372984633201275548246732526668598244358501",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/role"
//             },
//             {
//               "id": "45862437138806611750370358736715825965272483487364035815736233760423051344229",
//               "label": "角色菜单授予",
//               "url": "/bsapermission/rolemenu",
//               "businessCode": "BSA",
//               "order": 2,
//               "isMenu": 1,
//               "code": "13",
//               "data": "45862437138806611750370358736715825965272483487364035815736233760423051344229",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/rolemenu"
//             },
//             {
//               "id": "22702599024736305014667866710006681861397947809709100941745123873356213662008",
//               "label": "菜单角色授予",
//               "url": "/bsapermission/menurole",
//               "businessCode": "BSA",
//               "order": 3,
//               "isMenu": 1,
//               "code": "menuRoleSet",
//               "data": "22702599024736305014667866710006681861397947809709100941745123873356213662008",
//               "datas": {
//                 "version": 0
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/menurole"
//             },
//             {
//               "id": "45784688993382223162721716032090628133347596586596838627181669511760521279845",
//               "label": "角色人员授予",
//               "url": "/bsapermission/roleuser",
//               "businessCode": "BSA",
//               "order": 3,
//               "isMenu": 1,
//               "code": "13124",
//               "data": "45784688993382223162721716032090628133347596586596838627181669511760521279845",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/roleuser"
//             }
//           ]
//         },
//         {
//           "id": "21803232506730092191055761102663985726437434358731413544643366970316468413747",
//           "label": "数据权限",
//           "businessCode": "BSA",
//           "order": 4,
//           "isMenu": 1,
//           "code": "dataControl",
//           "data": "21803232506730092191055761102663985726437434358731413544643366970316468413747",
//           "datas": {
//             "version": 1
//           },
//           "windowOpen": 0,
//           "items": [
//             {
//               "id": "23164051047439165947478823504149914079163033147166014453893653461314117461299",
//               "label": "人员数据范围授予",
//               "url": "/bsapermission/userdata",
//               "businessCode": "BSA",
//               "order": 1,
//               "isMenu": 1,
//               "code": "dataRangeSet",
//               "data": "23164051047439165947478823504149914079163033147166014453893653461314117461299",
//               "datas": {
//                 "version": 1
//               },
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/userdata"
//             },
//             {
//               "id": "44505471066428393497010832984210073222844705815445779658331701436202920325171",
//               "label": "人员自定义合并数据授予",
//               "url": "/bsapermission/customdata",
//               "businessCode": "BSA",
//               "order": 2,
//               "isMenu": 1,
//               "code": "dataCustomSet",
//               "data": "44505471066428393497010832984210073222844705815445779658331701436202920325171",
//               "datas": {
//                 "version": 1
//               },
//               "customeData": "{\"type\":\"abc\"}",
//               "windowOpen": 0,
//               "routerLink": "/bsapermission/customdata"
//             }
//           ]
//         },
//         {
//           "id": "23699100791510796377767282139711652738027664870687638114556123649678287988019",
//           "label": "权限复制",
//           "url": "/bsapermission/copy",
//           "businessCode": "BSA",
//           "order": 5,
//           "isMenu": 1,
//           "code": "dataControlCopy",
//           "data": "23699100791510796377767282139711652738027664870687638114556123649678287988019",
//           "datas": {
//             "version": 2
//           },
//           "windowOpen": 0,
//           "routerLink": "/bsapermission/copy"
//         }
//       ]
//     }
//   ]
// }
// const getBusinessListData = {
//   "status": "OK",
//   "message": [
//     {
//       "id": "24519242076090752605604086440439051026286513475202875862695954282158686287925",
//       "version": 4,
//       "flag": 1,
//       "createTime": "2017-03-23 09:31:11",
//       "lastModifyTime": "2019-06-10 16:54:31",
//       "lastModifier": "HQ01UB410",
//       "name": "权限中心",
//       "code": "BSA",
//       "desc": "",
//       "status": 0,
//       "managerGroup": {
//         "id": "25870543275403027438484312531803134449647085382960459855725632450613583372854",
//         "version": 2,
//         "flag": 1,
//         "createTime": "2017-06-05 15:32:08",
//         "lastModifyTime": "2017-06-05 15:34:41",
//         "creater": "ADMIN",
//         "lastModifier": "ADMIN",
//         "name": "权限中心管理组",
//         "code": "bsaProjectTeam"
//       }
//     },
//     {
//       "id": "25054562390587409971127853269736044322184424976581964321067694628653294117987",
//       "version": 1,
//       "flag": 1,
//       "createTime": "2020-02-07 07:50:44",
//       "lastModifyTime": "2020-02-07 07:53:02",
//       "creater": "HQ01UB410",
//       "lastModifier": "HQ01UB410",
//       "name": "分销小程序",
//       "code": "ng-distribution-applet",
//       "status": 0,
//       "managerGroup": {
//         "id": "44507230850618204119188176339320711795799668366181439006303649641090488951907",
//         "version": 0,
//         "flag": 1,
//         "createTime": "2020-02-07 07:52:34",
//         "lastModifyTime": "2020-02-07 07:52:34",
//         "creater": "HQ01UB410",
//         "lastModifier": "HQ01UB410",
//         "name": "分销小程序管理组",
//         "code": "ng-distribution-applet_Manager"
//       }
//     }
//   ]
// }
// const getButtonAuthData = {}
// const getUserInfoData = {
//   "status": "OK",
//   "message": {
//     "id": "44424183489581006643938812856811473426063850158421040346256598297387096826979",
//     "code": "HQ01UE277",
//     "name": "金一鸣",
//     "orgCode": "HQ01S288,HQ08S032"
//   }
// }

// 根据业务系统获取菜单
export function getMenu (projectName = 'BSA') {
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

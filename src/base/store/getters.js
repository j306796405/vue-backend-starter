const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  userInfo: state => state.user.info,
  businessList: state => state.user.businessList,
  menu: state => state.permission.menu
}
export default getters

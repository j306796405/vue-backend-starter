const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  userInfo: state => state.user.info,
  menu: state => state.permission.menu
}
export default getters

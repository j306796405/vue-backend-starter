const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}
export default getters

module.exports = {
  baseUrl: './',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}

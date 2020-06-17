const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const pages = {
  index: {
    entry: 'src/base/main.js',
    template: 'public/index.html',
    chunks: [
      'index', // 注意：这个是页面名称的chunk,下面的chunk名称需要对呀splitChunk对应的名称
      'chunk-vendors', // 这是node_modules下的chunk
      'chunk-common', // 这是admin和Index入口公用的chunk
      'chunk-element-ui', // index的单独chunk
      'chunk-echarts', // index的单独chunk
      'chunk-zrender' // index的单独chunk
    ]
  }
}

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages,
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/permissionProxy': {
        // 目标 API 地址
        target: 'http://ump-permission.fi.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/permissionProxy': ''
        },
        onProxyRes: function (proxyRes, req, res) {
          const cookies = proxyRes.headers['set-cookie']
          const cookieRegex = /Path=\/permission.web\//i
          // 修改cookie Path
          if (cookies) {
            var newCookie = cookies.map(function (cookie) {
              if (cookieRegex.test(cookie)) {
                return cookie.replace(cookieRegex, 'Path=/')
              }
              return cookie
            })
            // 修改cookie path
            delete proxyRes.headers['set-cookie']
            proxyRes.headers['set-cookie'] = newCookie
          }
        }
      }
    }
  },
  configureWebpack: config => {
    const plugins = []

    config.plugins = [...config.plugins, ...plugins]

    config.optimization = {
      splitChunks: {
        cacheGroups: {
          // 抽离所有入口的公用资源为一个chunk
          common: {
            name: 'chunk-common',
            chunks: 'all',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true,
            enforce: true
          },
          // 抽离node_modules下的库为一个chunk
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          },
          // 提取element-ui为一个chunk，避免vendor过大
          element: {
            name: 'chunk-element-ui',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            chunks: 'all',
            priority: 3,
            reuseExistingChunk: true,
            enforce: true
          },
          // 因为echarts不常使用，提取echarts为一个chunk，以减小vendor体积
          echarts: {
            name: 'chunk-echarts',
            test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
            chunks: 'all',
            priority: 4,
            reuseExistingChunk: true,
            enforce: true
          },
          // 由于echarts使用了zrender库，那么需要将其抽离出来，避免不常使用的库增加vendor体积
          zrender: {
            name: 'chunk-zrender',
            test: /[\\/]node_modules[\\/]zrender[\\/]/,
            chunks: 'all',
            priority: 3,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    }
  },
  chainWebpack (config) {
    // 针对多页面配置，移除preload、prefetch
    Object.keys(pages).forEach(function (key) {
      config.plugins.delete('preload-' + key)
      config.plugins.delete('prefetch-' + key)
    })

    if (process.env.NODE_ENV === 'production') {
      // 删除系统默认的splitChunk
      config.optimization.delete('splitChunks')
    }

    config.resolve.alias
      .set('@', resolve('src'))
      .set('@utils', resolve('src/utils'))
      .set('@base', resolve('src/base'))
      .set('@logic', resolve('src/logic'))

    // CDN化
    /* var externals = {
      vue: 'Vue',
      axios: 'axios',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      echarts: "echarts",
      vCharts: "v-charts",
      dayjs: "dayjs",
    }
    config.externals(externals)
    const cdn = {
      css: [
        // element-ui css
        '//cdn.jsdelivr.net/npm/element-ui@2.13.1/lib/theme-chalk/index.css',
        // normalize css
        '//cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css',
        // v-charts css
        '//cdn.jsdelivr.net/npm/v-charts@1.19.0/lib/style.min.css'
      ],
      js: [
        // vue
        '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
        // vue-router
        '//cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
        // vuex
        '//cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js',
        // axios
        '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
        // element-ui js
        '//cdn.jsdelivr.net/npm/element-ui@2.13.1/lib/index.js',
        // echarts
        '//cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.min.js',
        // v-charts
        '//cdn.jsdelivr.net/npm/v-charts@1.19.0/lib/index.min.js',
        // dayjs
        '//cdn.jsdelivr.net/npm/dayjs@1.8.27/dayjs.min.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      }) */

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    if (process.env.NODE_ENV === 'production') {
      // 打包文件性能分析
      if (process.env.ANALYZE_ENV) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzerPlugin)
      }

      // 小于5k的图片会转base64
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 5000, esModule: false }))

      // 移除console，parallel多线程构建
      // config.optimization.minimizer('terser').tap((args) => {
      // 	args[0].terserOptions.compress.drop_console = true
      // 	args[0].terserOptions.parallel = true
      // 	return args
      // })
    }
  }
}

function resolve (dir) {
  return path.join(__dirname, dir)
}

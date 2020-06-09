const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const BUILD_ENV = process.env.VUE_APP_BUILD_ENV || process.env.NODE_ENV

module.exports = {
	baseUrl: './',
	assetsDir: 'static',
	productionSourceMap: false,
	lintOnSave: process.env.NODE_ENV !== 'production',
	devServer: {
		overlay: {
			warnings: false,
			errors: true
		}
	},
	configureWebpack: config => {
		const plugins = []

		config.plugins = [...config.plugins, ...plugins]
	},
	chainWebpack (config) {
		// 避免队头阻塞
		config.plugins.delete('preload') // TODO: need test
		config.plugins.delete('prefetch') // TODO: need test

		config.resolve.alias
			.set('@', resolve('src'))

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
			config.optimization.minimizer('terser').tap((args) => {
				args[0].terserOptions.compress.drop_console = true
				args[0].terserOptions.parallel = true
				return args
			})
		}

		if (BUILD_ENV === 'development') {
			config.devtool('cheap-source-map')
			config.optimization.splitChunks({
				cacheGroups: {
					vendor: {
						test: /node_modules/,
						chunks: 'initial',
						name: 'vendor',
						priority: 10,
						enforce: true
					},
					style: {
						test: /styles/,
						chunks: 'initial',
						name: 'style',
						priority: 9,
						enforce: true
					}
				}
			})
		} else {
			config.optimization.splitChunks({
				chunks: 'all',
				cacheGroups: {
					libs: {
						name: 'vendor',
						test: /[\\/]node_modules[\\/]/,
						priority: 10,
						chunks: 'initial' // only package third parties that are initially dependent
					},
					elementUI: {
						name: 'chunk-elementUI', // split elementUI into a single package
						priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
						test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
					},
					commons: {
						name: 'chunk-commons',
						test: resolve('src/common'), // can customize your rules
						minChunks: 3, //  minimum common number
						priority: 5,
						reuseExistingChunk: true
					}
				}
			})
			config.optimization.runtimeChunk('single')
		}
	}
}

function resolve (dir) {
	return path.join(__dirname, dir)
}

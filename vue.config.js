'use strict'
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  outputDir: 'vuetest',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: 'static',
  // lintOnSave: false,
  devServer: {
    open: true,
    port: 8081,
    host: '127.0.0.1',
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@comp', path.join(__dirname, './src/components'))
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('./src'),
        '@pub': resolve('./public'),
      },
    },
  },
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', //API服务器的地址
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
})

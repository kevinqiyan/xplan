const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // plugins: [dynamicImport()]
  // devServer: {
  // proxy: {
  //   '/': {
  //     target: 'http://192.168.1.108:3000/',
  //     ws: false,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/':'/'
  //     }
  //   }
  // }
  // },
})

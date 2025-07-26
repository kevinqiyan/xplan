const { defineConfig } = require('@vue/cli-service')
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src")
      }
    }
  }

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

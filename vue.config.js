const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量，这个方式每次更改要重启服务器，因为修改的是配置文件
            // 'nav-bar-background-color': '#007bff'
            // 通过 less 文件覆盖（文件路径为绝对路径），用这个方式每次更改不用重启服务器，因为修改的是外部的 .less 文件
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
})

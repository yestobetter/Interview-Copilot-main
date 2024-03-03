const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: false,
  publicPath: '/index' // Set publicPath to repository name
})

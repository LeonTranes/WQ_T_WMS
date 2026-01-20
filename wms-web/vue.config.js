// wms-web/vue.config.js 修正后（仅保留必要配置，无多余Progress Plugin）
module.exports = {
    // 之前修复的转译依赖配置，保留
    transpileDependencies: [],
    // 后端代理配置，保留（贴合你的springboot+vue项目）
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8090',
          changeOrigin: true,
          pathRewrite: { '^/api': '' }
        }
      }
    }
    // 无其他多余配置，尤其是Progress Plugin相关配置全部删除
  }
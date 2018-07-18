export default {
  plugins: [
    /** 路由过滤 */
    ['umi-plugin-routes', {
      exclude: [
        '/components/',
        '/models/',
      ],
    }],
    /** 整合DVA */
    'umi-plugin-dva',
  ],
  /** 切换 history 方式为 hash */
  hashHistory: true,
}

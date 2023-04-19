export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ // 再次引入UI框架
    '~/plugins/router.js',
    { src: '~/plugins/element.js' },
    '~/plugins/axios.js',
    '~/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // '@nuxtjs/router'
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://xue.cnkdl.cn:23683/',
    proxy: true
  },
  proxy: { // 无法代理服务端
    '/api': {
      target: 'http://xue.cnkdl.cn:23683/',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  // loading: {
  //   color: 'red',
  //   height: '5px'
  // },
  // loading: '~/components/loading.vue',
  loading: false,
  publicRuntimeConfig: { // 客户端
    axios: {
      browserBaseURL: '/api' // process.env.BASE_URL // 该处会覆盖默认的baseURL
    }
  },

  privateRuntimeConfig: { // 服务端
    axios: { // 在服务器该处会覆盖的publicRuntimeConfig
      baseURL: process.env.BASE_URL,
      browserBaseURL: 'http'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: 'auth'
    // base: '/'
  }
}

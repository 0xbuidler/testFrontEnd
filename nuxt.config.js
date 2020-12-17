import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - myNuxt',
    title: 'myNuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-inject.js','~/plugins/ctx-inject.js','~/plugins/combined-inject.js','~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://10.31.52.37:8080',
    proxy: true,
    // prefix: '/issuance',
    credentials: true // Indicates whether credentials are required for cross-domain requests
  },
  // proxy: {
  //   '/liveness': {
  //     target: 'http://10.31.52.37:8080', // Target interface domain name 
  //     changeOrigin: true, // Indicates whether it crosses domains
  //     // pathRewrite: {
  //     //   '^/issuance': '',
  //     // }
  //   },
  //   '/justTest': {
  //     target: 'http://10.31.52.37:8080', // Target interface domain name 
  //     changeOrigin: true, // Indicates whether it crosses domains
  //   },
  //   '/ethBlockNumber': {
  //     target: 'http://10.31.52.37:8080', // Target interface domain name 
  //     changeOrigin: true, // Indicates whether it crosses domains
  //   },
  
  // },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

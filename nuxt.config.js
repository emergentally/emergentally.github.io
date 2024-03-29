export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Emergentally',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Data-driven development for emerging economies' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Emergentally' },
      { hid: 'og:title', name: 'og:title', content: 'Emergentally' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Data-driven development for emerging economies' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://emergentally.com/emergentally-logo.png' },
      { hid: 'og:image', name: 'og:image', content: 'https://emergentally.com/emergentally-logo.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Emergentally' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxt/content',
  ],


  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        file: 'en.json'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json'
      }
    ],
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    trailingSlash: true
  }
}

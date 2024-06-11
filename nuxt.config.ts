export default defineNuxtConfig({
  components: true,
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

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@bootstrap-vue-next/nuxt",
  ],

  content: {
    api: {
      baseURL: '/content_api'
    },
    markdown: {
      anchorLinks: {
        depth: 2
      }
    }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-next/dist/bootstrap-vue-next.css"
  ],

  i18n: {
    defaultLocale: 'en',
    lazy: true,
    strategy: "prefix_except_default",
    vueI18nLoader: true,
    fallbackLocale: "en",
    langDir: "locales",
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
        name: 'Français'
      }
    ],
    langDir: 'locales/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/who-we-are', '/get-in-touch',
        '/fr/who-we-are', '/fr/get-in-touch']
    }
  }
})

export default defineNuxtConfig({
  components: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  runtimeConfig: {
    public: {
      title: "Emergentally",
      description: "Data-driven development for emerging economies",
      twitterImage: "https://emergentally.com/emergentally-logo.png",
      twitterImageAlt: "Emergentally",
    },
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

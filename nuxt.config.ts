export default defineNuxtConfig({
  components: true,

  ssr: true,

  runtimeConfig: {
    public: {
      title: "Emergentally",
      description: "Data-driven development for emerging economies",
      twitterImage: "https://emergentally.com/emergentally-logo.png",
      twitterImageAlt: "Emergentally",
    },
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-next/dist/bootstrap-vue-next.css"
  ],

  plugins: [
  ],

  buildModules: [
  ],

  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@bootstrap-vue-next/nuxt",
    '@nuxtjs/plausible',
    "@nuxt/image",
    '@vesp/nuxt-fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: ['house', 'people-group', 'address-book', 'newspaper',
        'caret-left', 'caret-right'],
      regular: [],
      brands: ['twitter', 'mastodon', 'bluesky']
    }
  },

  plausible: {
    ignoredHostnames: ['localhost'],
  },

  content: {
    api: {
      baseURL: '/content_api'
    },
    markdown: {
      anchorLinks: {
        depth: 2
      }
    },
  },

  i18n: {
    defaultLocale: 'en',
    lazy: true,
    strategy: "prefix_except_default",
    vueI18nLoader: true,
    fallbackLocale: "en",
    langDir: 'locales/',
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
    compilation: {
      strictMessage: false,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/home";\n`
        }
      }
    }
  },

  build: {
  },

  router: {
    trailingSlash: true,
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/who-we-are/', '/get-in-touch/',
        '/fr/who-we-are/', '/fr/get-in-touch/', '/development-dashboard/',
        '/fr/development-dashboard/', '/', '/fr/']
    }
  },

  experimental: {
    defaults: { nuxtLink: { trailingSlash: "append" } }
  },

  compatibilityDate: '2024-07-18'
})

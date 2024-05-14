// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      title: 'Cgitem',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
  routeRules: {
    // '/personal/**': { ssr: false },
  },

  css: ['~/assets/scss/app.scss'],

  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt'],
  googleFonts: {
    families: {
      Roboto: {
        wght: [300, 400, 500, 600, 700],
      },
      Montserrat: {
        wght: [600, 800],
      },
      download: true,
    },
  },
  runtimeConfig: {
    // can be overridden by NUXT_* environment variable
    apiSecret: '',
    public: {
      apiHost: process.env.NUXT_PUBLIC_API_HOST,
      apiPath: process.env.NUXT_PUBLIC_API_PATH,
      host: process.env.NUXT_PUBLIC_HOST,
    },
  },
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**',
    ],
  },
});

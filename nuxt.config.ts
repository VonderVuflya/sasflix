// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/assets/scss/index.scss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'preload',
          href: '/fonts/SF-Pro-Display-Bold.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous'
        },
        { rel: 'preload', href: '/fonts/SF-Pro-Text-Bold.otf', as: 'font', type: 'font/otf', crossorigin: 'anonymous' },
        {
          rel: 'preload',
          href: '/fonts/SF-Pro-Text-Regular.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: ['dayjs-nuxt']
})

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    titleTemplate: '%s - GameHer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Game\'Her est une association loi 1901 créée en août 2017 et ayant pour but de développer un environnement sain pour tous les joueurs ...' },
    { hid: 'type', name: 'type', content: 'website' },
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 700 }]
    ],


    sitemap : {
     path : '/sitemap.xml',
     hostname : 'http://gameher.cheickahmedsidibe.com/',
     routes: []
   },

   robots: {
     UserAgent: '*',
     Allow : '/',
     sitemap : 'http://gameher.cheickahmedsidibe.com//sitemap.xml'
   },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

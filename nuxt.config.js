export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Unofficial Nuxt 3 Release Count Down',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An unofficial countdown for Nuxt 3 release - built with Nuxt 2' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Unofficial Nuxt 3 Release Count Down'
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "An unofficial countdown for Nuxt 3 release - built with Nuxt 2",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://unofficial-nuxt3-countdown.netlify.app/nuxt3-countdown.png'
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://unofficial-nuxt3-countdown.netlify.app/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Nuxt 3 Release Count Down",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "An unofficial countdown for Nuxt 3 release - built with Nuxt 2",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://unofficial-nuxt3-countdown.netlify.app/nuxt3-countdown.png",
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Quicksand: {
        wght: [500, 600]
      }
    }
  },
  
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

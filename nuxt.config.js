const pkg = require('./package');
const { resolve } = require('path');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'venohr consult - executive search',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Yella Venohr Consult' },
      { name: 'description', content: 'Als Expertin für Executive Search helfe ich Ihnen, Führungskräfte und hoch qualifizierte Spezialisten für Ihr Unternehmen zu gewinnen. Bei allen Personalfragen rund um Executive Consultancy berate ich Sie ebenfalls gerne.' },
      { name: 'keywords', content: 'Personalberater,Personalberatung,Executive Search,Direct Search,Headhunter, Headhunting, Profiling, Personalsuche, HR Consultant, Direktsuche, Research, Recruiting, Recruiter, Bewerbermanagement, Führungskräfte, Spezialisten' },
      { name:'google-site-verification', content: '4SAN_oEf4rZJ7syE2mlADKODqs9XFfeZNEroYM3izBg'}    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Noto+Serif|Work+Sans:300,400' }
    ],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        type: 'text/javascript',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    { src: '~/plugins/vue-markdown', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-netlify-cms',
    'nuxtent',
    ['nuxt-sass-resources-loader', ['./assets/scss/abstracts/_settings.scss', './assets/scss/abstracts/_mixins.scss']]
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    vendor: ['babel-polyfill'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Netlify CMS
  */
  nuxtent: {
    content: [
      [
        'pages',
        {
          page: '/_slug',
          permalink: '/:slug',
          isPost: false,
          generate: ['get'],
        },
      ],
    ],
  },
}

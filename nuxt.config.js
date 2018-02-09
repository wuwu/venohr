const pkg = require('./package');
const { resolve } = require('path');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,600i,700,700i' }
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
    // '@/assets/scss/main.scss',
    '@/assets/styles/theme.scss'
  ],
  sassResources: [
    resolve(__dirname, 'assets/styles/theme.scss')
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    { src: '~/plugins/markdown', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // ['nuxt-sass-resources-loader', ['./assets/scss/abstracts/_settings.scss', './assets/scss/abstracts/_mixins.scss']],
    ['nuxt-sass-resources-loader', ['./assets/styles/settings/variables.scss', './assets/styles/vendor/avalanche.scss']],
    'nuxt-netlify-cms', 
    'nuxtent'
  ],

  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
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
        'posts',
        {
          page: '/posts/_slug',
          permalink: '/posts/:slug',
          generate: ['get', 'getAll'],
          isPost: false,
        },
      ],
      [
        'pages',
        {
          page: '/_slug',
          permalink: '/:slug',
          isPost: false,
          generate: ['get', 'getAll'],
        },
      ],
    ],
  },
}

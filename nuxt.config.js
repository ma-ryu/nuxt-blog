require('dotenv').config()
const client = require('./plugins/contentful')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    GA_ID: process.env.GA_ID
  },
  router: {
    middleware: [
      'getContentful'
    ]
  },
  head: {
    title: 'Ma-ryu' || '',
    titleTemplate: '%s - Ma-ryu',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'ma-ryuの趣味とプログラミングの学習過程を記録するブログです。' || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/vuetify',
    'nuxt-webfontloader'
  ],
  googleAnalytics: {
    id: process.env.GA_ID
  },
  markdownit: {
    injected: true,
    html: true,
    breaks: true,
    linkify: true,
    typography: true
  },
  fontawesome: {
    imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  webfontloader: {
    google: {
      families: ['Noto Sans JP']
    }
  },
  sitemap: {
    hostname: 'https://ma-ryu-portfolio.netlify.app',
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: 'post'
        }),
        client.getEntries({
          content_type: 'about'
        })
      ]).then(([posts, about]) => {
        return [
          ...posts.items.map((post) => `posts/${post.fields.slug}`),
          ...about.items.map((about) => `abouts/${about.fields.slug}`)
        ]
      })
    }
  },
  plugins: [
    '~/plugins/contentful',
    '~/plugins/prism'
  ],
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: 'post'
        }),
        client.getEntries({
          content_type: 'about'
        }),
        client.getEntries({
          content_type: 'category'
        }),
        client.getEntries({
          content_type: 'tag'
        }),
      ]).then(([posts, about, category, tag]) => {
        return [
          ...posts.items.map((post) => `posts/${post.fields.slug}`),
          ...about.items.map((about) => `about/${about.fields.slug}`),
          ...category.items.map((category) => `categories/${category.fields.slug}`),
          ...tag.items.map((tag) => `tags/${tag.fields.slug}`),
        ]
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

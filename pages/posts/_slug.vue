<template>
  <article class="article">
    <div class="single">
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <p class="post-created-at">{{ formatDate(post.sys.createdAt) }}</p>
      <div
        class="post-content line-numbers"
        v-html="$md.render(post.fields.body)"
      ></div>
    </div>
  </article>
</template>

<script>

export default {
  async asyncData({ payload, store, params, error }) {
    const post = payload || await store.state.posts.find(post => post.fields.slug === params.slug)

    if (post) {
      return { post }
    } else {
      return error({ statusCode: 400 })
    }
  },
  mounted() {
    console.log(this.post)
    // eslint-disable-next-line no-undef
    Prism.highlightAll()
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = String(date.getFullYear())
      const mm = String(date.getMonth() + 1).padStart(2, '0')
      const dd = String(date.getDate()).padStart(2, '0')
      return `${yyyy}.${mm}.${dd}`
    }
  },
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.fields.description
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.post.fields.title + ' - Ma-ryu'
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://ma-ryu-portfolio.netlify.app/posts/${this.post.fields.slug}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.fields.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.fields.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https:' + this.post.fields.image.fields.file.url
        },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@chalu-log' }
      ]
    }
  }
}
</script>

<style lang="scss">
article.article {
  padding: 10px;
  .single {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    color: #222;
    border: 1.5px solid rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    h1,
    h2,
    h3 {
      margin: 16px 0;
    }
    h1.post-title {
      font-size: 32px;
      word-break: keep-all;
      word-wrap: break-word;
      text-decoration: underline;
      @media (max-width: (768px)) {
        font-size: 24px;
      }
    }
    p.post-created-at {
      text-align: right;
    }
    .post-content {
      text-align: left;
      padding: 8px;
      h1 {
        font-size: 32px;
        padding: 4px;
        @media (max-width: (768px)) {
          font-size: 24px;
        }
      }
      h2 {
        font-size: 24px;
        padding: 4px;
        background: #ccc;
        @media (max-width: (768px)) {
          font-size: 16px;
        }
      }
      p {
        margin: 16px 0;
        font-size: 16px;
        @media (max-width: (768px)) {
          font-size: 12px;
        }
      }
      a {
        word-break: break-all;
      }
      img {
        max-width: 100%;
        border: 1px solid #000;
      }
      ul {
        padding-left: 24px;
        li {
          font-size: 16px;
          @media (max-width: (768px)) {
            font-size: 8px;
          }
        }
      }
      pre {
        font-size: 14px;
      }
    }
  }
}
</style>

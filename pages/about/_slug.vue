<template>
  <article class="article">
    <breadcrumbs :items="breadcrumbs" />
    <div class="single">
      <h1 class="post-title">{{ about.fields.title }}</h1>
      <!-- <p class="post-created-at">{{ formatDate(about.sys.createdAt) }}</p> -->
      <div
        class="post-content line-numbers"
        v-html="$md.render(about.fields.body)"
      ></div>
    </div>
  </article>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs.vue'

export default {
  components: {
    Breadcrumbs
  },
  async asyncData({ payload, store, params, error }) {
    const about =
      payload ||
      (await store.state.about.find(
        (about) => about.fields.slug === params.slug
      ))

    if (about) {
      return { about }
    } else {
      return error({ statusCode: 400 })
    }
  },
  mounted() {
    console.log(this.about)
    // eslint-disable-next-line no-undef
    Prism.highlightAll()
  },
  computed: {
    breadcrumbs() {
      const category = this.about.fields.category
      return [
        { text: 'ホーム', to: '/' },
        { text: category.fields.name, to: '/about' }
      ]
    }
  },
  head() {
    return {
      title: this.about.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.about.fields.title + ' - Ma-ryu'
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://ma-ryu.netlify.app/about/${this.about.fields.slug}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.about.fields.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@chalu-log' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
          font-size: 8px;
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

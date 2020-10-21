<template>
  <article class="article">
    <breadcrumbs :items="breadcrumbs" />
    <div class="single">
      <div class="text-left">
        カテゴリ:
        <v-chip
          dark
          :color="categoryColor(post.fields.category)"
          class="text-caption ma-1"
        >
          {{ post.fields.category.fields.name }}
        </v-chip>
      </div>
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <v-row justify="center" align="center">
        <div v-for="tag in post.fields.tag" :key="tag.sys.id">
          <v-chip
            color="blue-grey lighten-4"
            :to="linkTo('tags', tag)"
            label
            class="ma-1 text-caption"
          >{{ tag.fields.name }}</v-chip>
        </div>
      </v-row>
      <p class="post-created-at">{{ formatDate(post.sys.createdAt) }}</p>
      <div class="post-content line-numbers" v-html="$md.render(post.fields.body)"></div>
    </div>
  </article>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs.vue'
import { mapGetters } from 'vuex'
export default {
  layout: '2colum',
  components: {
    Breadcrumbs
  },
  async asyncData({ payload, store, params, error }) {
    const post =
      payload ||
      (await store.state.posts.find((post) => post.fields.slug === params.slug))

    if (post) {
      return { post }
    } else {
      return error({ statusCode: 400 })
    }
  },
  computed: {
    ...mapGetters(['linkTo']),
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/', icon: 'mdi-home' },
        { text: 'POSTS', to: '/posts' }
      ]
    },
    categoryColor() {
      return (category) => {
        switch (category.fields.name) {
          case 'programming':
            return 'rgb(0, 100, 40)'
          case 'photography':
            return 'rgb(0, 40, 150)'
          default:
            return 'grey darken-3'
        }
      }
    },
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
          content: `https://ma-ryu.netlify.app/posts/${this.post.fields.slug}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.fields.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.fields.desc
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
    margin-top: 16px;
    padding: 24px;
    color: #222;
    border-radius: 25px;
    box-shadow: inset 5px 5px 10px rgb(180, 180, 180),
      inset -5px -5px 10px rgb(240, 255, 250);
    h1,
    h2,
    h3 {
      margin: 8px 0;
    }
    h1.post-title {
      display: inline-block;
      text-align: left;
      font-size: 32px;
      word-wrap: break-word;
      @media (max-width: (768px)) {
        font-size: 22px;
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
        padding: 8px;
        padding-left: 16px;
        font-weight: bold;
        @media (max-width: (768px)) {
          font-size: 24px;
        }
      }
      h2 {
        font-size: 24px;
        padding: 6px;
        padding-left: 16px;
        font-weight: bold;
        background: rgb(210, 210, 210);
        border-left: 5px solid black;
        @media (max-width: (768px)) {
          font-size: 16px;
        }
      }
      h3 {
        font-size: 18px;
        padding: 6px;
        padding-left: 16px;
        font-weight: bold;
        background: rgb(210, 210, 210);
        border-left: 5px solid black;
        @media (max-width: (768px)) {
          font-size: 14px;
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
        max-height: 450px;
        border: 1px solid #000;
      }
      ul {
        padding-left: 24px;
        padding-top: 16px;
        padding-bottom: 16px;
        border: 1px dashed rgb(150, 150, 150);
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

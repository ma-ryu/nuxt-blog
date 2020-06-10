<template>
  <article class="article">
    <div class="single">
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <p class="post-created-at">{{ formatDate(post.sys.createdAt) }}</p>
      <div class="post-content" v-html="$md.render(post.fields.body)"></div>
    </div>
  </article>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  // eslint-disable-next-line no-unused-vars
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug
      })
      .then((entries) => {
        return { post: entries.items[0] }
      })
      .catch((e) => console.log(e))
  },
  mounted() {
    console.log(this.post)
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
      title: this.post.fields.title
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
    }
  }
}
</style>

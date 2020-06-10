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
    max-width: 900px;
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
      text-decoration: underline;
    }
    .post-content {
      text-align: left;
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
        background: #ccc;
      }
      p {
        margin: 16px 0;
        font-size: 16px;
      }
      img {
        max-width: 100%;
        border: 1px solid #000;
      }
      ul {
        list-style: none;
      }
    }
  }
}
</style>

<template>
  <section class="latest-posts">
    <div class="headline">
      <h2>最新情報</h2>
      <p>NEW POST</p>
    </div>
    <div class="posts">
      <nuxt-link
        v-for="(post, index) in posts"
        :key="index"
        :to="`posts/${post.fields.slug}`"
        class="post"
      >
        <div class="thumb">
          <img
            :src="post.fields.image ? post.fields.image.fields.file.url : null"
          />
        </div>
        <div class="post-text">
          <p>{{ formatDate(post.sys.createdAt) }}</p>
          <h2>{{ post.fields.title }}</h2>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  // eslint-disable-next-line no-unused-vars
  asyncData({ params }) {
    return (
      client
        .getEntries({
          content_type: 'post',
          order: '-sys.createdAt'
        })
        .then((entries) => {
          return { posts: entries.items }
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.log(e))
    )
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
  head: {
    title: '記事一覧',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'blogの記事一覧ページです。'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: sans-serif;
  margin: 0;
}
.jumbtron {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -8px;
  .bg-home {
    img {
      max-width: 100vw;
      width: 100vw;
      height: 40vh;
      object-fit: cover;
      object-position: 0 100%;
      @media (max-width: (768px)) {
        height: 25vh;
      }
    }
  }
}
section.latest-posts {
  margin-top: 70px;
}
</style>

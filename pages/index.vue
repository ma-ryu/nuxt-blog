<template>
  <section class="latest-posts">
    <div class="posts">
      <nuxt-link
        v-for="(post, index) in posts"
        :key="index"
        :to="'posts/' + post.fields.slug"
        class="post"
      >
        <div class="thumb">
          // eslint-disable-next-line prettier/prettier
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
    title: '記事一覧'
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Chalkboard', sans-serif;
  margin: 0;
}
section.latest-posts {
  padding: 10px;
  .posts {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ddd;
    a.post {
      width: calc(100% - 20px);
      @media (min-width: (768px)) {
        width: calc(100% / 4 - 20px);
      }
      margin: 10px;
      background: #fff;
      text-decoration: none;
      color: #111;
      .thumb {
        width: 100%;
        padding-bottom: 75%;
        position: relative;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 100%;
          height: 100%;
        }
      }
      .post-text {
        padding: 5px 10px 10px;
        p {
          text-align: right;
        }
        h2 {
          text-align: left;
          width: fit-content;
          font-size: 20px;
        }
      }
    }
  }
}
</style>

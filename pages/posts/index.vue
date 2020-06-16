<template>
  <section class="latest-posts">
    <div class="headline">
      <h2>最新情報</h2>
      <p>NEW POST</p>
    </div>
    <div class="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import Post from '~/components/post.vue'

export default {
  components: {
    Post
  },
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

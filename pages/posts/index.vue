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
          <img :src="post.fields.image ? post.fields.image.fields.file.url : null" />
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

<style lang="scss">
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
  padding: 10px;
  .headline {
    h2 {
      width: 200px;
      margin: 0 auto;
      border-bottom: 1px solid black;
      border-width: 1.5px;
      border-radius: 6px;
    }
  }
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
      border-radius: 8px;
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
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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

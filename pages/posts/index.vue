<template>
  <section class="latest-posts">
    <headline :headline="headline" />
    <div class="posts">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/components/post.vue'
import Headline from '~/components/headline.vue'

export default {
  components: {
    Post,
    Headline
  },
  data() {
    return {
      headline: {
        JP: '最新情報',
        ENG: 'NEW POST'
      }
    }
  },
  // eslint-disable-next-line no-unused-vars
  computed: {
    ...mapState(['posts']),
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
  margin-top: 70px;
}
</style>

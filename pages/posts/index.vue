<template>
  <section class="latest-posts">
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="headline" />
    <v-row>
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </v-row>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/components/post.vue'
import Headline from '~/components/headline.vue'
import Breadcrumbs from '~/components/breadcrumbs.vue'

export default {
  components: {
    Post,
    Headline,
    Breadcrumbs
  },
  // eslint-disable-next-line no-unused-vars
  computed: {
    ...mapState(['posts']),
    breadcrumbs() {
      return [{ text: 'ホーム', to: '/', icon: 'mdi-home' }]
    },
    headline() {
      return {
        eng: 'POST',
      }
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
  margin: 0;
}
</style>

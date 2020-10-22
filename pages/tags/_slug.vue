¥<template>
  <div class="latest-posts">
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="headline" />
    <v-row no-gutters>
      <post v-for="(post, index) in relatedPosts" :key="index" :post="post" />
    </v-row>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import Post from '~/components/post.vue'
import Headline from '~/components/headline.vue'
import Breadcrumbs from '~/components/breadcrumbs.vue'

export default {
  components: {
    Post,
    Headline,
    Breadcrumbs
  },
  async asyncData({ payload, params, error, store }) {
    let tag = payload
    if (!tag) {
      for (let i = 0; i < store.state.posts.length; i++) {
        const tags = store.state.posts[i].fields.tag
        if (tags) tag = tags.find((tag) => tag.fields.slug === params.slug)
        if (tag) break
      }
    }
    if (tag) {
      const relatedPosts = await client
        .getEntries({
          content_type: 'post',
          'fields.tag.sys.id': tag.sys.id
        })
        .then((res) => res.items)
        .catch(console.error)
      return { tag, relatedPosts }
    } else {
      error({ statusCode: 400 })
    }
  },
  computed: {
    headline() {
      return { eng: this.tag.fields.name }
    },
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/', icon: 'mdi-home' },
        { text: 'tags', to: '/categories' }
      ]
    }
  }
}
</script>

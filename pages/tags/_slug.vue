<template>
  <div class="latest-posts">
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="{eng: this.tag.fields.name}" />
    <v-row no-gutters>
      <post v-for="(post, index) in tagRelatedPosts" :key="index" :post="post" />
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
    const tag =
      payload ||
      (await store.state.tagList.find(
        (tag) => tag.fields.slug === params.slug
      ))
    if (tag) {
      return { tag }
    } else {
      return error({ statusCode: 400 })
    }
  },
  computed: {
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/', icon: 'mdi-home' },
        { text: 'tags', to: '/categories' }
      ]
    },
    tagRelatedPosts() {
      return this.$store.getters.tagRelatedPosts(this.tag)
    },
  }
}
</script>

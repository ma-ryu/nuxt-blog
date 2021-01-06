<template>
  <div>
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="{eng: this.category.fields.slug.toUpperCase()}" />
    <v-row no-gutters>
      <post v-for="(post, index) in relatedPosts" :key="index" :post="post" />
    </v-row>
  </div>
</template>

<script>
import Post from '~/components/post.vue'
import Headline from '~/components/headline.vue'
import Breadcrumbs from '~/components/breadcrumbs.vue'

export default {
  components: {
    Post,
    Headline,
    Breadcrumbs
  },
  computed: {
    relatedPosts() {
      return this.$store.getters.relatedPosts(this.category)
    },
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/', icon: 'mdi-home' },
        { text: 'CATEGORY', to: '/categories' }
      ]
    }
  },

  async asyncData({ payload, store, params, error }) {
    const category =
      payload ||
      (await store.state.categories.find(
        (cat) => cat.fields.slug === params.slug
      ))

    if (category) {
      return { category }
    } else {
      return error({ statusCode: 400 })
    }
  }
}
</script>

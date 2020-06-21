<template>
  <div class="latest-posts">
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="catHeadline" />
    <div class="posts">
      <post v-for="(post, index) in relatedPosts" :key="index" :post="post" />
    </div>
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
    catHeadline() {
      return { jp: this.category.fields.name.toUpperCase(), eng: 'PHOTO POST' }
    },
    relatedPosts() {
      return this.$store.getters.relatedPosts(this.category)
    },
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/' },
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

<style lang="scss">
.latest-posts {
  padding: 16px;
  .posts {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ddd;
  }
}
</style>

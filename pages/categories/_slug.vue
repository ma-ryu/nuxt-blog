<template>
  <div>
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="headline" />
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
  data() {
    return {
      headline: {
        JP: '最新情報',
        ENG: 'NEW POST'
      }
    }
  },
  computed: {
    relatedPosts() {
      return this.$store.getters.relatedPosts(this.category)
    },
    breadcrumbs() {
      return [
        { text: 'ホーム', to: '/' },
        { text: "CATEGORY" , to: '/categories'  },
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

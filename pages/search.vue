<template>
  <div class="pa-4">
    <div class="headline">
      <h2>SITE SEARCH</h2>
    </div>
    <search-window v-model="word" :search="search()" />
    <v-row v-if="searchPosts.length > 0">
      <post v-for="(post, index) in searchPosts" :key="index" :post="post" />
    </v-row>
    <div v-else>{{ noResult }}</div>
  </div>
</template>
<script>
import client from '~/plugins/contentful'
import SearchWindow from '~/components/searchWindow.vue'
import Post from '~/components/post.vue'

export default {
  components: {
    SearchWindow,
    Post
  },
  data() {
    return {
      word: '',
      searchPosts: '',
      noResult: ''
    }
  },
  methods: {
    async search() {
      if (this.word) {
        await client
          .getEntries({
            content_type: 'post',
            query: this.word
          })
          .then((res) => (this.searchPosts = res.items))
          .catch(console.error)
        if (this.searchPosts.length > 0) {
          return this.searchPosts
        } else {
          return (this.noResult = `${this.word}の記事はありませんでした`)
        }
      } else if (!this.word) {
        return (this.searchPosts = ''), (this.noResult = '')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    color: rgb(160, 160, 160);
    text-shadow: 1px 1px 1px rgb(245, 245, 245);
  }
</style>
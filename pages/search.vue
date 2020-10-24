<template>
  <div class="pa-4">
    <div class="headline">
      <h2>SITE SEARCH</h2>
    </div>
    <v-text-field
      class="mt-6"
      label="search word..."
      prepend-inner-icon="mdi-magnify"
      clearable
      flat
      loading="false"
      single-line
      v-model="word"
      @input="search()"
    ></v-text-field>
    <v-row v-if="searchPosts.length > 0">
      <post v-for="(post, index) in searchPosts" :key="index" :post="post" />
    </v-row>
    <div v-else>{{ noResult }}</div>
  </div>
</template>
<script>
import client from '~/plugins/contentful'
import Post from '~/components/post.vue'

export default {
  components: {
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

<style lang="scss">
.headline {
  h2 {
    color: rgb(160, 160, 160);
    text-shadow: 1px 1px 1px rgb(245, 245, 245);
  }
}
.v-input__slot {
  background: #ddd;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 80%;
  border-radius: 25px !important;
  box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
    inset -6px -6px 10px rgb(245, 245, 245);
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  &:hover {
    box-shadow: -8px -8px 15px rgb(245, 245, 245),
      8px 8px 15px rgb(180, 180, 180);
  }
  i {
    filter: drop-shadow(0.7px 0.7px 1px rgb(50, 255, 250));
  }
}
</style>
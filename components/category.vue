<template>
  <div class="pa-3">
    <v-card-title>カテゴリ一覧</v-card-title>
    <div class="cat-wrapper">
      <div class="d-flex flex-wrap justify-start mb-3">
        <div v-for="(category, index) in categories" :key="index">
          <v-chip
            small
            dark
            :color="categoryColor(category)"
            :to="linkTo('categories', category)"
            class="font-weight-bold text-subtitle-2 pa-5 ma-3"
          >{{ category.fields.name }}</v-chip>
        </div>
      </div>
    </div>
    <v-card-title>タグ一覧</v-card-title>
    <div class="cat-wrapper">
      <div class="d-flex flex-wrap justify-start mb-3">
        <div v-for="(tag, index) in tagList" :key="index" clss="d-flex">
          <v-chip
            small
            dark
            :color="tagColor(tag)"
            :to="linkTo('tags', tag)"
            class="font-weight-bold text-subtitle-2 pa-5 ma-3"
          >{{ tag.fields.name }}</v-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['categories']),
    ...mapState(['tagList']),
    ...mapGetters(['linkTo']),
    categoryColor() {
      return (category) => {
        switch (category.fields.name) {
          case 'programming':
            return 'rgb(0, 100, 40)'
          case 'photography':
            return 'rgb(0, 40, 150)'
          default:
            return 'grey darken-3'
        }
      }
    },
    tagColor() {
      return (tag) => {
        switch (tag.fields.name) {
          case 'nuxt.js':
            return '#3FB983'
          case 'contentful':
            return '#62B6E1'
          case 'netlify':
            return '#25C7B7'
          default:
            return 'grey darken-3'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cat-wrapper {
  margin-bottom: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 25px;
  box-shadow: inset 5px 5px 10px rgb(180, 180, 180),
    inset -5px -5px 10px rgb(240, 240, 240);
}
</style>

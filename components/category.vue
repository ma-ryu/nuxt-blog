<template>
  <div class="pa-3">
    <v-card flat class="grey lighten-3">
      <v-card-title>カテゴリ一覧</v-card-title>
      <div class="d-flex flex-wrap justify-start mb-3">
        <div v-for="(category, index) in categories" :key="index">
          <v-chip
            small
            dark
            :color="categoryColor(category)"
            :to="linkTo('categories', category)"
            class="font-weight-bold text-subtitle-2 pa-5 ma-3"
          >
            {{ category.fields.name }}
          </v-chip>
        </div>
      </div>
    </v-card>
    <v-card  flat class="grey lighten-3">
      <v-card-title>タグ一覧</v-card-title>
      <div class="d-flex flex-wrap justify-start mb-3">
        <div v-for="(tag, index) in tagList" :key="index" clss="d-flex">
          <v-chip
            small
            dark
            :color="tagColor(tag)"
            :to="linkTo('tags', tag)"
            class="font-weight-bold text-subtitle-2 pa-5 ma-3"
          >
            {{ tag.fields.name }}
          </v-chip>
        </div>
      </div>
    </v-card>
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

<style lang="scss" scoped></style>

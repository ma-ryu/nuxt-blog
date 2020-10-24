<template>
  <v-col cols="12" md="6" class="pa-3">
    <v-card height="100%" flat>
      <v-img
        v-if="post.fields.image"
        height="200px"
        cover
        :src="post.fields.image.fields.file.url"
      >
        <v-card-text class="text-left pa-2">
          <v-chip
            small
            dark
            :color="categoryColor(post.fields.category)"
            :to="linkTo('categories', post.fields.category)"
            class="font-weight-bold"
          >
            {{ post.fields.category.fields.name }}
          </v-chip>
        </v-card-text>
      </v-img>
      <v-card-text>
        <p class="ma-1 text-right">{{ formatDate(post.sys.createdAt) }}</p>
        <div class="d-flex flex-wrap justify-start mb-3">
          <div v-for="tag in post.fields.tag" :key="tag.sys.id">
            <v-chip
              color="blue-grey lighten-4"
              :to="linkTo('tags', tag)"
              label
              class="ma-1"
            >
              {{ tag.fields.name }}
            </v-chip>
          </div>
        </div>
        <h2 class="text-left text-h6">{{ post.fields.title }}</h2>
        <v-spacer />
        <v-btn
          v-if="post.sys.contentType.sys.id === 'about'"
          outlined
          :to="linkTo('about', post)"
          class="mt-3"
          >READ MORE</v-btn
        >
        <v-btn
          v-else
          outlined
          :to="linkTo('posts', post)"
          class="mt-3"
          >READ MORE</v-btn
        >
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
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
  },
  props: ['post'],
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = String(date.getFullYear())
      const mm = String(date.getMonth() + 1).padStart(2, '0')
      const dd = String(date.getDate()).padStart(2, '0')
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>

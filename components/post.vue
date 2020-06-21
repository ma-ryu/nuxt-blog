<template>
  <div class="post">
    <div class="thumb">
      <v-img
        height="200px"
        cover
        :src="
          post.fields.image
            ? post.fields.image.fields.file.url
            : '../assets/img/noimage.png'
        "
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
    </div>
    <div class="post-text">
      <p class="ma-1">{{ formatDate(post.sys.createdAt) }}</p>
      <div class="d-flex flex-wrap justify-start mb-3">
        <div v-for="tag in post.fields.tag" :key="tag.sys.id">
          <v-chip dark :color="tagColor(tag)" label class="ma-1">
            {{ tag.fields.name }}
          </v-chip>
        </div>
      </div>
      <h2>{{ post.fields.title }}</h2>
      <v-btn text :to="linkTo('posts', post)" class="d-flex justify-end pa-0"
        >[<span class="primary--text">この記事を読む</span>]</v-btn
      >
    </div>
  </div>
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

<style lang="scss">
a {
  text-decoration: none;
}
.post {
  width: calc(100% - 20px);
  border-radius: 8px;
  @media (min-width: (768px)) {
    width: calc(100% / 4 - 20px);
  }
  margin: 10px;
  background: #fff;
  text-decoration: none;
  color: #111;
  .thumb {
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .post-text {
    padding: 5px 10px 10px;
    color: black;
    p {
      text-align: right;
    }
    h2 {
      text-align: left;
      width: fit-content;
      font-size: 20px;
    }
  }
}
</style>

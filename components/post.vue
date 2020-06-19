<template>
  <nuxt-link class="post" :to="`posts/${post.fields.slug}`">
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
        <div class="white--text text-left blue-grey darken-4 pl-3">
          Category: {{ post.fields.category.fields.name }}
        </div>
      </v-img>
    </div>
    <div class="post-text">
      <p class="ma-1">{{ formatDate(post.sys.createdAt) }}</p>
      <div class="d-flex flex-wrap justify-start mb-3">
        <v-chip
          class="ma-1 secondary"
          label
          v-for="tag in post.fields.tag"
          :key="tag.sys.id"
        >
          {{ tag.fields.name }}
        </v-chip>
      </div>
      <h2>{{ post.fields.title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
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
a.post {
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

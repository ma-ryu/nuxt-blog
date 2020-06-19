<template>
  <section class="latest-posts">
    <headline :headline="headline" />
    <div class="posts">
      <nuxt-link
        v-for="(about, index) in about"
        :key="index"
        :to="`about/${about.fields.slug}`"
        class="post"
      >
        <div class="thumb" v-if="about.fields.image">
          <img
            :src="
              about.fields.image ? about.fields.image.fields.file.url : null
            "
          />
        </div>
        <div class="post-text">
          <p>{{ formatDate(about.sys.createdAt) }}</p>
          <h2>{{ about.fields.title }}</h2>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import Headline from '~/components/headline.vue'

export default {
  components: {
    Headline
  },
  data() {
    return {
      headline: {
        JP: '制作実績',
        ENG: 'WORK LIST'
      }
    }
  },
  // eslint-disable-next-line no-unused-vars
  asyncData({ params }) {
    return (
      client
        .getEntries({
          content_type: 'about',
          order: '-sys.createdAt'
        })
        .then((entries) => {
          return { about: entries.items }
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.log(e))
    )
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = String(date.getFullYear())
      const mm = String(date.getMonth() + 1).padStart(2, '0')
      const dd = String(date.getDate()).padStart(2, '0')
      return `${yyyy}.${mm}.${dd}`
    }
  },
  head: {
    title: '紹介ページ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '制作実績やMa-ryuに関する記事の紹介ページです。'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: sans-serif;
  margin: 0;
}
.jumbtron {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: -8px;
  .bg-home {
    img {
      max-width: 100vw;
      width: 100vw;
      height: 40vh;
      object-fit: cover;
      object-position: 0 100%;
      @media (max-width: (768px)) {
        height: 25vh;
      }
    }
  }
}
section.latest-posts {
  margin-top: 70px;
}
</style>

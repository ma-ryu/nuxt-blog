<template>
  <section>
    <breadcrumbs :items="breadcrumbs" />
    <headline :headline="headline" />
    <v-row>
      <post v-for="(about, index) in about" :key="index" :post="about" />
    </v-row>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
        jp: '制作実績',
        eng: 'WORK LIST',
        icon: 'mdi-xml'
      }
    }
  },
  computed: {
    ...mapState(['about']),
    ...mapGetters(['linkTo']),
    breadcrumbs() {
      return [{ text: 'ホーム', to: '/', icon: 'mdi-home' }]
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

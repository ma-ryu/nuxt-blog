<template>
  <div>
    <section class="jumbtron">
      <div class="bg-home">
        <carousel />
      </div>
    </section>
    <profile v-show="$vuetify.breakpoint.xs" />
    <section class="latest-posts">
      <headline :headline="headline" />
      <v-row no-gutters>
        <post v-for="(post, index) in posts" :key="index" :post="post" />
      </v-row>
    </section>
    <back-top />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/components/post.vue'
import Profile from '~/components/profile.vue'
import BackTop from '~/components/backTop.vue'
import Headline from '~/components/headline.vue'
import Carousel from '~/components/carousel.vue'

export default {
  layout: '2colum',
  components: {
    Post,
    Profile,
    BackTop,
    Headline,
    Carousel
  },
  computed: {
    ...mapState(['posts']),
    headline() {
      return {
        eng: 'POST',
      }
    },
    isPc() {
      if (window.innerWidth >= 800) {
        console.log(window.innerWidth)
        return true
      } else {
        return false
      }
    }
  },
  head: {
    title: 'ma-ryu tech-blog'
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
}
.jumbtron {
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 0 32px;
  @media (max-width: (768px)) {
    margin-top: 55px;
    margin: 0;
    padding: 0;
  }
}

section.latest-posts {
  padding: 8px;
}
</style>

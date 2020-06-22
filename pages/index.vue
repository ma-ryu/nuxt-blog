<template>
  <div>
    <section class="jumbtron">
      <div class="bg-home">
        <img src="../assets/img/bg-home.jpg" alt />
      </div>
    </section>
    <profile />
    <section class="latest-posts">
      <headline :headline="headline" />
      <v-row>
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

export default {
  components: {
    Post,
    Profile,
    BackTop,
    Headline
  },
  computed: {
    ...mapState(['posts']),
    headline() {
      return {
        jp: '最新情報',
        eng: 'NEW POST',
        icon: 'mdi-lead-pencil'
      }
    }
  },
  // eslint-disable-next-line no-unused-vars

  head: {
    title: 'ma-ryu tech-blog'
  }
}
</script>

<style lang="scss">
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
  @media (max-width: (768px)) {
    margin-top: 55px;
  }
  .bg-home {
    img {
      max-width: 100vw;
      width: 100vw;
      height: 40vh;
      object-fit: cover;
      object-position: 0 100%;
      @media (max-width: (768px)) {
        height: 30vh;
      }
    }
  }
}

section.latest-posts {
  padding: 32px;
}
</style>

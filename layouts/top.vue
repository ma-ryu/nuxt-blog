<template>
  <v-app>
    <Header />

    <main>
      <v-row class="main-wrapper">
        <nuxt class="main" />
        <sidebar
          class="sidebar"
          v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.md"
        />
      </v-row>
    </main>
    <Footer />
  </v-app>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/sidebar.vue'
export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>
<style lang="scss" scoped>
* {
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN',
    'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック',
    'MS PGothic', sans-serif;
}
body {
  margin: 0;
}
main {
  background-color:rgb(230,230,230);
}
.main-wrapper {
  margin: 0 auto;
  min-height: 600px;
  background-color: rgb(230,230,230);
  text-align: center;
  max-width: 1200px;
  @media (max-width: (768px)) {
    width: 100%;
  }
}

.main {
  width: 75%;
  @media (max-width: (768px)) {
    width: 100%;
    margin-top: 60px;
  }
}
.sidebar {
  width: 25%;
}
.page-enter-active,
.page-leave-active {
  transition: 0.5s cubic-bezier(1, 0.25, 0.25, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(0, 30px);
}
</style>

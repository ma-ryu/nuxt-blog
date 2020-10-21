<template>
  <v-app>
    <Header />
    <main>
      <div class="main-wrapper">
        <nuxt class="main" />
      </div>
    </main>
    <Footer />
  </v-app>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
* {
  font-display: swap;
  font-family: 'lato', 'Noto Sans JP', 'ＭＳ Ｐゴシック',
    sans-serif;
}
body {
  margin: 0;
}
main {
  background-color: rgb(230,230,230);
}
.main-wrapper {
  min-height: 600px;
  background-color: rgb(230,230,230);
  text-align: center;
  padding: 8px;
  width: 1000px;
  margin: 0 auto;
  @media (max-width: (768px)) {
    width: 100%;
  }
}
.main {
  @media (max-width: (768px)) {
    margin-top: 60px;
  }
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

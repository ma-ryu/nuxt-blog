<template>
  <v-app>
    <Header />
    <main>
      <v-row class="mx-0">
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
html {
  font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
}
body {
  margin: 0;
}
main {
  min-height: 600px;
  background-color: #ddd;
  text-align: center;
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

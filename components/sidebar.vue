<template>
  <div class="pa-3">
    <profile />
    <nuxt-link class="link text-left" to="/contact">
      <p class="mb-8">
        <v-icon class="mx-5">mdi-email</v-icon>CONTACT
      </p>
    </nuxt-link>
    <nuxt-link class="link text-left" to="/search">
      <p>
        <v-icon class="mx-5">mdi-magnify</v-icon>SITE SEARCH
      </p>
    </nuxt-link>
    <category />
  </div>
</template>

<script>
import Profile from '~/components/profile.vue'
import Category from '~/components/category.vue'

export default {
  components: {
    Profile,
    Category
  },
  head: {
    title: 'ma-ryu tech-blog'
  }
}
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: black !important;
  p {
    padding: 8px;
    margin: 0 auto;
    margin-bottom: 24px;
    width: 230px;
    border-radius: 25px;
    font-weight: bold;
    box-shadow: -8px -8px 15px rgb(240, 255, 250),
      8px 8px 15px rgb(180, 180, 180);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    text-shadow: 0.7px 0.7px 1px rgb(50, 255, 250);
    &:hover {
      box-shadow: inset -5px -5px 10px rgb(240, 255, 250),
        inset 5px 5px 10px rgb(200, 200, 200);
    }
    &:active {
      box-shadow: inset 5px 5px 5px rgb(180, 180, 180),
        inset -6px -6px 10px rgb(245, 245, 245);
      outline: none;
    }
    i {
      color: black;
    }
  }
}
</style>

<template>
  <div class="pa-3">
    <profile />
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

<style lang="scss"></style>

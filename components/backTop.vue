<template>
  <transition>
    <v-btn
      v-show="offsetTop > 500"
      v-scroll="onScroll"
      @click="backTop"
      fab
      fixed
      absolute
      bottom
      right
      class="mb-12 blue-grey darken-4 white--text"
    >
      <v-icon large>mdi-chevron-up</v-icon>
    </v-btn>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0
    }
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset
    },
    backTop() {
      return this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: 0.8s ease;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>

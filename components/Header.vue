<template>
  <div class="header">
    <div class="header-inner">
      <nuxt-link to="/">
        <div class="header-title">
          <img src="~/assets/img/ma-ryu.png" />
          <h1>Ma-ryu</h1>
        </div>
      </nuxt-link>
      <HeaderNav />
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue' // headerをインポート

export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss" scoped>
.header-inner {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  .header-title {
    display: flex;
    font-size: 32px;
    margin-left: 8px;
    padding: 16px;
    h1 {
      font-weight: lighter;
      @media (max-width: (768px)) {
        font-size: 32px;
      }
    }
    img {
      height: 95px;
      margin-right: 24px;
      @media (max-width: (768px)) {
        display: none;
      }
    }
  }
}
</style>

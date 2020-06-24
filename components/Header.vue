<template>
  <div class="header">
    <div class="header-inner">
      <nuxt-link to="/">
        <div class="header-title">
          <h1>Ma-ryu</h1>
        </div>
      </nuxt-link>
      <HeaderNav />
    </div>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue' // headerNavをインポート

export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss" scoped>
.header-inner {
  background-color:#ddd;
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: (768px)) {
    height: 65px;
    position: fixed;
    width: 100%;
    z-index: 99;
  }
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

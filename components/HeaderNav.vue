<template>
  <div>
    <div class="header__menu-line" @click="navOpen" :class="{ 'is-active': active }">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="nav">
      <nav class="nav" :class="{ 'is-show': show }" v-if="show">
        <ul class="nav-wrap">
          <li>
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/posts">BLOG</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">WORK</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">CONTACT</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
    <nav class="nav">
      <ul class="nav-wrap">
        <li>
          <nuxt-link to="/">HOME</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts">BLOG</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">WORK</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">CONTACT</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      active: false,
      show: false
    }
  },
  methods: {
    navOpen: function() {
      this.active = !this.active
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  &__menu {
    &-line {
      @media (min-width: (768px)) {
        display: none;
      }
      width: 36px;
      height: 30px;
      margin-right: 24px;
      position: relative;
      cursor: pointer;
      span {
        width: 100%;
        height: 2px;
        background: #000;
        display: block;
        transition: 0.6s;
        position: absolute;
        z-index: 99;
        &:first-child {
          top: 0;
        }
        &:nth-child(2) {
          top: 14px;
          width: 80%;
          margin-left: 6px;
        }
        &:last-child {
          bottom: 0;
          width: 80%;
        }
      }
      &.is-active {
        span {
          transition: 0.6s;
          &:first-child {
            transform: rotate(45deg);
            top: 50%;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg);
            top: 50%;
            width: 100%;
            margin: 0;
          }
        }
      }
    }
  }
  .nav {
    display: block;
    @media (max-width: (768px)) {
      display: none;
      background-color: rgba(197, 197, 197, 0.671);
      z-index: 30;
      padding: 2rem 1rem;
      width: 20rem;
      height: 80rem;
      top: 0;
      right: 0;
    }
    &-wrap {
      list-style-type: none;
      padding: 16px;
      margin-right: 16px;
      display: flex;
      @media (max-width: (768px)) {
        flex-direction: column;
        background-color: rgba(230, 230, 230, 0.3);
        overflow-y: scroll;
        z-index: -1;
      }
      li {
        padding-right: 16px;
        @media (max-width: (768px)) {
          padding-top: 16px;
        }
        a {
          text-decoration: none;
          color: #000;
          font-size: 24px;
        }
      }
    }
  }
  .is-show {
    @media (max-width: (768px)) {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
    }
  }
  .nav-enter,
  .nav-leave-to {
    opacity: 0;
  }

  .nav-enter-to,
  .nav-leave {
    opacity: 1;
  }

  .nav-enter-active,
  .nav-leave-active {
    transition: opacity 1s ease;
  }
}
</style>

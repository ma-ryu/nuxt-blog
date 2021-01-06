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
          <li @click="navOpen">
            <nuxt-link to="/">HOME</nuxt-link>
          </li>
          <li @click="navOpen">
          <nuxt-link to="/search">SEARCH</nuxt-link>
        </li>
          <li @click="navOpen">
            <nuxt-link to="/posts">BLOG</nuxt-link>
          </li>
          <li @click="navOpen">
            <nuxt-link to="/categories">CATEGORY</nuxt-link>
          </li>
          <li @click="navOpen">
            <nuxt-link to="/about">WORK</nuxt-link>
          </li>
          <li @click="navOpen">
            <nuxt-link to="/contact">CONTACT</nuxt-link>
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
          <nuxt-link to="/categories">CATEGORY</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">WORK</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">CONTACT</nuxt-link>
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
        background:white;
        display: block;
        transition: 0.6s;
        position: absolute;
        z-index: 99;
        &:first-child {
          top: 0;
        }
        &:nth-child(2) {
          top: 14px;
        }
        &:last-child {
          bottom: 0;
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
      background-color: rgba(220, 220, 220, 0.90);
      z-index: 30;
      padding: 2rem 1rem;
      width: 100%;
      height: 100vh;
      top: 0;
      right: 0;
    }
    &-wrap {
      list-style-type: none;
      margin-right: 16px;
      display: flex;
      @media (max-width: (768px)) {
        flex-direction: column;
        overflow-y: scroll;
        padding-top: 40px;
        z-index: -1;
      }
      li {
        padding: 12px;
        margin-right: 16px;
        border-radius: 20px;
        box-shadow: -8px -8px 15px rgb(240, 255, 250),
          8px 8px 15px rgb(180, 180, 180);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        font-weight: 600;
        &:hover {
          box-shadow: inset -5px -5px 10px rgb(240, 255, 250),
            inset 5px 5px 10px rgb(200, 200, 200);
          outline: none;
        }
        &:active {
          box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
            inset -6px -6px 10px rgb(245, 245, 245);
          outline: none;
        }
        @media (max-width: (768px)) {
          background-color: rgba(220, 220, 220, 1);
          padding-top: 16px;
          margin: 16px;
          text-align: center;
        }
        a {
          text-decoration: none;
          text-shadow: 0.7px 0.7px 1px rgb(50, 255, 250);
          color: black;
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
    transition: opacity 0.65s ease;
  }
}
</style>

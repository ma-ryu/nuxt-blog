<template>
  <section class="about">
    <div class="about-headline">
      <h2>Ma-ryu</h2>
      <sns-link />
    </div>
    <div class="about-me">
      <div class="d-flex mt-3 mb-3">
        <font-awesome-icon class="mr-2" icon="user" size="lg" />
        <h5 class="text-h6">About Me</h5>
      </div>
      <div class="content text-left">
        <p class="mb-2">
          ご覧いただき、ありがとうございます。Ma-ryuと申します。
          新潟県在住でWEB開発と趣味で写真の撮影を行なっています。
          WordPressを使った企業ホームページ・ブログの作成等を学習中です。
          また、Vue.jsを使ったアプリ開発も行なっています。
          このWEBサイトもNuxt.jsを利用して制作しています。
        </p>
      </div>
      <skill />
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
    </div>
  </section>
</template>

<script>
import Skill from '~/components/skill.vue'
import snsLink from '~/components/snsLink.vue'

export default {
  components: {
    Skill,
    snsLink
  }
}
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  padding: 8px;
  margin-top: 16px;
  @media (max-width: (768px)) {
    padding: 24px;
  }
  .about-headline {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
  .about-me {
    .content {
      p {
        padding: 16px;
        line-height: 2;
        font-size: 12px;
        border-radius: 25px;
        box-shadow: inset 5px 5px 10px rgb(180, 180, 180),
          inset -5px -5px 10px rgb(240, 255, 250);
      }
    }
  }
  .link {
    text-decoration: none;
    color: black;
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
}
</style>

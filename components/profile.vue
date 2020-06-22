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
          また、Vue.jsを使ったSPA・SSR開発やJavaScriptを使った個人アプリの
          開発も行なっています。
        </p>
        <p class="mb-2">
          ユーザーが使いやすいコンテンツ作成を目標に制作しています。
          最近は、表示速度の高速化を目指しユーザーがストレスなく閲覧できるように、Vue.jsを使用した
          WEB作成を学習中です。 このWEBサイトもNuxt.jsを利用して制作しています。
        </p>
      </div>
      <skill />
      <nuxt-link class="contact-link" to="/contact">
        <p>CONTACT</p>
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
  padding: 36px;
  .about-headline {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
  .about-me {
    .content {
      padding: 8px;
      p {
        line-height: 2;
        font-size: 12px;
      }
    }
  }
  .contact-link {
    text-decoration: none;
    color: black;
    p {
      border: 1px solid black;
    }
  }
}
</style>

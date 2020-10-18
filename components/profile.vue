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
          WordPressを使った企業ホームページ・ブログの作成等をしてます。
          また、Vue.jsを使ったアプリ開発も行なっています。
          このWEBサイトもNuxt.jsを利用して制作しています。
        </p>
      </div>
      <skill />
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
}
</style>

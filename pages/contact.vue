<template>
  <div>
    <div class="headline">
      <h2>お問い合わせ</h2>
      <p>CONTACT</p>
    </div>
    <contact-form />
  </div>
</template>
<script>
import ContactForm from '~/components/contactForm.vue' // contactをインポート

export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
.headline {
  margin-top: 70px;
  h2 {
    font-size: 32px;
    width: 250px;
    margin: 0 auto;
    border-bottom: 1px solid black;
    border-width: 1.5px;
    border-radius: 6px;
    padding-bottom: 8px;
  }
}
</style>
<template>
  <div>
    <div class="headline">
      <h2>CONTACT</h2>
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
    color: rgb(160, 160, 160);
    text-shadow: 1px 1px 1px rgb(245, 245, 245);
  }
}
</style>

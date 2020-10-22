<template>
  <div>
    <div class="headline">
      <h2 class="mt-12">CONTACT</h2>
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
  h2 {
    color: rgb(160, 160, 160);
    text-shadow: 1px 1px 1px rgb(245, 245, 245);
  }
</style>

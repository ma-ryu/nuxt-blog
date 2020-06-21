<template>
  <div class="headline">
    <h2 class="px-0 py-2 mb-3">{{ headline.eng }}</h2>
  </div>
</template>

<script>
export default {
  props: ['headline']
}
</script>

<style lang="scss" scoped>
.headline {
  .border {
    width: 150px;
    border-bottom: 1px solid black;
    border-width: 2px;
    margin: 0 auto;
  }
  h2 {
    font-size: 32px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 8px;
    @media (max-width: (768px)) {
      font-size: 28px;
    }
  }
  p {
    @media (max-width: (768px)) {
      font-size: 24px;
    }
  }
}
</style>

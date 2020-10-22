<template>
  <div>
    <h2 class="px-0 py-2 mb-3">
      {{ headline.eng }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ['headline']
}
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 32px;
    margin: 0 auto;
    color: rgb(120, 120, 120);
    text-shadow: 1px 1px 1px rgb(250, 250, 250);
    border-radius: 25px;
    @media (max-width: (768px)) {
      font-size: 28px;
    }
  }
  p {
    @media (max-width: (768px)) {
      font-size: 24px;
    }
  }
</style>

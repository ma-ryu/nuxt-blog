<template>
  <div class="headline">
    <h2>{{ headline.JP }}</h2>
    <p>{{ headline.ENG }}</p>
  </div>
</template>

<script>
export default {
  props: ['headline']
}
</script>

<style lang="scss" scoped>
.headline {
  h2 {
    width: 250px;
    margin: 0 auto;
    border-bottom: 1px solid black;
    border-width: 1.5px;
    border-radius: 6px;
    padding-bottom: 8px;
  }
}
</style>

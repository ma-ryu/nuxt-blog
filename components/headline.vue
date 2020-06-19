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

<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      {{ category.fields.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['categories'])
  }
}
</script>

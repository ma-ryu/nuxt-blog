<template>
  <div>
    {{ category.fields.name }}
  </div>
</template>

<script>
export default {
  async asyncData({ payload, store, params, error }) {
    const category =
      payload ||
      (await store.state.categories.find(
        (cat) => cat.fields.slug === params.slug
      ))

    if (category) {
      return { category }
    } else {
      return error({ statusCode: 400 })
    }
  }
}
</script>

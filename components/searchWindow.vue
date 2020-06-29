<template>
  <v-text-field
    class="mt-6"
    label="search word..."
    prepend-inner-icon="mdi-magnify"
    clearable
    flat
    loading="false"
    single-line
    :value="word"
    @input="$emit('input', $event)"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      word: ''
    }
  },
  props: ['search']
}
</script>

<style lang="scss">
.v-input__slot {
  background: #ddd;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 80%;
  border-radius: 25px !important;
  box-shadow: inset 6px 6px 5px rgb(180, 180, 180),
    inset -6px -6px 10px rgb(245, 245, 245);
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  &:hover {
    box-shadow: -8px -8px 15px rgb(245, 245, 245),
      8px 8px 15px rgb(180, 180, 180);
  }
  i {
    filter: drop-shadow(0.7px 0.7px 1px rgb(50, 255, 250));
  }
}
</style>
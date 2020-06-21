<template>
  <v-breadcrumbs :items="items" large class="pt-2 px-2">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.to" exact="true">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: ['items']
}
</script>

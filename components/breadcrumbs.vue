<template>
  <v-breadcrumbs :items="items" large class="pt-2 px-2">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item v-if="item.icon" :to="item.to" exact>
        <v-icon large>{{item.icon}}</v-icon>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item v-else :to="item.to" exact class="text-h5">{{ item.text }}</v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss" scoped>
.v-icon {
  text-shadow: 0.7px 0.7px 1px rgb(50, 255, 250);
  color: black;
}
</style>

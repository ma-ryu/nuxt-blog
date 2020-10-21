<template>
  <div class="mb-5">
    <div class="d-flex mt-3 mb-3">
      <v-icon color="black" large class="mr-2">mdi-cube-outline</v-icon>
      <h3 class="text-h6">My Skills</h3>
    </div>
    <v-treeview
      class="text-left caption"
      dense
      hoverable
      :items="items"
    ></v-treeview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS',
          children: [
            { id: 3, name: 'SCSS' },
            { id: 4, name: 'BEM' },
            { id: 5, name: 'Bootstrap' }
          ]
        },
        {
          id: 6,
          name: 'JavaScript',
          children: [
            {
              id: 7,
              name: 'Vue.js',
              children: [
                { id: 8, name: 'Vuetify' },
                { id: 9, name: 'Nuxt.js' }
              ]
            },
            {
              id: 10,
              name: 'React.js',
            },
          ]
        }
      ]
    }
  }
}
</script>

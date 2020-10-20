<template>
  <v-carousel
    :continuous="true"
    :cycle="cycle"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    height="400"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-row
        class="fill-height mx-0 text-md-h5 text-h6"
        align="center"
        justify="center"
        align-md="end"
        justify-md="space-between"
      >
        <div
          v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.md"
          class="px-2"
        >
          {{ item.text }}
        </div>
        <div class="black pa-1">Photo by: Ma-ryu</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
      items: [
        { text: '新潟の夜空', src: require('../assets/img/star.jpg') },
        { text: '新潟の秋空', src: require('../assets/img/emo-cloud.jpg') },
        { text: '佐渡の浜辺', src: require('../assets/img/sado-sea.jpg') },
        { text: '新潟の稲穂', src: require('../assets/img/inaho.jpg') },
        { text: '新潟の新緑', src: require('../assets/img/sinryoku-2.jpg') }
      ]
    }
  }
}
</script>

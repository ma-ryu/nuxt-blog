<template>
  <v-carousel
    :continuous="true"
    :cycle="cycle"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    height="auto"
    
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item.src" lazy-src="https://dummyimage.com/1000x500/ccc/999.png&text=Loading" height="100%">
        <template v-slot:placeholder>
          <v-row justify="center" align-content="center" class="fill-height">
              <v-progress-circular
                indeterminate
              ></v-progress-circular>
          </v-row>
        </template>
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
      </v-img>
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
  },
}
</script>

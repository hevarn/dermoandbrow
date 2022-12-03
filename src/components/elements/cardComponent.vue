<template>
  <div class='panel'
       :class="prestation.id%2 === 0? 'panel_custom' : ''"
       @click="selectedPrestation(prestation) "
  >
    <h2 class='dark' data-splitting='words'>{{ prestation.name }}</h2>
    <div class='thumb'>
      <p>{{ prestation.name }}</p>
      <div class='inner'>
        <img class='invert' loading='lazy'
             src='@/assets/img/brow.jpg'>
      </div>
    </div>
  </div>
</template>

<script>
import useEmetter from "@/utils/useEmetter.js";
export default {
  name: "cardComponent",
  props:{
    prestation:{
      type: Object,
      require:false,
      default: null,
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    selectedPrestation(prestation) {
      console.log('ici card compoennt', prestation)
      document.body.classList.add('active')
      useEmetter.emit('prestation', prestation)
    }
  },
}
</script>

<style scoped lang="scss">
.panel {
  &:nth-of-type(1) {
    &:before {
      content: "presentation" !important;
      top: 25% !important;
      left: -0%;
    }
  }
}




</style>
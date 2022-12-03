<template>
  <div id='frame'>
    <div id='close' @click="remove">
      <div></div>
      <strong class='circle'><p>•GO•BACK•</p></strong>
    </div>
    <div class='frame-wrap'>
      <div class='frame-container'>
        {{ service.name }}
<!--        <div v-for="prestation in service.prestation"></div>-->
<!--        <iframe id='pen' loading='lazy' src='' style='border:0'></iframe>-->
<!--        <a id='penlink' target='_blank'><strong>View the Code <span>&rarr;</span></strong></a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "frameComponent",
  props:{
    service:{
      type: Object,
      require:false,
      default: null,
    }
  },
  methods: {
    remove() {
      document.body.classList.remove("active");
    }
  }
}
</script>

<style scoped>

</style>
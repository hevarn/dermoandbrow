<template>
  <div id='frame'>
    <div id='close' @click="remove">
      <div></div>
      <strong class='circle' data-splitting='chars'>GO•BACK•</strong>
    </div>
    <div class='frame-wrap'>
      <div class='frame-container'>
        <div class="title-frame-container">
          <div class="blur">
            <h3 class='dark'><span>{{ service.name }}</span></h3>
          </div>
          <img :src="`/src/assets/img/${ service.image_path }`">
        </div>
        <div class="inner">
          <div class="prestations_list">
            <p>les préstations</p>
            <div v-for=" prestation in service.prestations" :key=" prestation.id" class="prestation">
              <div class="name">
                <p> {{ prestation.name }} </p>
                <p> - {{ prestation.content }}</p>
              </div>
              <div class="price">
                <p>{{ prestation.price }} / {{ prestation.time }}</p>
                <p></p>
              </div>
            </div>
            <p>A propos</p>
            <p class="about">is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution</p>
          </div>
        </div>
        <!--        <div>-->
        <!--          <img :src="`/src/assets/img/${ service.image_path }`">-->
        <!--        </div>-->
        <!--        <div class="content-frame-container">-->
        <!--          <p> {{ service.content}}</p>-->
        <!--        </div>-->
        <!--        <div class="prestations-frame-container"-->
        <!--             v-for="prestation in service.prestations"-->
        <!--        >-->
        <!--          <div>-->
        <!--            <img :src="`/src/assets/img/${ prestation.image_path }`">-->
        <!--          </div>-->
        <!--          <p> {{ prestation.contenu }}</p>-->
        <!--          <p> {{prestation.price}}</p>-->
        <!--          <p> {{prestation.time}}</p>-->
        <!--        </div>-->
        <!--        <div v-for="prestation in service.prestation"></div>-->
        <!--        <iframe id='pen' loading='lazy' src='' style='border:0'></iframe>-->
        <!--        <a id='penlink' target='_blank'><strong>View the Code <span>&rarr;</span></strong></a>-->
      </div>
    </div>
  </div>
</template>

<script>
import Splitting from "splitting";

export default {
  name: "frameComponent",
  props: {
    service: {
      type: Object,
      require: false,
      default: null,

    }
  },
  mounted() {
    Splitting()
  },
  methods: {
    remove() {
      document.body.classList.remove("active");
    },
    activeCircle() {
      Splitting()
    },
  }
}
</script>

<style scoped>

</style>
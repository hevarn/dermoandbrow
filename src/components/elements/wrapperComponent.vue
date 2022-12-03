<template>
  <div data-splitting='words' class="big_logo">
    <div class="wrapper">
      <img src="@/assets/img/back_logo_1.png">
      <img src="@/assets/img/back_logo_2.png">
      <img src="@/assets/img/back_logo_3.png">
      <img src="@/assets/img/back_logo_4.png">
      <img src="@/assets/img/back_logo_5.png">
      <img src="@/assets/img/back_logo_6.png">
      <img src="@/assets/img/back_logo_7.png">
    </div>
  </div>
  <p class='subhead'>Jessica Moderni</p>
  <about-me-component v-model="revert_color"/>
  <my-values-components />
  <div v-for="prestation in allPrestation" :key="prestation.id">
    <card-component :prestation="prestation"/>
  </div>
  <customer-reviews-component/>
  <map-component/>
  <footer-component/>
  <p class='subhead final'>Fin</p>
</template>

<script>
import CardComponent from "@/components/elements/cardComponent.vue";
import MapComponent from "@/components/elements/map/mapComponent.vue";
import FooterComponent from "@/components/elements/footer/footerComponent.vue";
import AboutMeComponent from "@/components/elements/presentation/aboutMeComponent.vue";
import MyValuesComponents from "@/components/elements/values/myValuesComponents.vue";
import CustomerReviewsComponent from "@/components/elements/customerReviews/customerReviewsComponent.vue";
import service from "@/utils/service.js";

export default {
  name: "testComponent",
  emits: ["prestation-from-wrapper"],
  components: {
    CustomerReviewsComponent,
    MyValuesComponents, AboutMeComponent, FooterComponent, MapComponent, CardComponent},
  data() {
    return {
      revert_color: false,
      allPrestation: null
    }
  },
  created() {
    console.log(service['hydra:member'])
    this.allPrestation = service['hydra:member']
  },
  watch: {
    revert_color(new_value) {
      if(null === new_value) {
        return
      }
      return this.$emit(new_value);
    }
  },
}
</script>
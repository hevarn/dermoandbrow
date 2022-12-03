<template>
<div id="values" class="panel">
  <h2 class='dark' data-splitting='words'>Mes Engagements</h2>
  <p class="title">mes engagements</p>
  <div class="wrapper_values">
    <div v-for="value in values" :key="value.id" class='value'>
      <h2 class='dark' data-splitting='words'>{{ value.name }}</h2>
      <div class='thumb'>
        <div class='inside_value'>
          <img class='invert' loading='lazy'
               src='@/assets/img/brow.jpg'>
        </div>
        <p>{{ value.content }}</p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "myValuesComponents",
  data() {
    return {
      values: [
        {
          id:1,
          name: "l'hygiène",
          content: "Matériel stérile à usage unique - désinfection du matériel après chaque client."
        },
        {
          id:1,
          name: "les produits",
          content: "Produits végan, bio Pigments haut de gamme. "
        },
        {
          id:1,
          name: "l'expérience",
          content: "Plus de 15 ans d’expérience dans le domaine de la beauté."
        },
        {
          id:1,
          name: "le conseil",
          content: "Un conseil personnalisé pour un résultat à votre image. "
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
<template>
    <div id="slider_reviews" class="panel">
      <h2 class='dark' data-splitting='words'>Elles me font confiance</h2>
      <div class="rolodex">
        <ul class="main-carousel">
          <li  class="carousel-cell" v-for="r in reviews" :key="r.id">
            <div class="inner_text">
              <p> {{r.description}}</p>
              <h3>
                {{ r.name }}
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "customerReviewsComponent",
  data() {
    return{
      reviews: [
        {
          id: 1,
          name: 'cecile.G',
          description: "J'ai consulté pour une restructuration des sourcils \n"+
              " avec teinture au henné et le résultat est \n"+
              "parfait! Cela modifie complètement le regard c'est incroyable et c'est vraiment un travail de précision.\n"+
              " Jessica a pris le temps pour que cela soit impeccable, de plus c'est une personne à l'écoute et très \n"+
              "disponible, je recommande vraiment cette professionnelle et je reviendrai pour d'autres prestations!\n"
        },
        {
        id: 2,
          name: 'Nina.F',
          description: "Jessica est une professionnelle du maquillage semi-permanent à qui vous pouvez faire confiance" +
              " les yeux fermés ! Elle m'a effectué un powder brows précédé d'une épilation au fil avec restructuration " +
              "des sourcils et , le résultat est incroyable je suis très contente ! Merci beaucoup !"
        },
        {
        id: 3,
          name: 'Stephanie.B',
          description: "Un grand merci à Jessica pour son travail de qualité.\n" +
              "Je lui ai confié mes sourcils sereine ( épilation au fil +henné)\n" +
              "Wahouuu !! Quel résultat.\n" +
              "Mes sourcils sont redessinés et sublimés à la perfection. Le rendu est hyper naturel et correspond parfaitement à ce que je souhaitais.\n" +
              "\n" +
              "Jessica s'est aussi occupée de mon maquillage de mariée.\n" +
              "Un make up travaillé mais à la fois doux et naturel.\n" +
              "Je n'ai reçu que des compliments le Jour J"
        },
        {
        id: 4,
          name: 'Rachel.F',
          description: "Il y a quelques mois, Jessica avait donné une seconde vie à mes sourcils avec une épilation au fil et une teinture au henné.\n" +
              " Je me suis enfin décidée pour un maquillage semi permanent ou sourcils shading. Et quel résultat !\n" +
              " Je suis totalement satisfaite, mes sourcils sont parfaitement redessinés et l'effet est très naturel.\n" +
              "Jessica est très appliquée et minutieuse, c'est une magicienne des sourcils \n" +
              " Encore merci pour cet excellent travail Jessica ! Je recommande vivement ."
        }
      ],
      interval: null,
    }
  },
  created() {
    this.interval = setInterval(() => {

    }, 1000)
  },
  methods: {
   add() {
     setInterval(()=> {
       this.reviews
     }, 1000)
   }
  }
}
</script>
<style lang="css">
@import "flickity/css/flickity.css";

</style>
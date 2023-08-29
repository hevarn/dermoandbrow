<template>
  <div id="footer" class="panel">
    <h2 class='dark' data-splitting='words'>Contact</h2>
    <div class="container_footer">
      <div class="element">
        <div class="texte">
          <p>jessica moderni® -- copyright© -- 2022</p>
        </div>
      </div>
      <div class="element">
        <div class="texte contact">
          <p>contact</p>
          <a href="tel:0786930119">
            <p>07.86.93.01.19</p>
          </a>
          <a href="mail:jessicamoderni.dermo@gmail.com">
            <p>jessicamoderni.dermo@gmail.com</p>
          </a>
        </div>
      </div>
      <div class="element">
        <div class="lien_sociaux">
          <div class="social-icons">
            <a
                class="social-icon social-icon--instagram"
                href="https://www.instagram.com/dermo_and_brows_/?utm_medium=copy_link"
            >
              <i class="site"
              ><img
                  src="@/assets/img/instagram.png"
                  alt=" logo instagram pour être redirigé vers page instagram "
              /></i>
              <div id="tooltip">Instagram</div>
            </a>
            <a
                class="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/jessica-moderni-9704031a1/"
            >
              <i class="site"
              ><img
                  src="@/assets/img/linkedin.png"
                  alt="logo linkedin pour être redirigé vers page linkedin "
              /></i>
              <div id="tooltip">LinkedIn</div>
            </a>
            <a
                class="social-icon social-icon--facebook"
                href="https://www.facebook.com/Dermo-Brows-111691174776354"
            >
              <i class="site"
              ><img
                  src="@/assets/img/facebook.png"
                  alt="logo facebook pour être redirigé vers page facebook "
              /></i>
              <div id="tooltip">Facebook</div>
            </a>
            <a
                class="social-icon social-icon--site"
                href="https://dermoandbrows.fr"
            >
              <i class="site jess"
              ><img
                  src="@/assets/img/logo_jess_icon.png"
                  alt="logo du site pour être redirigé vers page le site "
              /></i>
              <div id="tooltip">dermo&brow's</div>
            </a>
          </div>
        </div>
      </div>
      <div class="element mention">
        <a class="mention" href="{{ path('mention') }}">
          <div class="titre_mention_legal">
            <p class="mention">mention legal</p>
          </div>
        </a>
      </div>
      <div class="remerciements">
        <p>
          Je souhaite remercier ma famille et mes amies qui me soutiennent au
          quotidien et me pousse à donner le meilleur de moi-même. Je remercie
          également les centres de formation dans lesquels j’apprends ce
          magnifique métier de Dermographe, qui me permet d’œuvrer pour votre
          beauté durable. Merci
          <a href="https://www.formation-massage-esthetique.fr/"
          >@lecomptoirbeaute</a
          >
          <a href="https://arsbeaute.com/">@arsbeaute</a>
          <a href="https://www.maud-academy.com/">@maudacademy</a>
          sans oublier mon mari qui réalise ce magnifique site
        </p>
      </div>
      <div class="element technique">
        <div class="texte contact">
          <p>
            support technique, si vous détectez un problème, adressé un mail à
          </p>
          <a href="mailto:nunzio.moderni@gmail.com">
            <p class="support">cliquez ici</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerComponent',
}
</script>

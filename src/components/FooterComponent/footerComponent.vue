<template>
  <div id="footer">
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
                  src="{{ asset('build/images/icon/instagram.png') }}"
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
                  src="{{ asset('build/images/icon/linkedin.png') }}"
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
                  src="{{ asset('build/images/icon/logo-facebook.png') }}"
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
                  src="{{ asset('build/images/icon/logo_jess_icon.png') }}"
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

<style scoped lang="scss" rel="stylesheet/scss">
/*#Tooltips */
/*#footer .element .titre_mention_legal:hover{*/
/*  transition: 400ms;*/
/*  box-shadow: 10px 10px 0 var(--color_white);*/
/*  transform: translate(-10px, -10px);*/
/*}*/
@media all and (min-width: 300px) {
  #footer {
    width: 100%;
    padding: 5rem 0;
    background-color: var(--color_black);
    color: var(--color_white);
    position: relative;
    font-size: var(--xs_font);
    .plante {
      position: absolute;
      top: 10%;
      left: 10%;
      transform: translate(-50%, -50%);
      img {
        width: 250px;
      }
    }
    .container_footer {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 1rem;
      .element {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        min-height: 119px;
        border: 1px solid var(--color_white);
        width: 476px;
        transition: 400ms ease-in-out;
        &:hover {
          transition: 400ms;
          box-shadow: 10px 10px 0 var(--color_white);
          transform: translate(-10px, -10px);
        }
        .texte {
          text-transform: uppercase;
        }
        .contact {
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            p {
              transition: 0.5s;
              &:hover {
                transform: scale(1.2);
                transition: 0.5s;
                background-color: var(--color_white);
                padding: 0.3rem;
                color: var(--color_black);
              }
            }
          }
        }
        .lien_sociaux {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 150%;
        }
      }
      .remerciements {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        min-height: 119px;
        border: 1px solid var(--color_white);
        width: 476px;
        transition: 400ms ease-in-out;
        border: none;
        font-size: var(--s_font);
        p {
          line-height: 33px;
        }
        a {
          background-color: var(--color_white);
          padding: 0.2rem;
          margin: 0.1rem;
          color: var(--color_black);
        }
      }
    }
    .site {
      img {
        width: 46px;
        margin-bottom: 2px;
      }
    }
    .element {
      .titre_mention_legal {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        transition: 400ms ease-in-out;
      }
      a {
        text-transform: uppercase;
        color: var(--color_white);
        text-decoration: none;
        transition: 0.5s;
      }
    }
  }
  .social-icons {
    display: flex;
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    margin: 0 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: var(--s_font);
    text-decoration: none;
    transition: all 0.15s ease;
    &:hover {
      color: #fff;
      #tooltip {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -150%);
      }
    }
    &:active {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset;
    }
    i {
      position: relative;
      top: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .social-icon--linkedin {
    background: var(--color_white);
    color: #fff;
    #tooltip {
      background: #006599;
      color: currentColor;
      &:after {
        border-top-color: #006599;
      }
    }
  }
  .social-icon--facebook {
    background: var(--color_white);
    color: #fff;
    #tooltip {
      background: #3b5a9b;
      color: currentColor;
      &:after {
        border-top-color: #3b5a9b;
      }
    }
  }
  .social-icon--instagram {
    background: var(--color_white);
    color: #fff;
    #tooltip {
      background: #527fa6;
      color: currentColor;
      &:after {
        border-top-color: #527fa6;
      }
    }
  }
  .social-icon--site {
    background: var(--color_white);
    color: #fff;
    #tooltip {
      background: var(--color_2);
      color: currentColor;
      &:after {
        border-top-color: var(--color_2);
      }
    }
  }
  #tooltip {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 104px;
    padding: 0.8rem 1rem;
    border-radius: 40px;
    font-size: 0.8rem;
    font-weight: bold;
    opacity: 0;
    pointer-events: none;
    text-transform: uppercase;
    transform: translate(-50%, -100%);
    transition: all 0.3s ease;
    z-index: 1;
    &:after {
      display: block;
      position: absolute;
      bottom: 1px;
      left: 50%;
      width: 0;
      height: 0;
      content: '';
      border: solid;
      border-width: 10px 10px 0 10px;
      border-color: transparent;
      transform: translate(-50%, 100%);
    }
  }
}
@media screen and (min-width: 1020px) {
  #footer {
    .container_footer {
      .technique {
        width: 1000px;
      }
      .remerciements {
        width: 1000px;
      }
    }
  }
}
@media screen and (min-width: 1530px) {
  #footer {
    .container_footer {
      .mention {
        width: 1500px;
      }
      .technique {
        width: 1500px;
      }
    }
  }
}
</style>

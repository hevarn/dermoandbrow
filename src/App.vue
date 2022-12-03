<template>
  <body-component/>
</template>
<script>
import BodyComponent from "@/components/body/bodyComponent.vue";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Splitting from "splitting";
import Flickity from 'flickity'
export default {
  components: {
    BodyComponent,
  },
  mounted() {
    this.methode()
    this.carousel()
  },
  methods: {
    methode() {

      gsap.registerPlugin(ScrollTrigger);

      let cursor = document.getElementById("cursor");
      const cursorElements = cursor.children
      let close = document.getElementById("close");
      let body = document.body;
      let iframe = document.getElementById("pen");
      let penLink = document.getElementById("penlink");
      let links = document.getElementsByTagName("a");

      let frames = [
        "https://codepen.io/cobra_winfrey/debug/xxVJZwo",
        "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
        "https://codepen.io/cobra_winfrey/debug/OJVJJoj",
        "https://cdpn.io/cobra_winfrey/debug/YzXOBEN",
        "https://codepen.io/cobra_winfrey/debug/qBZWVmO",
        "https://codepen.io/cobra_winfrey/debug/eYOXOdB",
        "https://codepen.io/cobra_winfrey/debug/OJXJeod",
        "https://codepen.io/cobra_winfrey/debug/PoqVQRq",
        "https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
        "https://codepen.io/cobra_winfrey/debug/RwWYGxj"
      ];
      const about = document.getElementById("description")
      about.addEventListener('mousemove', ()=> {
        cursor.classList.add("revert_color");
      })
      about.addEventListener("mouseout", ()=>{
        cursor.classList.remove("revert_color");
      })

      const values = document.getElementsByClassName("inside_value")
      for (let i = 0; i < values.length; i++) {
        values[i].addEventListener("mousemove", function (event) {
          // let childCursor = cursor.firstElementChild;
          cursorElements[0].classList.add("show_value");
        });
        values[i].addEventListener("mouseout", function (event) {
          // let childCursor = cursor.firstElementChild;
          cursorElements[0].classList.remove("show_value");
        });
      }

// Load iFrames on demand & remove after modal is closed to reduce weight & smooth out transitions


      let cards = document.getElementsByClassName("inner");
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mousemove", function (event) {
          cursor.classList.add("active");
        });
        cards[i].addEventListener("mouseout", function (event) {
          cursor.classList.remove("active");
        });
        // cards[i].addEventListener(
        //     "click",
        //     function (i) {
        //       body.classList.add("active");
        //       iframe.setAttribute("src", frames[i]);
        //       let penDebug = frames[i];
        //       let penFull = penDebug.replace("debug", "pen");
        //       penLink.setAttribute("href", penFull);
        //     }.bind(null, i)
        // );
      }

// hover events for social links
      let link;
      for (link of links) {
        link.addEventListener("mouseover", function (event) {
          cursor.classList.add("linkhover");
        });
        link.addEventListener("mousemove", function (event) {
          cursor.classList.add("linkhover");
        });
        link.addEventListener("mouseout", function (event) {
          cursor.classList.remove("linkhover");
        });
      }

// Escape key option to exit active state

      // document.onkeydown = function (evt) {
      //   evt = evt || window.event;
      //   let isEscape = false;
      //   if ("key" in evt) {
      //     isEscape = evt.key === "Escape" || evt.key === "Esc";
      //   } else {
      //     isEscape = evt.keyCode === 27;
      //   }
      //   if (isEscape) {
      //     body.classList.remove("active");
      //     setTimeout(() => {
      //       iframe.setAttribute("src", "");
      //     }, 2000);
      //   }
      // };

      // close.addEventListener("click", function (event) {
      //   body.classList.remove("active");
      // });

      gsap.set("#cursor", {xPercent: -50, yPercent: -50});
      const pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
      const mouse = {x: pos.x, y: pos.y};
      const speed = 0.35;

      const xSet = gsap.quickSetter(cursor, "x", "px");
      const ySet = gsap.quickSetter(cursor, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });

      Splitting();

// Individual section scroll progress


      gsap.utils.toArray(".panel").forEach((section, index) => {
        gsap.to(this, {
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "bottom 25%",
            scrub: 0,
            onUpdate: (self) => {
              section.style.setProperty("--progress", self.progress);
            }
          }
        });
      });

// Full page scroll progress

      gsap.to("body", {
        scrollTrigger: {
          trigger: "body",
          start: "top 100%",
          end: "50% 50%",
          scrub: 0,
          onUpdate: (self) => {
            body.style.setProperty("--progress", String(self.progress));
          }
        }
      });

// Pull out the preloader

      document.addEventListener("DOMContentLoaded", function () {
        body.classList.add("loaded");
      });


      function refresh() {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 2500);
      }

      window.addEventListener("resize", refresh);
    },
    carousel() {
      let flkty = new Flickity( '.main-carousel', {
        autoPlay: 8000,
        pauseAutoPlayOnHover: false,
        adaptiveHeight: true
      });
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

</style>